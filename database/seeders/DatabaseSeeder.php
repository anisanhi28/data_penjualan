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

        User::create([
        'name' => 'Admin',
        'email' => 'admin@example.com',
        'role' => 'admin',
        'id_karyawan' => '0123456789',
        'password' => Hash::make('password'), // Gunakan hash, jangan plaintext
    ]);
    }
}
