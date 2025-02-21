<?php

use App\Http\Controllers\BondController;
use App\Http\Controllers\ClientController;
use App\Http\Controllers\ContractController;
use App\Http\Controllers\DashboardController;
use App\Http\Controllers\PrefrenceController;
use App\Http\Controllers\ProfileController;
use App\Http\Controllers\SharedfileController;
use App\Models\Sharedfile;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;


Route::get('/', function () {
    return Inertia::location('/dashboard');
});

Route::get('/dashboard', [DashboardController::class, 'index'])->middleware(['auth', 'verified'])->name('dashboard');

Route::resource('/clients', ClientController::class)->middleware(['auth', 'verified']);
Route::patch('/clients/{client}/trash', [ClientController::class, "trash"])->name('clients.trash');
Route::get('/autocomplete/clients', [ClientController::class, 'autocomplete'])->middleware(['auth', 'verified']);

Route::resource('contracts', ContractController::class)->middleware(['auth', 'verified']);
Route::get('/contracts/{contract}/files', [ContractController::class, "files"])->middleware(['auth', 'verified'])->name('contracts.files');
Route::get('/contracts/live/{uuid}', [ContractController::class, "live"])->name('contracts.live');
Route::post('/contracts/{contract}/send', [ContractController::class, "send"])->middleware(['auth', 'verified'])->name('contracts.send');
Route::patch('/contracts/{contract}/read', [ContractController::class, "read"])->name('contracts.read');
Route::patch('/contracts/{contract}/sign', [ContractController::class, "sign"])->name('contracts.sign');
Route::patch('/contracts/{contract}/signproof', [ContractController::class, "signProof"])->name('contracts.signProof');
Route::patch('/contracts/{contract}/signReset', [ContractController::class, "signReset"])->name('contracts.signReset');
Route::patch('/contracts/{contract}/trash', [ContractController::class, "trash"])->name('contracts.trash');

Route::post('/contracts/{contract}/files', [SharedfileController::class, "store"])->middleware(['auth', 'verified'])->name('files.store');
Route::delete('/sharedFiles/{sharedfile}', [SharedfileController::class, "destroy"])->middleware(['auth', 'verified'])->name('files.delete');



Route::resource('bonds', BondController::class)->middleware(['auth', 'verified']);
Route::patch('/bonds/{bond}/delay', [BondController::class, "delay"])->middleware(['auth', 'verified']);
Route::patch('/bonds/{bond}/part', [BondController::class, "part"])->middleware(['auth', 'verified']);

Route::middleware('auth')->group(function () {
    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::get('/users/{user}/edit', [ProfileController::class, 'editUser'])->name('users.edit');
    Route::patch('/users/{user}/edit', [ProfileController::class, 'updateUser'])->name('users.update');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::patch('/profile/sign', [ProfileController::class, 'signature'])->name('profile.signature');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');
    Route::delete('/users/{user}', [ProfileController::class, 'destroyUser'])->name('users.destroy');
    Route::get('/users', [ProfileController::class, 'index'])->name('profile.index');
    Route::get('/users/create', [ProfileController::class, 'create'])->name('profile.create');
    Route::post('/profile', [ProfileController::class, 'store'])->name('profile.store');
    Route::get('/prefrences/terms', [PrefrenceController::class, 'edit'])->name('terms.edit');
    Route::post('/prefrences/terms', [PrefrenceController::class, 'update'])->name('terms.update');
    Route::get('/activities', [ProfileController::class, 'activities'])->name('settings.activities');
});




require __DIR__ . '/auth.php';
