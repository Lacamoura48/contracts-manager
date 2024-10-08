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
                $queryBuilder->where('full_name', 'like', "%$search%")
                    ->orWhere('id_code', 'like', "%$search%")
                    ->orWhere('wife_name', 'like', "%$search%");
            });
        }
        $clients = $clientsQuery->select(["full_name", "id_code", "created_at", "phone", "id"])->paginate(12);
        return Inertia::render('clients/Clients', [
            'clients' => $clients,
        ]);
    }
    public function show(Client $client){
        return Inertia::render('clients/Clients', [
            'client' => $client,
        ]);
    }
    public function create()
    {
        return Inertia::render('clients/ClientsForm');
    }
    public function store(Request $request)
    {
        $validated = $request->validate([
            'full_name' => 'required',
            "phone" => 'required',
            "id_code" => 'required',
            "id_photo_front" => 'required',
            "id_photo_back" => 'required',
            "address" => 'required',
            "wife_name" => 'required',
            "wife_phone" => 'required',
        ]);
        $client_created = Client::create($validated);
        return redirect("/clients?search=" . $client_created['full_name']);
    }


    public function destroy(Request $request, Client $client)
    {
        $client->delete();
    }
}
