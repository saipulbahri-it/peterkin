<?php

namespace Database\Seeders;

use App\Models\User;
use App\Models\Team;
use Illuminate\Database\Seeder;

class DataAwalSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $jsonData = json_decode(file_get_contents(storage_path('seeders/employee.json')));

        foreach ($jsonData->pegawai as $row) {
            $user = User::whereNumber($row->nip)->first() ?: new User();

            $user->number = trim($row->nip);
            $user->name = $row->nama;
            $user->username = str_replace(' ', '', trim($row->nip));
            $user->email = $user->username . '@acehprov.go.id';
            $user->position = $row->jabatan;
            $user->class = $row->gol ?? '-';
            $user->avatar = '/storage/avatar/' . $user->username . '.png';
            $user->password = '$2y$10$92IXUNpkjO0rOQ5byMi.Ye4oKoEa3Ro9llC/.og/at2.uheWG/igi'; // password

            $user->saveOrFail();

            $team = Team::whereName($row->bagian)->first() ?: new Team();
            $team->name = $row->bagian;
            $team->owner_id = 1;
            $team->saveOrFail();
        }
    }
}
