<?php

use App\Http\Controllers\BondController;
use App\Http\Controllers\ClientController;
use App\Http\Controllers\ContractController;
use App\Http\Controllers\ProfileController;
use App\Http\Controllers\SharedfileController;
use App\Models\Sharedfile;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

Route::get('/', function () {
    return Inertia::location('/dashboard');
});

Route::get('/dashboard', function () {
    return Inertia::render('Dashboard');
})->middleware(['auth', 'verified'])->name('dashboard');

Route::resource('/clients', ClientController::class)->middleware(['auth', 'verified']);
Route::get('/autocomplete/clients', [ClientController::class, 'autocomplete'])->middleware(['auth', 'verified']);

Route::resource('contracts', ContractController::class)->middleware(['auth', 'verified']);
Route::get('/contracts/{contract}/files', [ContractController::class, "files"])->middleware(['auth', 'verified'])->name('contracts.files');

Route::post('/contracts/{contract}/files', [SharedfileController::class, "store"])->middleware(['auth', 'verified'])->name('files.store');
Route::delete('/sharedFiles/{sharedfile}', [SharedfileController::class, "destroy"])->middleware(['auth', 'verified'])->name('files.delete');



Route::patch('/bonds/{bond}', [BondController::class, "update"])->middleware(['auth', 'verified'])->name('bonds.update');
Route::patch('/bonds/{bond}/delay', [BondController::class, "delay"])->middleware(['auth', 'verified']);
Route::patch('/bonds/{bond}/part', [BondController::class, "part"])->middleware(['auth', 'verified']);

Route::middleware('auth')->group(function () {
    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');
});

require __DIR__ . '/auth.php';
