@extends('layouts.master')

@section('content')


<div class="container">
    <div class="row mt-3">
        <h1>
            Propiedades del paquete <small>{{ $paquete->name}}</small>
        </h1>
        {{-- <p>
            {{ $paquete }}
        </p> --}}

        <div class="col-8 mt-3 mb-3">
            <div class="card border-secondary">
                <img src="http://lorempixel.com/800/531/sports/{{ $paquete->id }}/" class="card-img-top img-fluid" alt="">
                <div class="card-body">
                    <h3 class="card-title">
                        <small>
                            {{ $paquete->id_salon }}
                        </small>
                        {{ $paquete->name }}
                    </h3>
                    <p class="card-subtitle text-muted mb-2">$ {{ $paquete->price }}.00</p>
                    <p class="card-text">{{ $paquete->descriptionC }}</p>
                    <p class="card-text">{{ $paquete->description }}</p>
                    <a href="{{ url('user/getdate/' . $paquete->id) }}" class="btn btn-primary">Seleccionar fecha</a>
                </div>
            </div>
        </div>

    </div>
</div>


@endsection

@section('scripts')
    
@endsection