<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Foto extends Model
{
    public function salon(){
        return $this->hasOne(Salon::class);
    }
}
