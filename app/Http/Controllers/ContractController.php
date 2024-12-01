<?php

namespace App\Http\Controllers;

use App\Mail\NotifyViewMail;
use App\Mail\ClientContractSend;
use App\Models\Bond;
use App\Models\Contract;
use App\Models\ContractPrefrence;
use App\Models\Prefrence;
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
    public function saveSignature($image)
    {
        $filename = uniqid('sig_') . '.' . $image->getClientOriginalExtension();
        $image->move(public_path('images/sig'), $filename);
        return '/images/sig/' . $filename;
    }

    public function index(Request $request)
    {

        $client_id = $request->get("client_id");
        $trashView = $request->get("trash");
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
            ->where('trash', $trashView ? 1 : 0)
            ->orderBy('created_at', 'desc')
            ->paginate(5);

        return Inertia::render('contracts/Contracts', [
            'contracts' => $contracts,
        ]);
    }


    public function files(Request $request, Contract $contract)
    {
        $type = $request->get('type');
        $contract_data = null;
        if ($type === 'notes') {
            $contract_data = $contract
                ->with(['files' => function ($query) {
                    $query->where('as_note', 1)->orderBy('created_at', 'desc');
                }])
                ->with(['client' => function ($query) {
                    $query->select('id', 'full_name');
                }])
                ->find($contract->id);
        } else {
            $contract_data = $contract
                ->with(['files' => function ($query) {
                    $query->where('as_note', 0)->orderBy('created_at', 'desc');
                }])
                ->with(['client' => function ($query) {
                    $query->select('id', 'full_name');
                }])
                ->find($contract->id);
        }

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
            'type' => 'required',
            'contract_type' => 'required|in:3,4,6,8,10,12',
            'start_date' => 'date|required',
            'work_duration' => 'numeric|min:1|required',
            'start_amount' => 'numeric|min:1|required',
            'bonds_array' => 'nullable',
            'contract_prefrences' => 'nullable',
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
            'type' => $validated['type'],
            'intensity' => $validated['intensity'],
            'notes' => $validated['notes'],
            'user_id' => Auth::user()->id,
        ]);
        if ($request->get('contract_prefrences') && count($request->get('contract_prefrences')) > 0) {
            foreach ($request->get('contract_prefrences') as $pref) {
                ContractPrefrence::create([
                    'title' => $pref['title'],
                    'description' => $pref['description'],
                    'contract_id' => $contract->id,
                ]);
            }
        }

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
        Activity()->performedOn($contract)->withProperty('client_id', $contract->client->id)->log(Auth::user()->name . " قام بإنشاء عقد ل " . $contract->client->full_name);
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
                $query->select('full_name', 'phone', 'phone2', 'id', 'email', 'id_code');
            }])
            ->with('user')
            ->with('files')
            ->with('contract_prefrences')
            ->withSum('bonds', 'amount')
            ->withCount('bonds')
            ->withCount('files')
            ->find($contract->id);
        $terms = Prefrence::all('terms');
        return Inertia::render('contracts/ContractPage', [
            'contract' => $contract_data,
            'terms' => $terms
        ]);
    }


    public function edit(Contract $contract)
    {
        $contract_data = $contract
            ->with('bonds')
            ->with('contract_prefrences')
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
            'type' => 'required',
            'work_duration' => 'numeric|min:1|required',
            'start_amount' => 'numeric|min:1|required',
            'bonds_array' => 'nullable',
            'width' => 'nullable',
            'height' => 'nullable',
            'intensity' => 'nullable',
            'notes' => 'nullable',
            'contract_prefrences' => 'nullable',
        ]);
        ContractPrefrence::where('contract_id', $contract->id)->delete();
        if ($request->get('contract_prefrences') && count($request->get('contract_prefrences')) > 0) {
            foreach ($validated['contract_prefrences'] as $pref) {
                ContractPrefrence::create([
                    'title' => $pref['title'],
                    'description' => $pref['description'],
                    'contract_id' => $contract->id,
                ]);
            }
        }
        $contract->update([
            'client_id' => $validated['client_id'],
            'work_duration' => $validated['work_duration'],
            'width' => $validated['width'],
            'height' => $validated['height'],
            'type' => $validated['type'],
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
        Activity()->performedOn($contract)->withProperty('client_id', $contract->client->id)->log(Auth::user()->name . " قام بتعديل على عقد " . $contract->client->full_name);
        return to_route("contracts.show", $contract->id);
    }

    public function live(Request $request, $uuid)
    {
        $contract = Contract::where('uuid', $uuid)->firstOrFail();
        $full_name = $contract->client->full_name;

        // Mark as read if not already
        if (!$contract->read) {
            $contract->read = true;
            if (!Auth::check()) {
                Mail::to(env('ADMIN_MAIL', 'anasfog@outlook.com'))->send(new NotifyViewMail($full_name, "تم فتح العقد الخاص ب$full_name", "emails.viewMail"));
            }
        }
        $delayedTime = Carbon::create($contract->read_at)->addMinutes(5);
        $currentTime = Carbon::now();
        if (!Auth::check() && $currentTime > $delayedTime) {
            Mail::to(env('ADMIN_MAIL', 'anasfog@outlook.com'))->send(new NotifyViewMail($full_name, "تم فتح العقد الخاص ب$full_name", "emails.viewMail"));
        }
        $contract->read_at = now();
        $contract->save();
        $contract_data = $contract
            ->with(['bonds' => function ($query) {
                $query->orderBy('id')->select('contract_id', 'amount', 'payement_date', 'status', 'postable', 'action_done');
            }])
            ->with(['client' => function ($query) {
                $query->select('id', 'full_name', 'phone', 'email', 'id_code');
            }])
            ->with('files')
            ->with('user')
            ->with('contract_prefrences')
            ->withSum('bonds', 'amount')
            ->withCount('bonds')
            ->find($contract->id);
        $terms = Prefrence::all('terms');
        return Inertia::render('contracts/LiveContract', [
            'contract' => $contract_data,
            'terms' => $terms
        ]);
    }
    public function send(Request $request, Contract $contract)
    {
        // dd($contract->client->email);
        Mail::to($contract->client->email)->send(new NotifyViewMail("hello world", "العقد الخاص بك جاهز", "emails.sendMail"));
    }
    public function sign(Request $request, Contract $contract)
    {
        $validated = $request->validate([
            'signature' => 'required',
        ]);
        $contract->signature = $validated['signature'];
        $contract->save();
    }
    public function signProof(Request $request, Contract $contract)
    {
        $validated = $request->validate([
            'signature_proof' => 'required|image',
        ]);
        $path = $this->saveImage($request->file('signature_proof'));
        $contract->signature_proof = $path;
        $contract->save();
    }
    public function signReset(Request $request, Contract $contract)
    {
        if (File::exists(substr($contract->signature_proof, 1))) {
            File::delete(substr($contract->signature_proof, 1));
        }
        $contract->signature_proof = null;
        $contract->signature = null;
        $contract->save();
    }

    public function trash(Request $request, Contract $contract)
    {
        if ($contract->trash == 1) {
            $contract->trash = 0;
        } else {
            $contract->trash = 1;
        }
        $contract->save();
    }

    public function destroy(Contract $contract)
    {
        Activity()->performedOn($contract)->withProperty('client_id', $contract->client->id)->log(Auth::user()->name . " قام بحذف عقد ل " . $contract->client->full_name);
        $contract->delete();
    }
}
