<?php

namespace App\Http\Controllers;

use App\Http\Requests\ProfileUpdateRequest;
use App\Models\User;
use Illuminate\Contracts\Auth\MustVerifyEmail;
use Illuminate\Http\RedirectResponse;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Redirect;
use Inertia\Inertia;
use Inertia\Response;
use Illuminate\Validation\Rules;
use Illuminate\Support\Facades\File;

class ProfileController extends Controller
{
    public function saveImage($image)
    {
        $filename = uniqid('logo_') . '.' . $image->getClientOriginalExtension();
        $image->move(public_path('images/logo'), $filename);
        return '/images/logo/' . $filename;
    }

    public function index()
    {
        $users = User::all('name', 'id');
        return Inertia::render('settings/users/Users', [
            'users' => $users
        ]);
    }


    public function edit(Request $request): Response
    {
        return Inertia::render('Profile/Edit', [
            'mustVerifyEmail' => $request->user() instanceof MustVerifyEmail,
            'status' => session('status'),
        ]);
    }
    public function editUser(Request $request, User $user)
    {
        return Inertia::render('settings/users/UsersForm', [
            'user' => $user
        ]);
    }

    public function create()
    {
        return Inertia::render('settings/users/UsersForm');
    }
    public function store(Request $request)
    {
        $validated = $request->validate([
            'name' => 'required',
            "email" => 'required|email',
            'company' => 'nullable',
            'code' => 'nullable',
            'phone' => 'nullable',
            'address' => 'nullable',
            'whatsapp_msg' => 'nullable',
            'password' => ['required', 'confirmed', Rules\Password::defaults()],
        ]);
        User::create($validated);
        return to_route('profile.index');
    }
    public function updateUser(Request $request, User $user)
    {
        $validated = $request->validate([
            'name' => 'required',
            "email" => 'required|email',
            'company' => 'nullable',
            'code' => 'nullable',
            'phone' => 'nullable',
            'address' => 'nullable',
            'whatsapp_msg' => 'nullable',
            'logo' => 'nullable',
            'password' => ['required', 'confirmed', Rules\Password::defaults()],
        ]);
        $user->update($validated);
        return to_route('profile.index');
    }
    public function update(ProfileUpdateRequest $request): RedirectResponse
    {
        $request->user()->fill($request->validate([
            'name' => 'required',
            'email' => 'required|email',
            'code' => 'nullable',
            'company' => 'nullable',
            'phone' => 'nullable',
            'address' => 'nullable',
            'whatsapp_msg' => 'nullable',
        ]));

        if ($request->user()->isDirty('email')) {
            $request->user()->email_verified_at = null;
        }
        if ($request->file('logo')) {
            $front_path = $this->saveImage($request->file('logo'));
            if (File::exists(substr($request->user()->logo, 1))) {
                File::delete(substr($request->user()->logo, 1));
            }
            $request->user()->logo = $front_path;
        }
        $request->user()->save();

        return Redirect::route('profile.edit');
    }

    public function signature(Request $request)
    {
        $validated = $request->validate([
            'signature' => 'required',
        ]);
        $request->user()->signature = $validated['signature'];
        $request->user()->save();
    }

    public function destroy(Request $request): RedirectResponse
    {
        $request->validate([
            'password' => ['required', 'current_password'],
        ]);

        $user = $request->user();

        Auth::logout();

        $user->delete();

        $request->session()->invalidate();
        $request->session()->regenerateToken();

        return Redirect::to('/');
    }
    public function destroyUser(Request $request, User $user): RedirectResponse
    {
        $user->delete();
        return to_route('profile.index');
    }
}
