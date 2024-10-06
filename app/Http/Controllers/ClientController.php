<?php

namespace App\Http\Controllers;

use App\Models\Client;
use Illuminate\Http\Request;
use Inertia\Inertia;

class ClientController extends Controller
{
    public function index(Request $request)
    {
        $search = $request->get("search");

        $clientsQuery = Client::query();
        if ($search) {
            $clientsQuery->where(function ($queryBuilder) use ($search) {
                $queryBuilder->where('first_name', 'like', "%$search%")
                    ->orWhere('last_name', 'like', "%$search%")
                    ->orWhere('id_code', 'like', "%$search%")
                    ->orWhere('wife_name', 'like', "%$search%");
            });
        }
        $clients = $clientsQuery->select(["first_name", "last_name", "id_code", "created_at", "phone", "id"])->paginate(12);
        return Inertia::render('Clients', [
            'clients' => $clients,
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

    public function destroy(Request $request, Client $client)
    {
        $client->delete();
    }
}
