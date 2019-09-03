<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class UsersController extends Controller
{
    public function getUser(){
        $user = Auth::user();

        return view('frontEnd.userProfile', [
            'user' => $user
        ]);
    }

    public function updateUser(Request $request){
        $user = Auth::user();

        $this->validate($request, [
            'name' => 'required|string|max:255',
            'apellidoP' => 'required|string|max:255',
            'apellidoM' => 'required|string|max:255',
            'domicilio' => 'required|string|max:255',
            'telefono' => 'required|string|max:255',
            'colonia' => 'required|string|max:255',
            'municipio' => 'required|string|max:255',
            'codigoP' => 'required|string|max:255',
            // 'email' => 'sometimes|string|email|max:255|unique:users',
            // 'password' => 'sometimes|string|min:6|confirmed',
        ]);

        if(!$request->input('email')){
            $this->validate($request, ['email' => 'required|string|emailmax:255|unique:users']);
        }
        // if(!$request->input('password')){
        //     $this->validate($request, ['password' => 'sometimes|string|min:6|confirmed']);
        // }

        $user->name = $request->input('name');
        $user->apellidoP = $request->input('apellidoP');
        $user->apellidoM = $request->input('apellidoM');
        $user->domicilio = $request->input('domicilio');
        $user->telefono = $request->input('telefono');
        $user->colonia = $request->input('colonia');
        $user->municipio = $request->input('municipio');
        $user->codigoP = $request->input('codigoP');
        $user->email = $request->input('email');

        $user->update();

        return redirect()->route('dashboard', [
            'messaje' => 'El usuario se ha actualizado correctamente'
        ]);
    }

    public function vista(){
        return view('frontend.vista');
    }

}
