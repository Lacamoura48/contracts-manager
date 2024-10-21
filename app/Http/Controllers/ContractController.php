<?php

namespace App\Http\Controllers;

use App\Models\Bond;
use App\Models\Contract;
use Carbon\Carbon;
use Illuminate\Http\Request;
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
            ->paginate(12);

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
            'contract_type' => 'required|in:0,4,6,8,10,12',
            'start_date' => 'date|required',
            'start_amount' => 'numeric|required',
            'proof1' => 'nullable',
            'proof2' => 'nullable',
            'proof3' => 'nullable',
            'proof4' => 'nullable',
            'proof5' => 'nullable',
            'proof6' => 'nullable',
            'proof7' => 'nullable',
            'proof8' => 'nullable',
            'proof9' => 'nullable',
            'proof10' => 'nullable',
            'proof11' => 'nullable',
            'proof12' => 'nullable',
        ]);

        // Create the loan
        $contract = Contract::create([
            'client_id' => $validated['client_id'],
        ]);

        // Calculate each payback amount
        $paybackAmount = ($validated['total_price'] - $validated['start_amount']) / ($validated['contract_type'] - 1);

        $startDate = Carbon::createFromFormat('Y-m-d', $validated['start_date']);
        for ($i = 0; $i < $validated['contract_type']; $i++) {
            $path = "";
            if ($request->file("proof" . $i + 1))
                $path = $this->saveImage($request->file("proof" . $i + 1));
            Bond::create([
                'contract_id' => $contract->id,
                'amount' => $i == 0 ? $validated['start_amount'] : $paybackAmount,
                'payement_date' => $i == 0 ? $startDate : $startDate->copy()->startOfMonth()->addMonth()->addMonths($i - 1),
                'proof_image' => $path,
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
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, Contract $contract)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Contract $contract)
    {
        $contract->delete();
        return redirect('contracts.index');
    }
}
