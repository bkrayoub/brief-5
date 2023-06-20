<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class brief extends Model
{
    use HasFactory;

    protected $table = 'brief';
    protected $fillable = [
        'name_brief', 'start_brief', 'end_brief'
    ];

    public function task(){
         return $this->hasMany(Task::class);
    }

    public function apprenant()
    {
        return $this->belongsToMany(Apprenant::class, 'apprenant_brief', 'brief_id', 'apprenant_id');

    }
}
