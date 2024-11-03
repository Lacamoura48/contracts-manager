<?php

namespace App\Http\Controllers;

use App\Mail\ContractUrlMail;
use App\Mail\NotifyViewMail;
use App\Models\Bond;
use App\Models\Client;
use App\Models\Contract;
use Carbon\Carbon;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\File;
use Illuminate\Support\Facades\Mail;
use Inertia\Inertia;

class ContractController extends Controller
{
    public function saveImage($image)
    {
        $filename = uniqid('bi_') . '.' . $image->getClientOriginalExtension();
        $image->move(public_path('images/bi'), $filename);
        return '/images/bi/' . $filename;
    }

    public function index(Request $request)
    {
        $client_id = $request->get("client_id");
        $contractsQuery = Contract::query();
        if ($client_id) {
            $contractsQuery->where('client_id', $client_id);
        }
        $contracts = $contractsQuery
            ->with(['client' => function ($query) {
                $query->select('id', 'full_name');
            }])
            ->with(['bonds' => function ($query) {
                $query->select('contract_id', 'status', 'payement_date');
            }])
            ->orderBy('created_at', 'desc')
            ->paginate(5);

        return Inertia::render('contracts/Contracts', [
            'contracts' => $contracts,
        ]);
    }

    public function files(Request $request, Contract $contract)
    {
        $contract_data = $contract
            ->with(['files' => function ($query) {
                $query->orderBy('created_at', 'desc');
            }])
            ->with(['client' => function ($query) {
                $query->select('id', 'full_name');
            }])
            ->find($contract->id);
        return Inertia::render('contracts/ContractFiles', ["contract" => $contract_data]);
    }
    public function create()
    {
        return Inertia::render('contracts/ContractsForm');
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        $validated = $request->validate([
            'client_id' => 'required|exists:clients,id',
            'total_price' => 'required|numeric|min:1',
            'contract_type' => 'required|in:3,4,6,8,10,12',
            'start_date' => 'date|required',
            'work_duration' => 'numeric|min:1|required',
            'start_amount' => 'numeric|min:1|required',
            'bonds_array' => 'nullable',
            'width' => 'nullable',
            'height' => 'nullable',
            'intensity' => 'nullable',
            'notes' => 'nullable',
        ]);
        // Create the loan
        $contract = Contract::create([
            'client_id' => $validated['client_id'],
            'work_duration' => $validated['work_duration'],
            'width' => $validated['width'],
            'height' => $validated['height'],
            'intensity' => $validated['intensity'],
            'notes' => $validated['notes'],
        ]);
        $contract->generateUniqueUrl();
        $contract->generateCode();

        // Calculate each payback amount
        $paybackAmount = ($validated['total_price'] - $validated['start_amount']) / ($validated['contract_type'] - 1);

        $startDate = Carbon::createFromFormat('Y-m-d', $validated['start_date']);
        for ($i = 0; $i < count($validated['bonds_array']); $i++) {
            $path = "";
            $currentBond = $validated['bonds_array'][$i];
            if ($currentBond['proof_image'])
                $path = $this->saveImage($currentBond['proof_image']);
            Bond::create([
                'contract_id' => $contract->id,
                'amount' => $i == 0 ? $validated['start_amount'] : $paybackAmount,
                'payement_date' => $i == 0 ? $startDate : $startDate->copy()->startOfMonth()->addMonth()->addMonths($i - 1),
                'proof_image' => $path,
                'title' => $currentBond['title'],
                'postable' => $currentBond['postable'],
            ]);
        }
        return to_route("contracts.show", $contract->id);
    }

    /**
     * Display the specified resource.
     */
    public function show(Contract $contract)
    {
        $contract_data = $contract
            ->with('bonds')
            ->with(['client' => function ($query) {
                $query->select('full_name', 'phone', 'phone2', 'id');
            }])
            ->withSum('bonds', 'amount')
            ->withCount('bonds')
            ->withCount('files')
            ->find($contract->id);

        return Inertia::render('contracts/ContractPage', [
            'contract' => $contract_data
        ]);
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Contract $contract)
    {
        $contract_data = $contract
            ->with('bonds')
            ->withSum('bonds', 'amount')
            ->withCount('bonds')
            ->find($contract->id);
        return Inertia::render('contracts/ContractsForm', ['contract' => $contract_data]);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, Contract $contract)
    {
        $validated = $request->validate([
            'client_id' => 'required|exists:clients,id',
            'total_price' => 'required|numeric|min:1',
            'contract_type' => 'required|in:3,4,6,8,10,12',
            'start_date' => 'date|required',
            'work_duration' => 'numeric|min:1|required',
            'start_amount' => 'numeric|min:1|required',
            'bonds_array' => 'nullable',
            'width' => 'nullable',
            'height' => 'nullable',
            'intensity' => 'nullable',
            'notes' => 'nullable',
        ]);

        $contract->update([
            'client_id' => $validated['client_id'],
            'work_duration' => $validated['work_duration'],
            'width' => $validated['width'],
            'height' => $validated['height'],
            'intensity' => $validated['intensity'],
            'notes' => $validated['notes'],
        ]);

        $paybackAmount = ($validated['total_price'] - $validated['start_amount']) / ($validated['contract_type'] - 1);

        $startDate = Carbon::createFromFormat('Y-m-d', $validated['start_date']);
        $old_bonds = Bond::where('contract_id', $contract->id)->get();
        $countOldBonds = Bond::where('contract_id', $contract->id)->count();
        for ($i = 0; $i < $validated['contract_type']; $i++) {
            if ($countOldBonds > $i) {
                $old_bonds[$i]->update([
                    'amount' => $i == 0 ? $validated['start_amount'] : $paybackAmount,
                    'payement_date' => $i == 0 ? $startDate : $startDate->copy()->startOfMonth()->addMonth()->addMonths($i - 1),
                ]);
            } else {
                $path = "";
                if ($request->file("proof" . $i + 1))
                    $path = $this->saveImage($request->file("proof" . $i + 1));
                Bond::create([
                    'contract_id' => $contract->id,
                    'amount' => $paybackAmount,
                    'payement_date' => $i == 0 ? $startDate : $startDate->copy()->startOfMonth()->addMonth()->addMonths($i - 1),
                    'proof_image' => $path,
                    'postable' => true,
                ]);
            }
        }
        if ($countOldBonds > $validated['contract_type']) {
            for ($i = $validated['contract_type']; $i < $countOldBonds; $i++) {
                if (File::exists(substr($old_bonds[$i]->proof_image, 1))) {
                    File::delete(substr($old_bonds[$i]->proof_image, 1));
                }
                $old_bonds[$i]->delete();
            }
        }
        return to_route("contracts.show", $contract->id);
    }

    public function live(Request $request, $uuid)
    {
        $contract = Contract::where('uuid', $uuid)->firstOrFail();

        // Mark as read if not already
        if (!$contract->read) {
            $contract->read = true;
            $contract->read_at = now();
            $contract->save();
        }
        if (!Auth::check()) {
            Mail::to(env('ADMIN_MAIL', 'anasfog@outlook.com'))->send(new NotifyViewMail($contract->client->full_name));
        }
        $contract_data = $contract
            ->with(['bonds' => function ($query) {
                $query->orderBy('id')->select('contract_id', 'amount', 'payement_date');
            }])
            ->with(['client' => function ($query) {
                $query->select('id', 'full_name', 'phone', 'email', 'id_code');
            }])
            ->with(['files' => function ($query) {
                $query->where('as_note', 1)->select('title', 'contract_id');
            }])
            ->withSum('bonds', 'amount')
            ->withCount('bonds')
            ->find($contract->id);
        return Inertia::render('contracts/LiveContract', [
            'contract' => $contract_data,
        ]);
    }
    public function send(Contract $contract)
    {
        if ($contract->client->email) {
            // dd($contract->client->email);
            $contractUrl = url(env('APP_URL') . '/contracts/live/' . $contract->uuid);
            // dd(url($contractUrl));
            Mail::to($contract->client->email)->send(new ContractUrlMail($contractUrl));
        }
    }
    // public function sign(Request $request, Contract $contract)
    // {
    //     $validated = $request->validate([
    //         'id_code' => 'required|max:18|min:18|exists:clients,id_code',
    //     ]);
    //     $client = Client::where('id_code', $validated['id_code'])->firstOrFail();
    //     $contract->read_by = $client->full_name;
    //     $contract->read_at = now();
    //     $contract->save();
    //     return to_route('contracts.live', $contract->uuid);
    // }
    public function destroy(Contract $contract)
    {
        $contract->delete();
        return to_route('contracts.index');
    }
}
