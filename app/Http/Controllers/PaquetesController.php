<?php

namespace App\Http\Controllers;

use App\Salon;
use App\Paquete;
use Illuminate\Http\Request;

class PaquetesController extends Controller
{
    public function getPaquete($id){
        $paquete = Paquete::find($id);
        // $salon = Paquete::where('id_salon', $paquete->id_salon);

        return view('frontEnd.getPaquete', [
            // 'salon' => $salon,
            'paquete' => $paquete
        ]);
    }
}
