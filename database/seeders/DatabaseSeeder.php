<?php

namespace Database\Seeders;

use App\Models\User;
// use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\Hash;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     */
    public function run(): void
    {
        // User::factory(10)->create();

        User::factory()->create([
            'name' => 'Test User',
            'email' => 'anas@mail.com',
            'password' => Hash::make('anasanas'),
        ]);
        User::factory()->create([
            'name' => 'asalat meknes',
            'email' => 'asalat.meknes@gmail.com',
            'password' => Hash::make('asalatmeknes'),
        ]);
    }
}
