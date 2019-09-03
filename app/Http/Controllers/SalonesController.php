<?php

namespace App\Http\Controllers;

use App\Salon;
use App\Paquete;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;

class SalonesController extends Controller
{
    public function getLocation(){        
        $estados = Salon::select('state')
            ->distinct()
            ->get()
            ;

        return view('frontEnd.locSalones', [            
            'estados' => $estados,
        ]);
    }

    public function getSalones(){
        // $salones = Salon::all();
        $salones = Salon::paginate(10);

        return view('frontEnd.getSalones', [
            'salones' => $salones
        ]);
    }

    public function detailSalon($id){
        $salon = Salon::find($id);
        // $paquetes = Paquete::where('id_salon', $salon->id)->get();
        $paquetes = Paquete::where('id_salon', $salon->id)->paginate(10);

        return view('frontEnd.detailSalon', [
            'salon' => $salon,
            'paquetes' => $paquetes
        ]);
    }

    public function getState (Request $request){
        $state = $request->input('state');
        // $salones = Salon::where('state', $state)->get();
        $salones = Salon::where('state', $state)->paginate(10);

        return view('frontEnd.getState', [
            'salones' => $salones,
            'state' => $state
        ]);
    }
    
}
 