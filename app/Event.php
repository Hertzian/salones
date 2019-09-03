<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Event extends Model
{
    protected $table = 'events';
    protected $fillable = [
        'date', 'time'
    ];

    public function user(){
        return $this->hasOne(User::class);
    }

    public function paquete(){
        return $this->hasOne(Paquete::class);
    }
    
    // public function salon(){
    //     return $this->hasOne(Salon::class);
    // }
}
