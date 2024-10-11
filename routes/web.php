<?php

use App\Http\Controllers\ClientController;
use App\Http\Controllers\ProfileController;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

Route::get('/', function () {
    return Inertia::location('/dashboard');
});

Route::get('/dashboard', function () {
    return Inertia::render('Dashboard');
})->middleware(['auth', 'verified'])->name('dashboard');

Route::get('/clients', [ClientController::class, 'index'])->middleware(['auth', 'verified'])->name('clients');
Route::get('/clients/{client}/show', [ClientController::class, 'show'])->middleware(['auth', 'verified'])->name('clients.show');
Route::get('/clients/create', [ClientController::class, 'create'])->middleware(['auth', 'verified'])->name('clients.create');
Route::post('/clients/create', [ClientController::class, 'store'])->middleware(['auth', 'verified'])->name('clients.store');
Route::get('/clients/{client}/edit', [ClientController::class, 'edit'])->middleware(['auth', 'verified'])->name('clients.edit');
Route::patch('/clients/{client}/edit', [ClientController::class, 'update'])->middleware(['auth', 'verified'])->name('clients.update');
Route::delete('/clients/{client}', [ClientController::class, 'destroy'])->middleware(['auth', 'verified'])->name('clients.destroy');
Route::get('/api/user', function ()  {
    return response()->json(["user"=> Auth::user()]);
});

Route::middleware('auth')->group(function () {
    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');
});

require __DIR__ . '/auth.php';
