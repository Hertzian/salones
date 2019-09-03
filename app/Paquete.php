<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Paquete extends Model
{
    protected $table = 'paquetes';
    protected $fillable = [
        'name', 
        // 'date', 
        'price','description','duration'
    ];

    public function salon(){
        return $this->belongsTo(Salon::class, 'id_salon');
    }

    // public function event(){
    //     return $this->hasMany(Event::class);
    // }

    public function event(){
        return $this->hasMany(Event::class);
    }
}