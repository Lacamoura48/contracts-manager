<?php

namespace App\Http\Controllers;

use App\Models\Client;
use Illuminate\Http\Request;
use Inertia\Inertia;

class ClientController extends Controller
{
    public function saveImage($image)
    {
        $filename = uniqid('ic_') . '.' . $image->getClientOriginalExtension();
        $image->move(public_path('images/ic'), $filename);
        return '/images/ic/' . $filename;
    }
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
    public function show(Client $client)
    {
        return Inertia::render('clients/ClientPage', [
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

        $front_path = $this->saveImage($request->file('id_photo_front'));
        $back_path = $this->saveImage($request->file('id_photo_back'));

        $validated['id_photo_front'] = $front_path;
        $validated['id_photo_back'] = $back_path;
        $client_created = Client::create($validated);
        return redirect("/clients/" . $client_created['id'] . "/show");
    }
    public function edit(Client $client){
        return Inertia::render('clients/ClientsForm', [
            'client' => $client,
        ]);
    }
    public function update(Request $request, Client $client){
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
        $client->update($validated);
    }


    public function destroy(Request $request, Client $client)
    {
        $client->delete();
    }
}
