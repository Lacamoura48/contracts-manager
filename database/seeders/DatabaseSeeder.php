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
            'role' => 'admin',
            'code' => '783512',
            'company' => 'شركة فن المجالس لصناعة الأثاث ذ.م.م',
            'address' => 'مقرها بالشارقة',
            'phone' => '0522565677',
            'password' => Hash::make('asalatmeknes'),
        ]);
    }
}
