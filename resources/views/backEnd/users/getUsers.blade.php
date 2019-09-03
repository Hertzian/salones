@extends('layouts.masterAdmin')

@section('content')
<h1>Gestión de usuarios</h1>
<div class="container">
    <div class="row">
        <div class="card mb-3">
            <div class="card-header">
                <i class="fas fa-user"></i>
                <a href="{{ url('/admin/newuser') }}" class="btn btn-primary">Nuevo usuario</a>
            </div>
            <div class="card-body">

                <div class="table-responsive">
                    <table class="table table-bordered" id="dataTable" width="100%" cellspacing="0">
                    <thead>
                        <tr>
                        <th>Nombre</th>
                        <th>Domicilio</th>
                        <th>Colonia</th>
                        <th>Municipio</th>
                        <th>C.P.</th>
                        </tr>
                    </thead>
                    <tfoot>
                        <tr>
                        <th>Nombre</th>
                        <th>Domicilio</th>
                        <th>Colonia</th>
                        <th>Municipio</th>
                        <th>C.P.</th>
                        </tr>
                    </tfoot>
                    <tbody>

                        @if (count($users) >= 1)
                            @foreach ($users as $user)
                                <tr>
                                    <td>{{ $user->name }}</td>
                                    <td>{{ $user->domicilio }}</td>
                                    <td>{{ $user->colonia }}</td>
                                    <td>{{ $user->municipio }}</td>
                                    <td>{{ $user->codigoP }}</td>
                                    <td> <a href="{{ url('/admin/updateuser/' . $user->id) }}" class="btn btn-success">Editar</a></td>
                                </tr>
                            @endforeach

                        @else
                            <h2>No hay usuarios registrados...</h2>
                        @endif

                    </tbody>
                    </table>

                    {{ $users->links() }}
                    
                </div>


            </div>
        </div>


    </div>
</div>


@endsection

@section('scripts')

@endsection
