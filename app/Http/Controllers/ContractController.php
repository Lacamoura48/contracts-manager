<?php

namespace App\Http\Controllers;

use App\Models\Bond;
use App\Models\Contract;
use Carbon\Carbon;
use Illuminate\Http\Request;
use Inertia\Inertia;

class ContractController extends Controller
{
    /**
     * Display a listing of the resource.
     */
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
            ->paginate(12);

        return Inertia::render('contracts/Contracts', [
            'contracts' => $contracts,
        ]);
    }

    /**
     * Show the form for creating a new resource.
     */
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
        ]);

        // Create the loan
        $contract = Contract::create([
            'client_id' => $validated['client_id'],
        ]);

        // Calculate each payback amount
        $paybackAmount = $validated['total_price'] / $validated['contract_type'];

        // Generate and store paybacks
        for ($i = 0; $i < $validated['contract_type']; $i++) {
            Bond::create([
                'contract_id' => $contract->id,
                'amount' => $paybackAmount,
                'payement_date' => Carbon::now()->addMonths($i), // Add one month per iteration
            ]);
        }
    }

    /**
     * Display the specified resource.
     */
    public function show(Contract $contract)
    {
        //
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
        //
    }
}
