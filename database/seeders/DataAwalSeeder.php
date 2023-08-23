<?php

namespace Database\Seeders;

use App\Models\Position;
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

            $position = Position::whereName($row->jabatan)->exists() ? Position::whereName($row->jabatan)->first() : new Position();
            $position->name = $row->jabatan;
            $position->summary_tasks = 'Mengelola....';
            $position->save();

            $nteam = Team::whereName($row->bagian)->exists() ? Team::whereName($row->bagian)->first() : new Team();
            $nteam->name = $row->bagian;

            if (Team::count() == 1) {
                $nteam->parent_id = 1;
            } else if (Team::count() > 1) {
                $nteam->parent_id = 2;
            }

            $nteam->save();

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

            // $user->createOwnedTeam(['name' => $row->bagian]);

            $team = Team::whereName($row->bagian)->first();

            if (($team->name === $row->bagian) && !$team->owner_id) {
                $team->owner_id = $user->id;
                $team->save();
            }
            // else {
            //     // if ($team->owner_id != $user->id)
            //         // $user->teams()->attach($team->id);
            //         $user->attachTeam($team, []);
            // }
            $user->attachTeam($team, []);
        }
    }
}
