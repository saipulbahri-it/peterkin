<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Position extends Model
{
    use HasFactory;

    protected $fillable = [
        'name',
        'summary_tasks',
        'description',
    ];

    public function jobDescs()
    {
        return $this->hasMany(JobDesc::class);
    }
}
