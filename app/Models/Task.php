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
        'assigned_to',
        'assigned_by'
    ];

    public function jobDesc()
    {
        return $this->belongsTo(JobDesc::class, 'job_desc_id', 'id');
    }

    public function assignedBy()
    {
        return $this->belongsTo(User::class, 'assigned_by', 'id');
    }

    public function assignedTo()
    {
        return $this->belongsTo(User::class, 'assigned_to', 'id');
    }
}
