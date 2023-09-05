<?php

namespace App\Models;

// use Illuminate\Contracts\Auth\MustVerifyEmail;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Foundation\Auth\User as Authenticatable;
use Illuminate\Notifications\Notifiable;
use Laravel\Sanctum\HasApiTokens;
use Mpociot\Teamwork\Traits\UserHasTeams;

class User extends Authenticatable
{
    use HasApiTokens, HasFactory, Notifiable;

    /**
     * This will enable the relation with Team and add the following methods :
     * teams(),
     * ownedTeams(),
     * currentTeam(),
     * invites(),
     * isTeamOwner(),
     * isOwnerOfTeam($team),
     * attachTeam($team, $pivotData = []),
     * detachTeam($team),
     * attachTeams($teams),
     * detachTeams($teams),
     * switchTeam($team)
     * within your User model.
     */
    use UserHasTeams;

    /**
     * The attributes that are mass assignable.
     *
     * @var array<int, string>
     */
    protected $fillable = [
        'name',
        'number',
        'email',
        'position_id',
        'password',
    ];

    /**
     * The attributes that should be hidden for serialization.
     *
     * @var array<int, string>
     */
    protected $hidden = [
        'password',
        'remember_token',
        'pivot',
    ];

    /**
     * The attributes that should be cast.
     *
     * @var array<string, string>
     */
    protected $casts = [
        'email_verified_at' => 'datetime',
    ];

    public function scopeExclude($query, $value = [])
    {
        return $query->select(array_diff($this->columns, (array) $value));
    }

    public function tasks()
    {
        return $this->hasMany(Task::class);
    }

    public function currentPosition()
    {
        return $this->hasOne(Position::class, 'id', 'position_id');
    }
}
