<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Mpociot\Teamwork\TeamworkTeam;

class Team extends TeamworkTeam
{
    use HasFactory;

    protected $hidden = ['pivot'];

    public function userTask()
    {
        return $this->hasManyThrough(Task::class, User::class, 'id', 'user_id');
    }
}
