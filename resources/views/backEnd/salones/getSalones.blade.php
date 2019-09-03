@extends('layouts.masterAdmin')

@section('content')

<h1>Listado de salones</h1>
<div class="container">
    <div class="row">
        <div class="card mb-3">
            <div class="card-header">
                <i class="fas fa-user"></i>
                <a href="{{ url('/admin/newsalon') }}" class="btn btn-primary">Nuevo salón</a>
            </div>
            <div class="card-body">
                <div class="table-responsive">
                    <table class="table table-bordered" id="dataTable" width="100%" cellspacing="0">
                    <thead>
                        <tr>
                        <th>Nombre</th>
                        {{-- <th>Descripción corta</th> --}}
                        <th>Detalle</th>
                        <th>Estado</th>
                        <th>Edición</th>
                        <th>Eliminar</th>
                        </tr>
                    </thead>
                    <tfoot>
                        <tr>
                        <th>Nombre</th>
                        {{-- <th>Descripción corta</th> --}}
                        <th>Detalle</th>
                        <th>Estado</th>                        
                        <th>Edición</th>
                        <th>Eliminar</th>
                        </tr>
                    </tfoot>
                    <tbody>
                        @if (count($salones) >= 1)
                            @foreach ($salones as $salon)
                                <tr>
                                    <td>{{ $salon->name }}</td>
                                    {{-- <td>{{ $salon->descriptionC }}</td> --}}
                                    <td>{{ $salon->descriptionC }}</td>
                                    <td>{{ $salon->state }}</td>
                                    <td> <a href="{{ url('/admin/updatesalon/' . $salon->id) }}" class="btn btn-success">Editar</a></td>
                                    <td> <a href="{{ url('/admin/deletesalon/' . $salon->id) }}" class="btn btn-danger">Eliminar</a></td>
                                </tr>
                            @endforeach
                        @else
                            <p>No hay salones registrados...</p>
                        @endif
                    </tbody>
                    </table>

                    {{$salones->links() }}
                    
                </div>
            </div>
        </div>
    </div>
</div>




















{{-- ************************************* --}}


{{-- <div class="container">    
    <div class="row mt-3">

        <div class="col-12">
            <h1>
                Listado de todos los salones
            </h1>
            <a href="{{ url('/admin/newsalon') }}" class="btn btn-primary mb-3">Nuevo salón</a>
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
</div> --}}

@endsection

@section('scripts')
    
@endsection