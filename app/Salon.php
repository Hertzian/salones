<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Salon extends Model
{
    protected $table = 'salones';
    protected $fillable = [
        'name', 'description',
        // 'duration',
        // 'images'
    ];

    public function paquete(){
        return $this->hasMany(Paquete::class);
    }

    public function eventos(){
        return $this->hasMany(Event::class);
    }
}
