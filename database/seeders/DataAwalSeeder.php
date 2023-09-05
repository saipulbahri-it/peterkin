<?php

namespace Database\Seeders;

use App\Models\Position;
use App\Models\Team;
use App\Models\User;
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
        $jsonPosition = json_decode(file_get_contents(storage_path('seeders/position.json')));
        $jsonData = json_decode(file_get_contents(storage_path('seeders/employee.json')));

        foreach ($jsonPosition->data as $row) {
            $position = Position::find($row->id) ?: new Position();
            $position->id = $row->id;
            $position->name = $row->name;
            $position->summary_tasks = $row->summary_tasks;
            $position->save();

            foreach (collect($row->job_descs)->whereNotNull('title') as $jobdesc) {
                $job = $position->jobDescs();
                $job->updateOrCreate(['id' => $jobdesc->id, 'title' => $jobdesc->title], collect($jobdesc)->toArray());
            }
        }

        foreach ($jsonData->pegawai as $row) {
            $user = User::whereNumber($row->nip)->first() ?: new User();
            $user->number = trim($row->nip);
            $user->name = $row->nama;
            $user->username = str_replace(' ', '', trim($row->nip));
            $user->email = $user->username.'@acehprov.go.id';
            $user->position = $row->jabatan;
            $user->class = $row->gol ?? '-';
            $user->avatar = '/storage/avatar/'.$user->username.'.png';
            $user->password = '$2y$10$92IXUNpkjO0rOQ5byMi.Ye4oKoEa3Ro9llC/.og/at2.uheWG/igi'; // password
            $user->saveOrFail();

            if ($user->name === 'Zalsufran, ST, M.Si') {
                $user->createOwnedTeam(['name' => $row->bagian]);
            } elseif ($user->name === 'drh. T. Munazar') {
                $user->createOwnedTeam(['name' => $row->bagian]);
                $user->teams()->attach(1);
                $user->switchTeam(1);
            } elseif ($user->name === 'Febi Laurina, S.Pt') {
                $user->createOwnedTeam(['name' => $row->bagian]);
                $user->teams()->attach(2);
                $user->switchTeam(2);
            } elseif ($user->name === 'M. Zein, SE') {
                $user->createOwnedTeam(['name' => $row->bagian]);
                $user->teams()->attach(2);
                $user->switchTeam(2);
            } elseif ($user->name === 'Almuttaqin, SE, M.Si') {
                $user->createOwnedTeam(['name' => $row->bagian]);
                $user->teams()->attach(2);
                $user->switchTeam(2);
            } else {
                $team = Team::whereName($row->bagian)->first();
                $user->attachTeam($team);
                $user->switchTeam($team->id);
            }
        }
    }
}
