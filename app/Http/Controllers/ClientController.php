<?php

namespace App\Http\Controllers;

use App\Models\Client;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\File;
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
        $trashView = $request->get("trash");
        $clientsQuery = Client::query();
        if ($search) {
            $clientsQuery->where(function ($queryBuilder) use ($search) {
                $queryBuilder->where('full_name', 'like', "%$search%")
                    ->orWhere('id_code', 'like', "%$search%")
                    ->orWhere('wife_name', 'like', "%$search%")
                    ->orWhere('phone', 'like', "%$search%")
                    ->orWhere('phone2', 'like', "%$search%")
                    ->orWhere('address', 'like', "%$search%");
            });
        }
        $clients = $clientsQuery->select(["full_name", "nickname", "id_code", "created_at", "email", "phone", "id"])
            ->where('trash', $trashView ? 1 : 0)
            ->orderBy('created_at', 'desc')
            ->paginate(12);
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
            'nickname' => 'nullable',
            "phone" => 'required',
            "email" => 'email|nullable',
            "phone2" => 'nullable',
            "id_code" => 'required|max:18|min:18|unique:clients,id_code',
            "id_photo_front" => 'required',
            "id_photo_back" => 'required',
            "wife_name" => 'nullable',
            "wife_phone" => 'nullable',
            "notes" => 'nullable',
            "state" => 'nullable',
            "building" => 'nullable',
            "appart" => 'nullable',
            "location" => 'nullable',
            "area" => 'nullable',
        ]);

        $front_path = $this->saveImage($request->file('id_photo_front'));
        $back_path = $this->saveImage($request->file('id_photo_back'));

        $validated['id_photo_front'] = $front_path;
        $validated['id_photo_back'] = $back_path;
        $validated['phone'] = $validated['phone'] . ' ' . '971+';
        $client_created = Client::create($validated);
        Activity()->performedOn($client_created)->withProperty('client_id', $client_created->id)->log(Auth::user()->name . " قام بإضافة الزبون " . $client_created->full_name);
        return redirect("/clients/" . $client_created['id']);
    }
    public function edit(Client $client)
    {
        return Inertia::render('clients/ClientsForm', [
            'client' => $client,
        ]);
    }
    public function update(Request $request, Client $client)
    {

        $validated = $request->validate([
            'full_name' => 'required',
            "phone" => 'required',
            "phone2" => 'nullable',
            "email" => 'email|nullable',
            "id_code" => 'required|max:18|min:18',
            "id_photo_front" => 'nullable',
            "id_photo_back" => 'nullable',
            "address" => 'nullable',
            "wife_name" => 'nullable',
            "wife_phone" => 'nullable',
            "notes" => 'nullable',
            "state" => 'nullable',
            "building" => 'nullable',
            "appart" => 'nullable',
            "location" => 'nullable',
            "area" => 'nullable',
        ]);
        if ($request->file('id_photo_front')) {
            $front_path = $this->saveImage($request->file('id_photo_front'));
            if (File::exists(substr($client->id_photo_front, 1))) {
                File::delete(substr($client->id_photo_front, 1));
            }
            $validated['id_photo_front'] = $front_path;
        } else {
            $validated['id_photo_front'] = $client['id_photo_front'];
        }

        if ($request->file('id_photo_back')) {
            $back_path = $this->saveImage($request->file('id_photo_back'));
            if (File::exists(substr($client->id_photo_back, 1))) {
                File::delete(substr($client->id_photo_back, 1));
            }
            $validated['id_photo_back'] = $back_path;
        } else {
            $validated['id_photo_back'] = $client['id_photo_back'];
        }
        $client->update($validated);
        Activity()->performedOn($client)->withProperty('client_id', $client->id)->log(Auth::user()->name . " قام بتعديل على الزبون " . $client->full_name);
        return redirect("/clients/" . $client['id']);
    }
    public function autocomplete(Request $request)
    {
        $search = $request->get('q');
        $client_id = $request->get('id');
        $clientsQuery = Client::query();
        if ($client_id) {
            $clientsQuery->where('id', $client_id);
        }
        if ($search) {
            $clientsQuery->where(function ($queryBuilder) use ($search) {
                $queryBuilder->where('full_name', 'like', "%$search%")
                    ->orWhere('id_code', 'like', "%$search%")
                    ->orWhere('wife_name', 'like', "%$search%")
                    ->orWhere('phone', 'like', "%$search%")
                    ->orWhere('phone2', 'like', "%$search%")
                    ->orWhere('address', 'like', "%$search%");
            });
        }
        $clients = $clientsQuery->select(["full_name", "id"])->paginate(6);
        return response()->json($clients);
    }


    public function trash(Request $request, Client $client)
    {
        if ($client->trash == 1) {
            $client->trash = 0;
        } else {
            $client->trash = 1;
        }
        $client->save();
    }

    public function destroy(Request $request, Client $client)
    {
        if (File::exists(substr($client->id_photo_front, 1))) {
            File::delete(substr($client->id_photo_front, 1));
        }
        if (File::exists(substr($client->id_photo_back, 1))) {
            File::delete(substr($client->id_photo_back, 1));
        }
        $client->delete();
    }
}
