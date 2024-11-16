<?php

namespace App\Http\Controllers;

use App\Models\Prefrence;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use Inertia\Inertia;

class PrefrenceController extends Controller
{
    public function edit()
    {
        $terms = Prefrence::all('terms', 'id');
        return Inertia::render('settings/Terms', [
            'terms' => $terms,
        ]);
    }
    public function update(Request $request)
    {
        $validated = $request->validate([
            'terms' => 'array',
        ]);
        DB::table('prefrences')->delete();
        foreach ($validated['terms'] as $term) {
            Prefrence::create([
                'terms' => $term['terms']
            ]);
        }
    }
}
