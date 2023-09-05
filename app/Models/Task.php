<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Mpociot\Teamwork\Traits\UsedByTeams;

class Task extends Model
{
    use HasFactory, UsedByTeams;

    protected $fillable = [
        'title',
        'description',
        'job_desc_id',
        'task_source',
    ];

    public function jobDesc()
    {
        return $this->belongsTo(JobDesc::class, 'job_desc_id', 'id');
    }
}
