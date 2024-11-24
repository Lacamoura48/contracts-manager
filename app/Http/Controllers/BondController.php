<?php

namespace App\Http\Controllers;

use App\Models\Bond;
use Carbon\Carbon;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\File;
use Inertia\Inertia;

class BondController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index(Request $request)
    {
        $month = $request->get("month") ?? Carbon::now()->toDateTimeString();
        $clientId = $request->get("client_id");
        $status = $request->get("status");
        $bondsQuery = Bond::query();
        if ($month) {
            $startOfMonth = Carbon::parse($month)->startOfMonth();
            $endOfMonth = Carbon::parse($month)->endOfMonth();
            $bondsQuery->whereBetween('payement_date', [$startOfMonth, $endOfMonth]);
        }
        if ($status) {
            $today = Carbon::today();
            if ($status == 'paid') {
                $startOfMonth = $today->copy()->startOfMonth();
                $endOfMonth = $today->copy()->endOfMonth();
                $bondsQuery
                    ->whereBetween('bonds.payement_date', [$startOfMonth, $endOfMonth])
                    ->where('status', 'paid');
            }
            if ($status == 'late') {
                $twoDaysAfter = $today->copy()->subDays(2);
                $threeDaysLate = $today->copy()->subDays(3);
                $bondsQuery
                    ->whereBetween('bonds.payement_date', [$threeDaysLate, $twoDaysAfter])
                    ->whereNull('bonds.status');
            }
            if ($status == 'pending') {
                $oneDayLate = $today->copy()->subDays(1);
                $bondsQuery
                    ->whereBetween('bonds.payement_date', [$oneDayLate, $today])
                    ->whereNull('bonds.status');
            }
            if ($status == 'very_late') {
                $fourDaysLate = $today->copy()->subDays(4);
                $bondsQuery
                    ->where('bonds.payement_date', '<=', $fourDaysLate)
                    ->whereNull('bonds.status');
            }
        }
        if ($clientId) {
            $bondsQuery->whereHas('contract', function ($query) use ($clientId) {
                $query->where('client_id', $clientId);
            });
        }
        $bonds = $bondsQuery
            ->with([
                'contract' => function ($query) {
                    $query->select('id', 'client_id'); // Select specific columns from the contract table
                },
                'contract.client' => function ($query) {
                    $query->select('id', 'full_name', 'phone'); // Select specific columns from the user table
                }
            ])
            ->orderBy('created_at', 'desc')
            ->get();

        return Inertia::render('bonds/Bonds', [
            'bonds' => $bonds,
        ]);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        //
    }

    /**
     * Display the specified resource.
     */
    public function show(Bond $bond)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Bond $bond)
    {
        //
    }

    public function saveImage($image)
    {
        $filename = uniqid('bi_') . '.' . $image->getClientOriginalExtension();
        $image->move(public_path('images/bi'), $filename);
        return '/images/bi/' . $filename;
    }
    public function update(Request $request, Bond $bond)
    {
        $data = [];
        $path = null;
        if ($request->hasFile('proof_image')) {
            if (File::exists(substr($bond->proof_image, 1))) {
                File::delete(substr($bond->proof_image, 1));
            }
            $path =  $this->saveImage($request->file("proof_image"));
            $data['proof_image'] = $path;
        }
        if ($request->has('status')) {
            $data['status'] = $request->get('status');
            Activity()->performedOn($bond)->log(Auth::user()->name . " قام بتغيير حالة الدفعة على العقد " . $bond->contract->code);
        }
        if ($request->has('action_done')) {
            $data['action_done'] = $request->get('action_done');
            Activity()->performedOn($bond)->log(Auth::user()->name . " قام بتغيير ملاحظة الدفعة على العقد " . $bond->contract->code);
        }
        if ($request->has('amount')) {
            $data['amount'] = $request->get('amount');
            $bonds = Bond::where('contract_id', $bond["contract_id"])->whereNull('status')->get();
            $total = Bond::where('contract_id', $bond["contract_id"])->whereNull('status')->sum('amount');
            $count = Bond::where('contract_id', $bond["contract_id"])->whereNull('status')->count();
            $data['action_done'] = 'مبلغ مغير';
            foreach ($bonds as $currentBond) {
                if ($currentBond['id'] != $bond['id']) {
                    $currentBond->amount = ($total - $request->get('amount')) / ($count - 1);
                    $currentBond->save();
                }
            }
        }
        if ($request->has('payement_date')) {
            $data['payement_date'] = $request->get('payement_date');
        }
        if ($request->has('postable')) {
            $data['postable'] = $request->get('postable');
            $data['status'] = '';
        }
        if ($request->has('title')) {
            $data['title'] = $request->get('title');
        }
        $bond->update($data);
    }

    public function delay(Request $request, Bond $bond)
    {
        $bonds = Bond::where('contract_id', $bond["contract_id"])->get();
        $found = false;
        // $amount = $request->get('amount_paid')

        foreach ($bonds as $currentBond) {
            if ($found) {
                $bondDate = Carbon::createFromFormat('Y-m-d', $currentBond->payement_date);
                $currentBond->payement_date = $bondDate->addMonth();
                // if ($amount > 0) {
                //     $currentBond->amount = $currentBond->amount + $amount;
                //     $amount = 0;
                // }
                $currentBond->save(); // Save the updated bond
                Activity()->performedOn($currentBond)->log(Auth::user()->name . " قام بتأخير الدفعة على العقد " . $currentBond->contract->code);
            }

            // Check if the current bond matches the provided bond
            if ($currentBond->id === $bond->id) {
                $bondDate = Carbon::createFromFormat('Y-m-d', $currentBond->payement_date);
                $currentBond->action_done = 'دفعة مؤجلة';
                $currentBond->payement_date = $bondDate->copy()->addMonth()->firstOfMonth();
                $currentBond->save(); // Save the updated bond
                $found = true;
            }
        }
    }
    public function part(Request $request, Bond $bond)
    {
        $bonds = Bond::where('contract_id', $bond["contract_id"])->get();
        $found = false;
        $amount = $request->get('amount_paid');

        foreach ($bonds as $currentBond) {
            if ($found !== false) {
                $currentBond->amount = $currentBond->amount + $found - $amount;
                $currentBond->save(); // Save the updated bond
                $found = false;
            }

            // Check if the current bond matches the provided bond
            if ($currentBond->id === $bond->id) {
                $found = $currentBond->amount;
                $currentBond->amount = $amount;
                $currentBond->status = "paid";
                $currentBond->action_done = 'دفع جزئي';
                $currentBond->save(); // Save the updated bond
                Activity()->performedOn($currentBond)->log(Auth::user()->name . " قام بإتبات دفع جزئي على العقد " . $currentBond->contract->code);
            }
        }
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Bond $bond)
    {
        //
    }
}
