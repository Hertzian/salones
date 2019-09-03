@extends('layouts.masterAdmin')


@section('content')

<div class="container">
    <div class="row">
        <div class="card mb-3">
            <div class="card-header">
                <h3>Editar/ver evento de {{ $user->name . ' ' . $user->apellidoP . ' ' . $user->apellidoM }}</h3>
                {{-- <i class="fas fa-user"></i> --}}
                <a href="{{ url('/admin/deleteevent/' . $event->id) }}" class="btn btn-danger">Eliminar evento</a>
            </div>

            <div class="col-12 mt-3 mb-3">
                
                <div class="card-body">
                    
                    {{-- <h3 class="card-title">
                        Salón {{ $salon->name }}
                    </h3> --}}

                    <div class="form-label-group my-3">
                        <input type="hidden" id="id_user"  class="form-control{{ $errors->has('id_user') ? ' is-invalid' : '' }}" name="id_user" value="{{ $user->id }}" placeholder="Nombre del salón" required readonly>
                        <label for="id_user">Id Usuario:</label>
                        @if ($errors->has('id_user'))
                            <span class="invalid-feedback" role="alert">
                                <strong>{{ $errors->first('id_user') }}</strong>
                            </span>
                        @endif
                    </div>

                    <div class="form-label-group my-3">
                        <input type="text" id="name"  class="form-control{{ $errors->has('name') ? ' is-invalid' : '' }}" name="name" value="{{ $user->name . ' ' . $user->apellidoP . ' ' . $user->apellidoM }}" placeholder="Nombre del salón" required readonly>
                        <label for="name">Nombre usuario:</label>
                        @if ($errors->has('name'))
                            <span class="invalid-feedback" role="alert">
                                <strong>{{ $errors->first('name') }}</strong>
                            </span>
                        @endif
                    </div>
                    <a href="{{ url('/admin//updateuser/' . $user->id) }}" class="btn btn-primary">Editar datos de usuario</a>
                    
                    <hr>

                    <label for="id_salon"><strong>Datos de evento:</strong></label>
                    <form method="POST" action="{{ url('/admin/updateevent/' . $event->id) }}">
                        @csrf
                        <br>
                        
                        {{-- <label for="id_salon">Salón:</label>
                        <div class="form-label-group my-3">
                            <select name="id_salon" id="id_salon" class="form-control{{ $errors->has('id_salon') ? ' is-invalid' : '' }}" selected>
                                    <option value="">Selecciona un salón</option>
                                @if (count($salones) >= 1)
                                    @foreach ($salones as $s)
                                        <option value="{{ $s->id }}" selected>{{ $s->name }}</option>
                                    @endforeach
                                @endif
                            </select>
                            @if ($errors->has('id_salon'))
                                <span class="invalid-feedback" role="alert">
                                    <strong>{{ $errors->first('id_salon') }}</strong>
                                </span>
                            @endif
                        </div> --}}

                        <label for="id_paquete">Paquete:</label>
                        <div class="form-label-group my-3">
                            <select name="id_paquete" id="id_paquete" class="form-control{{ $errors->has('id_paquete') ? ' is-invalid' : '' }}" selected>
                                    <option value="{{ $pqt->id }}">
                                        {{ 'Salón: ' . $salon . ' Paquete: ' . $pqt->name }}
                                    {{-- {{ 'Salón: ' . App\Salon::findOrFail($pqt->id_salon)->name . ', Paquete: ' . App\Paquete::findOrFail($event->id_paquete)->name }} --}}
                                    
                                    {{-- // . ', paquete: ' . App\Paquete::findOrFail($event->id_paquete)->name 
                                    
                                    // }} --}}
                                    </option>
                                    <option value="">Selecciona un paquete</option>
                                @if (count($paquetes) >= 1)
                                    @foreach ($paquetes as $paquete)
                                        <option value="{{ $paquete->id }}">{{ ' salón: ' . App\Salon::findOrFail($paquete->id_salon)->name . ', paquete: ' . $paquete->name }}</option>
                                    @endforeach
                                @endif
                            </select>
                            @if ($errors->has('id_paquete'))
                                <span class="invalid-feedback" role="alert">
                                    <strong>{{ $errors->first('id_paquete') }}</strong>
                                </span>
                            @endif
                        </div>

                        <div class='input-group date'>
                            <label for="date">Seleccione fecha:</label>
                        </div>
                        <div class='mb-3 input-group date' id='date'>
                        <input name="date" type='text' class="form-control" value="{{ $event->date }}"/>
                            <span class="btn input-group-addon">
                                <span class="fa fa-calendar"></span>
                            </span>
                            @if ($errors->has('date'))
                                <span class="invalid-feedback" role="alert">
                                <strong>{{ $errors->first('date') }}</strong>
                                </span>
                            @endif
                        </div>

                        <hr>

                        <div class='input-group date'>
                            <label for="time">Seleccione hora para su evento:</label>
                        </div>
                        <div class='input-group date' id='time'>
                        <input name="time" type='text' class="form-control" value="{{ $event->time }}"/>
                            <span class="btn input-group-addon">
                                <span class="fa fa-clock"></span>
                            </span>
                            @if ($errors->has('time'))
                                <span class="invalid-feedback" role="alert">
                                <strong>{{ $errors->first('time') }}</strong>
                                </span>
                            @endif

                        </div>

                        {{-- textarea --}}
                        {{-- <div class="form-label-group my-3">
                            <textarea type="text" id="descriptionC"  class="form-control{{ $errors->has('descriptionC') ? ' is-invalid' : '' }}" name="descriptionC" placeholder="Descripción corta:" required autofocus>{{ $salon->descriptionC }}</textarea>
                            @if ($errors->has('descriptionC'))
                                <span class="invalid-feedback" role="alert">
                                    <strong>{{ $errors->first('descriptionC') }}</strong>
                                </span>
                            @endif
                        </div> --}}

                        <button type="submit" class="btn btn-primary btn-block my-3">Editar evento</button>  
                    </form>
                    

                    
                    
                </div>
            </div>

        </div>
    </div>
</div>

@endsection

@section('scripts')

    <script type="text/javascript">

        // Date
        $(function () {
            $('#date').datetimepicker({
                // format: 'l'
                format: 'YYYY-MM-DD'
            });
        });

        // Hour
        $(function () {
            $('#time').datetimepicker({
                format: 'LT'
            });
        });
    </script>

@endsection
