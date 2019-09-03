@extends('layouts.master')

@section('content')

<div class="container">    
    <div class="row mt-3">

        <div class="col-12">
            <h1>
                Listado de todos los salones
            </h1>
        </div>

        @if(count($salones) >=1)            
            @foreach($salones as $salon)

            <div class="col-xl-3 col-sm-6 mb-3">
                <div class="card text-muted o-hidden h-100">
                    <div class="card-body">
                            <a href="{{ url('/user/detailsalon/' . $salon->id) }}" class="text-dark">
                                <img src="http://lorempixel.com/800/531/sports/{{$salon->id}}/" class="card-img-top img-fluid" alt="">
                            </a>  
                        <div class="mr-5">
                            <h3> 
                                <a href="{{ url('/user/detailsalon/' . $salon->id) }}" class="text-dark">
                                    {{ $salon->name }}
                                </a>
                            </h3>    
                        </div>
                        <div class="mr-5">{{ $salon->descriptionC }}</div>
                        <div class="mr-5">{{ $salon->description }}</div>
                    </div>
                    <a class="card-footer text-muted clearfix small z-1" href="{{ url('/user/detailsalon/' . $salon->id) }}">
                    <span class="float-left">Ver detalles</span>
                    <span class="float-right">
                        <i class="fas fa-angle-right"></i>
                    </span>
                    </a>
                </div>
            </div>

            @endforeach
        @else 
            <div class="col-12">
                <h1>
                    No hay salones registrados
                </h1>
            </div>
        @endif
    </div>
</div>

@endsection

@section('scripts')
    
@endsection