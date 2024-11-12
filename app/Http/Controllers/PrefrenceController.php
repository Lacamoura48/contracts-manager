<?php

namespace App\Http\Controllers;

use App\Models\Prefrence;
use Illuminate\Http\Request;
use Inertia\Inertia;

class PrefrenceController extends Controller
{
    public function edit()
    {
        $terms = Prefrence::all('terms');
        return Inertia::render('settings/Terms', [
            'terms' => $terms,
        ]);
    }
}
