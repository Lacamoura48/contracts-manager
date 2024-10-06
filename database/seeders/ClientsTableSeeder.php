<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;
use Faker\Factory as Faker;

class ClientsTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $faker = Faker::create();

        for ($i = 0; $i < 35; $i++) {
            DB::table('clients')->insert([
                'first_name' => $faker->firstName,
                'last_name' => $faker->lastName,
                'phone' => $faker->phoneNumber,
                'id_code' => $faker->unique()->numerify('ID#######'),
                'id_photo_front' => $faker->imageUrl(640, 480, 'people', true, 'ID Front'),
                'id_photo_back' => $faker->imageUrl(640, 480, 'people', true, 'ID Back'),
                'address' => $faker->address,
                'wife_name' => $faker->firstNameFemale,
                'wife_phone' => $faker->phoneNumber,
            ]);
        }
    }
}
