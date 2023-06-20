<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Apprenant extends Model
{
    use HasFactory;

    protected $table = "apprenant";


    public function brief(): BelongsToMany
    {
        return $this->belongsToMany(brief::class, 'apprenant_brief', 'brief_id', 'apprenant_id');

    }

    public function tasks()
    {
        return $this->belongsToMany(Task::class, 'apprenants_tasks', 'apprenant_id', 'task_id')->withPivot('etat_Task');

    }

}
