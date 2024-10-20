<?php

namespace App\Http\Controllers;

use App\Models\Contract;
use App\Models\Sharedfile;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\File;
use Inertia\Inertia;

class SharedfileController extends Controller
{
    public function saveImage($image)
    {
        $filename = uniqid('sh_') . '.' . $image->getClientOriginalExtension();
        $image->move(public_path('images/sh'), $filename);
        return '/images/sh/' . $filename;
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request, Contract $contract)
    {
        $path = null;
        if ($request->hasFile('image')) {
            $path = $this->saveImage($request->file('image'));
        }
        Sharedfile::create([
            'image' => $path,
            'title' => $request->get('title'),
            'contract_id' => $contract->id
        ]);
       return to_route('contracts.files', $contract->id);
    }

    /**
     * Display the specified resource.
     */
    public function show(Sharedfile $sharedfile)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Sharedfile $sharedfile)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, Sharedfile $sharedfile)
    {
        //
    }
    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Sharedfile $sharedfile)
    {
        if (File::exists(substr($sharedfile->image, 1))) {
            File::delete(substr($sharedfile->image, 1));
        }
        $sharedfile->delete();
    }
}
