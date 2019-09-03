<?php

namespace App\Http\Controllers;

use App\User;
use App\Event;
use App\Salon;
use App\Paquete;
// use Twilio\Http\Client;
use Twilio\Rest\Client;
use Twilio\Jwt\ClientToken;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Hash;
use MaddHatter\LaravelFullcalendar\Facades\Calendar;

class AdminController extends Controller
{
    protected $accountSid;
    protected $authToken;
       
    /**
     * Create a new controller instance.
     *
     * @return void
     */
    public function __construct()
    {
        // $this->accountSid = env('TWILIO_ACCOUNT_SID');
        // $this->authToken = env('TWILIO_AUTH_TOKEN');
        $this->accountSid = config('app.twilio')['TWILIO_ACCOUNT_SID'];
        $this->authToken = config('app.twilio')['TWILIO_AUTH_TOKEN'];
        $this->middleware('auth:admin');
    }
    /**
     * Show the application dashboard.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        return view('backEnd.admin');
    }

    // Users
    public function getUsersView(){
        // $users = User::all();
        $users = User::paginate(15);
        
        return view('backEnd.users.getUsers', [
            'users' => $users
        ]);
    }

    public function newUserView(){
        return view('backEnd.users.newUser');
    }

    public function newUser(Request $request){
        $user = new User();

        $this->validate($request, [
            'name' => 'required|string|max:255',
            'apellidoP' => 'required|string|max:255',
            'apellidoM' => 'required|string|max:255',
            'domicilio' => 'required|string|max:255',
            'colonia' => 'required|string|max:255',
            'municipio' => 'required|string|max:255',
            'codigoP' => 'required|string|min:5|max:5',
            'telefono' => 'required|string|max:10',
            'email' => 'required|string|max:255',

            // 'imgId' => 'required|string|max:255',
            // 'imgOfId' => 'required|string|max:255',
            // 'curp' => 'required|string|max:255',
            // 'compD' => 'required|string|max:255',
        ]);

        $user->name = $request->input('name');
        $user->apellidoP = $request->input('apellidoP');
        $user->apellidoM = $request->input('apellidoM');
        $user->domicilio = $request->input('domicilio');
        $user->colonia = $request->input('colonia');
        $user->municipio = $request->input('municipio');
        $user->codigoP = $request->input('codigoP');
        $user->telefono = $request->input('telefono');
        $user->email = $request->input('email');
        $user->password = Hash::make($request->input('password'));

        $user->save();
        
        return redirect('/admin/dashboard')
            ->with('message', 'El usuario se ha creado correctamente');
        // return view('backEnd.admin', [
        // ]);
    }

    public function updateUserView($id){
        $user = User::find($id);

        return view('backEnd.users.updateUser', [
            'user' => $user
        ]);
    }     

    public function updateUser(Request $request, $id){
        $user = User::find($id);

        $this->validate($request, [
            'name' => 'required|string|max:255',
            'apellidoP' => 'required|string|max:255',
            'apellidoM' => 'required|string|max:255',
            'domicilio' => 'required|string|max:255',
            'colonia' => 'required|string|max:255',
            'municipio' => 'required|string|max:255',
            'codigoP' => 'required|string|min:5|max:5',
            'telefono' => 'required|string|max:10',
            'email' => 'required|string|max:255',

            // 'imgId' => 'required|string|max:255',
            // 'imgOfId' => 'required|string|max:255',
            // 'curp' => 'required|string|max:255',
            // 'compD' => 'required|string|max:255',
        ]);

        $user->name = $request->input('name');
        $user->apellidoP = $request->input('apellidoP');
        $user->apellidoM = $request->input('apellidoM');
        $user->domicilio = $request->input('domicilio');
        $user->colonia = $request->input('colonia');
        $user->municipio = $request->input('municipio');
        $user->codigoP = $request->input('codigoP');
        $user->telefono = $request->input('telefono');
        $user->email = $request->input('email');
        $user->password = Hash::make($request->input('password'));

        $user->update();

        return redirect('/admin/dashboard')
            ->with('message', 'El usuario se ha actualizado correctamente');
            
        
    }

    // Salones
    public function getSalones(){        
        // $salones = Salon::all();
        $salones = Salon::paginate(10);

        return view('backEnd.salones.getSalones', [
            'salones' => $salones
        ]);    
    }

    public function detailSalon($id){
        $salon = Salon::find($id);
        // $paquetes = Paquete::where('id_salon', $salon->id)->get();
        $paquetes = Paquete::where('id_salon', $salon->id)->paginate(10)->get();

        return view('frontEnd.salones.detailSalon', [
            'salon' => $salon,
            'paquetes' => $paquetes
        ]);
    }

    public function newSalonView(){
        return view('backEnd.salones.newSalon');
    }

    public function newSalon(Request $request){
        $salon = new Salon();

        $this->validate($request, [
            'name' => 'required|string|max:255',
            'descriptionC' => 'required|string|max:255',
            'description' => 'required|string',
            'color' => 'required|string',
            'state' => 'required',
            'lng' => 'required',
            'lat' => 'required',
        ]);
        
        $salon->name = $request->input('name');
        $salon->descriptionC = $request->input('descriptionC');
        $salon->description = $request->input('description');
        $salon->color = $request->input('color');
        $salon->state = $request->input('state');
        $salon->lng = $request->input('lng');
        $salon->lat = $request->input('lat');

        $salon->save();

        return redirect('/admin/dashboard')
            ->with('message', 'El salon se ha creado correctamente');
    }

    public function updateSalonView($id){
        $salon = Salon::find($id);
        // $paquetes = Paquete::where('id_salon', $id)->get();
        $paquetes = Paquete::where('id_salon', $salon->id)->paginate(10);

        return view('backEnd.salones.updateSalon', [
            'salon' => $salon,
            'paquetes' => $paquetes
        ]);
    }

    public function updateSalon(Request $request, $id){
        $salon = Salon::find($id);

        $this->validate($request, [
            'name' => 'required|string|max:255',
            'descriptionC' => 'required|string|max:255',
            'description' => 'required|string',
            'color' => 'required|string',
            'state' => 'required',
            'lng' => 'required',
            'lat' => 'required',
        ]);
        
        $salon->name = $request->input('name');
        $salon->descriptionC = $request->input('descriptionC');
        $salon->description = $request->input('description');
        $salon->color = $request->input('color');
        $salon->state = $request->input('state');
        $salon->lng = $request->input('lng');
        $salon->lat = $request->input('lat');

        $salon->update();

        return redirect('/admin/dashboard')
            ->with('message', 'El salon se ha editado correctamente');
    }

    public function deleteSalon($id){
        $salon = Salon::find($id);
        $salon->delete();
        
        return redirect('/admin/dashboard')
            ->with('message', 'El salon se ha eliminado correctamente');
    }

    // Paquetes
    public function getPaquetes(){
        // $paquetes = Paquete::all();
        $paquetes = Paquete::paginate(10);

        return view('backEnd.paquetes.getPaquetes', [
            'paquetes' => $paquetes
        ]);
    }

    public function updatePaqueteView($id){
        $paquete = Paquete::find($id);
        // $salones = Salon::all();
        $salones = Salon::paginate(10);

        return view('backEnd.paquetes.updatePaquete', [
            'paquete' => $paquete,
            'salones' => $salones
        ]);
    }

    public function updatePaquete(Request $request, $id){
        $paquete = Paquete::find($id);

        $this->validate($request, [
            'name' => 'required|string|max:255',
            'price' => 'required|string|max:255',
            'descriptionC' => 'required|string|max:255',
            'description' => 'required|string',
            'id_salon' => 'required',

        ]);
        
        $paquete->id_salon = $request->input('id_salon');
        $paquete->name = $request->input('name');
        $paquete->price = $request->input('price');
        $paquete->descriptionC = $request->input('descriptionC');
        $paquete->description = $request->input('description');

        $paquete->update();

        return redirect('/admin/dashboard')
            ->with('message', 'El paquete se ha actualizado correctamente');
    }

    public function newPaqueteView(){
        // $salones = Salon::all();
        $salones = Salon::paginate(10);

        return view('backEnd.paquetes.newPaquete', [
            'salones' => $salones
        ]);
    }

    public function newPaquete(Request $request){
        $paquete = new Paquete();

        $this->validate($request, [
            'name' => 'required|string|max:255',
            'price' => 'required|string|max:255',
            'descriptionC' => 'required|string|max:255',
            'description' => 'required|string',
            'id_salon' => 'required'

        ]);

        $paquete->id_salon = $request->input('id_salon');

        $paquete->name = $request->input('name');
        $paquete->price = $request->input('price');
        $paquete->descriptionC = $request->input('descriptionC');
        $paquete->description = $request->input('description');

        $paquete->save();

        return redirect('/admin/dashboard')
            ->with('message', 'El paquete se ha actualizado correctamente');
    }

    public function newPaqueteSView($id){        
        $salon = Salon::find($id);

        return view('backEnd.paquetes.newPaqueteS', [
            'salon' => $salon
        ]);
    }

    public function newPaqueteS(Request $request, $id){
        $paquete = new Paquete();

        $this->validate($request, [
            'name' => 'required|string|max:255',
            'price' => 'required|string|max:255',
            'descriptionC' => 'required|string|max:255',
            'description' => 'required|string',
        ]);

        $paquete->id_salon = $id;

        $paquete->name = $request->input('name');
        $paquete->price = $request->input('price');
        $paquete->descriptionC = $request->input('descriptionC');
        $paquete->description = $request->input('description');

        $paquete->save();

        return redirect('/admin/dashboard')
            ->with('message', 'El paquete se ha actualizado correctamente');
    }

    public function deletePaquete($id){
        $paquete = Paquete::find($id);
        $paquete->delete();
        
        return redirect('/admin/dashboard')
            ->with('message', 'El salon se ha eliminado correctamente');
    }

    public function getCalendar(){
        $data = [];
        $events = Event::all();  

        if($events->count()){
            foreach ($events as $key => $event) {
                $data[] = Calendar::event(
                    Salon::find(Paquete::findOrFail($event->id_paquete)->id_salon)->name,

                    //all day
                    true,
                    
                    // new \DateTime($value->start_date),
                    //start
                    $event->date,
                    
                    // new \DateTime($value->end_date.' +1 day'),
                    //end
                    $event->date,

                    // id event
                    $event->id,

                    // options
                    [
                        'color' => Salon::find(Paquete::findOrFail($event->id_paquete)->id_salon)->color,
                        'url' => '/admin/updateevent/' . $event->id,
                    ]
                );
            }
        }

        $calendar = Calendar::addEvents($data);

        // return view('backEnd.calendar.getCalendar', [
        //     'calendar' => $calendar
        // ]);

        return view('backEnd.calendar.getCalendar', compact('calendar'));
    }

    public function newEventView(){
        $users = User::all();
        $paquetes = Paquete::all();

        return view('backEnd.calendar.newEvent', [
            'users' => $users,
            'paquetes' => $paquetes,
        ]);
    }

    public function newEvent(Request $request){
        $event = new Event();
        $ev = Event::all();

        $this->validate($request, [
            'id_user' => 'required',
            'id_paquete' => 'required',
            'date' => 'required|string',
            'time' => 'required|string',
        ]);
        
        $event->id_user = $request->input('id_user');
        $event->id_paquete = $request->input('id_paquete');
        $event->date = $request->input('date');        
        $event->time = $request->input('time');

        $event->save();

        return redirect('/admin/dashboard')
            ->with('message', 'El evento se ha creado correctamente');
    }

    public function updateEventView($id){        
        $event = Event::find($id);
        $user = User::findOrFail($event->id_user);
        $pqt = Paquete::findOrFail($event->id_paquete);
        $salon = Salon::findOrFail(
            Paquete::findOrFail(
                $event->id_paquete)
                ->id_salon)
                ->name;
        $paquetes = Paquete::all();

        return view('backEnd.calendar.updateEvent', [
            'event' => $event,
            'user' => $user,
            'pqt' => $pqt,
            'paquetes' => $paquetes,
            'salon' => $salon
        ]);
    }

    public function updateEvent(Request $request, $id){
        $event = Event::find($id);
        $user = User::find($event->id_user);

        $this->validate($request, [
            'date' => 'required|string',
            'time' => 'required|string',
            'id_paquete' => 'required',
        ]);

        $event->date = $request->input('date');
        $event->time = $request->input('time');
        $event->id_paquete = $request->input('id_paquete');
        $event->id_user = $user->id;

        $event->update();

        return redirect('/admin/dashboard')
            ->with('message', 'El evento se ha editado correctamente');
    }

    public function deleteEvent($id){
        $event = Event::find($id);

        $event->delete();

        return redirect('/admin/dashboard')
            ->with('message', 'El evento se ha eliminado correctamente');
    }

    //Sms Control
    

    public function gateView(){
        return view('backEnd.sms.gates');
    }

    public function open(){
        $client = new Client($this->accountSid, $this->authToken);

        $sms = [            
            'from' => '+13343199816',
            'body' => 'Abrir puerta :D!'
        ];

        try
        {
            $client->messages->create(
                '+523323854666', 
                $sms
                );
        }
        catch (Exception $e)
        {
            echo "Error: " . $e->getMessage();
        }

        return redirect('/admin/dashboard')
            ->with('message', 'Se abrió el cotorreo');
    }

    public function close(){
        $client = new Client($this->accountSid, $this->authToken);

        $sms = [
            'from' => '+13343199816',
            'body' => 'Cerrar puerta >:| !'
        ];

        try
        {
            $client->messages->create(
                '+523323854666', 
                $sms
                );
        }
        catch (Exception $e)
        {
            echo "Error: " . $e->getMessage();
        }

        return redirect('/admin/dashboard')
            ->with('message', 'Se cerró el cotorreo');
    }

    public function send(Request $request){
        $client = new Client($this->accountSid, $this->authToken);

        $sms = [
            'from' => '+13343199816',
            'body' => $request->input('body')

        ];
        try
        {
            $client->messages->create(
                '+523323854666',
                $sms
            );
        }
        catch (Exception $e)
        {
            echo "Error: " . $e->getMessage();
        }

        return redirect('/admin/dashboard')
            ->with('message', 'Se mando mensaje:  "'  . $sms['body'] . '"');
    }

}