<?php

namespace App\Http\Controllers;

use App\Event;
use App\Salon;
use App\Paquete;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Auth;
use MaddHatter\LaravelFullcalendar\Facades\Calendar;

class EventsController extends Controller
{
    public function getDateView($id){
        $paquete = Paquete::find($id);
        $ocupieds = Event::where('id_paquete', $id)->get();
        // pendiente
        // $ocupieds = Salonfind($paquete->id));

        // $event = Event::all();

        if ($ocupieds->count()) {            
            foreach ($ocupieds as $key => $oc) {           
                $oc = 
                [
                    $salon = Salon::find(Paquete::findOrFail($oc->id_paquete)->id_salon),

                ];
            }
        }else{
            $oc = null;
        }


        return view('frontEnd.getDate', [
            'paquete' => $paquete,
            'ocupieds' => $ocupieds,
            'oc' => $oc
        ]);
    }

    public function getDate(Request $request, $id){
        $user = Auth::user();
        $paquete = Paquete::find($id);
        $event = new Event();

        $this->validate($request, [
            'date' => 'required|string|max:255',
            'time' => 'required|string|max:255',
        ]);

        $event->id_paquete = $id;
        $event->id_user = $user->id;
        // $event->id_salon = $request->input('id_salon');
        $event->time = $request->input('time');
        if ($event->date == $request->input('date')) {
            $event->date = $error;
        }else{
            $event->date = $request->input('date');
            
        }
        

        $event->save();

        return view('frontEnd.dashboard', [
            'message' => 'La fecha se ha agregado correctamente'
        ]);
    }

    public function getCalendarView(){
        $data = [];
        $user = Auth::user();
        // $paquete = Paquete::where('id_user', $user->id);
        // $events = Event::where('id_user', $user->id)->get();
        $events = Event::where('id_user', $user->id)->get();

        if ($events->count()) {
            foreach ($events as $key => $event) {
                $data[] = Calendar::event(
                    // Salon::findOrFail($event->id_paquete)->name,
                    Salon::find(Paquete::findOrFail($event->id_paquete)->id_salon)->name,

                    //all day
                    true,
                    
                    //start
                    $event->date,
                    
                    //end
                    $event->date,
                    
                    //id event                    
                    $event->id,

                    //options,
                    [
                        'color' => Salon::find(Paquete::findOrFail($event->id_paquete)->id_salon)->color,
                        // 'url' => '/user/dashboard/'
                    ]

                );
            }
        }

        $calendar = Calendar::addEvents($data);

        return view('frontEnd.getCalendar', [
            'user' => $user,
            'events' => $events,
            'calendar' => $calendar
        ]);

    }

    
}
