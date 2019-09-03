@extends('layouts.master')
{{-- @extends('layouts.app') --}}

@section('content')

{{-- <div class="container">
    <div class="row justify-content-center">
        <div class="col-md-8">
            <div class="card">
                <div class="card-header">Dashboard</div>

                <div class="card-body">
                    @if (session('status'))
                        <div class="alert alert-success">
                            {{ session('status') }}
                        </div>
                    @endif
                    You are logged in!
                </div>

            </div>
        </div>
    </div>
</div> --}}


<h1>
Bienvenido
</h1>    

<div class="container">
    <div class="row">
        <div class="card mb-3">
            <div class="card-header">
                <i class="fas fa-user"></i>
                Selecciona tu ubicación                
            </div>

                <div class="col-12 mt-3 mb-3">
                    <div class="card border-secondary">
                        {{-- <img src="http://lorempixel.com/800/531/sports/{{ $paquete->id }}/" class="card-img-top img-fluid" alt=""> --}}
                        <div class="card-body">

                            <form method="post" action="{{ url('/user/getstate/') }}">
                            @csrf
                                <select name="state" id="state">
                                    <option value="Aguascalientes">Aguascalientes</option>
                                    <option value="Baja California">Baja California</option>
                                    <option value="Baja California Sur">Baja California Sur</option>
                                    <option value="Campeche">Campeche</option>
                                    <option value="Coahuila">Coahuila</option>
                                    <option value="Colima">Colima</option>
                                    <option value="Chiapas">Chiapas</option>
                                    <option value="Chihuahua">Chihuahua</option>
                                    <option value="Distrito Federal">Distrito Federal</option>
                                    <option value="Durango">Durango</option>
                                    <option value="Guanajuato">Guanajuato</option>
                                    <option value="Guerrero">Guerrero</option>
                                    <option value="Hidalgo">Hidalgo</option>
                                    <option value="Jalisco">Jalisco</option>
                                    <option value="Mexico">México</option>
                                    <option value="Michoacan">Michoacán</option>
                                    <option value="Morelos">Morelos</option>
                                    <option value="Nayarit">Nayarit</option>
                                    <option value="Nuevo Leon">Nuevo León</option>
                                    <option value="Oaxaca">Oaxaca</option>
                                    <option value="Puebla">Puebla</option>
                                    <option value="Queretaro">Querétaro</option>
                                    <option value="Quintana Roo">Quintana Roo</option>
                                    <option value="San Luis Potosi">San Luis Potosí</option>
                                    <option value="Sinaloa">Sinaloa</option>
                                    <option value="Sonora">Sonora</option>
                                    <option value="Tabasco">Tabasco</option>
                                    <option value="Tamaulipas">Tamaulipas</option>
                                    <option value="Tlaxcala">Tlaxcala</option>
                                    <option value="Veracruz">Veracruz</option>
                                    <option value="Yucatan">Yucatán</option>
                                    <option value="Zacatecas">Zacatecas</option>
                                </select>

                            <button type="submit" class="btn btn-primary btn-block my-2">Enviar</button>

                        </div>
                    </div>
                </div>
            </form>

        </div>




    </div>
</div>
@endsection
