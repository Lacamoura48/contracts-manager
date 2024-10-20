<?php

namespace App\Http\Controllers;

use App\Models\Bond;
use Carbon\Carbon;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\File;

class BondController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        //
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
            }

            // Check if the current bond matches the provided bond
            if ($currentBond->id === $bond->id) {
                $bondDate = Carbon::createFromFormat('Y-m-d', $currentBond->payement_date);
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
                $currentBond->save(); // Save the updated bond
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
