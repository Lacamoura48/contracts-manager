<?php

namespace App\Http\Controllers;

use App\Models\Client;
use Illuminate\Http\Request;
use Inertia\Inertia;

class ClientController extends Controller
{
    public function index()
    {
        return Inertia::render('Users/Index', [
          'clients' => Client::all(),
        ]);
    }

    public function store(Request $request)
    {
        $validated = $request->validate([
            'first_name' => 'required',
            'last_name' => 'required',
            "phone" => 'required',
            "id_code" => 'required',
            "id_photo_front" => 'required',
            "id_photo_back" => 'required',
            "address" => 'required',
            "wife_name" => 'required',
            "wife_phone" => 'required',
        ]);

        Client::create($validated);
        return to_route('users.index');
    }
}
