@extends('layouts.masterAdmin')


@section('content')

<div class="container">
    <div class="row">
        <div class="card mb-3">
            <div class="card-header">
                <h3>Nuevo evento</h3>
                {{-- <i class="fas fa-user"></i>
                <a href="{{ url('/admin/newsalon') }}" class="btn btn-primary">Nuevo salón</a> --}}
            </div>

            <div class="col-12 mt-3 mb-3">
                
                <div class="card-body">
                                        
                    {{-- <hr> --}}

                    <label for="id_salon"><strong>Datos de evento:</strong></label>
                    <form method="POST" action="{{ url('/admin/newevent/') }}">
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

                        <label for="id_user">Selecciona un usuario:</label>
                        <div class="form-label-group my-3">
                            <select name="id_user" id="id_user" class="form-control{{ $errors->has('id_user') ? ' is-invalid' : '' }}" selected>
                                    <option value="">Selecciona un usuario</option>
                                @if (count($users) >= 1)
                                    @foreach ($users as $user)
                                        <option value="{{ $user->id }}">{{ $user->name . ' ' . $user->apellidoP . ' ' . $user->apellidoM }}</option>
                                        
                                        

                                    @endforeach
                                @endif
                            </select>
                            @if ($errors->has('id_user'))
                                <span class="invalid-feedback" role="alert">
                                    <strong>{{ $errors->first('id_user') }}</strong>
                                </span>
                            @endif
                        </div>
                        
                        <div class="form-label-group my-3">
                            <a class="btn btn-primary" href="{{ url('/admin/newuser') }}">Usuario nuevo</a>
                        </div>

                        {{-- <label for="id_salon">Salón:</label>
                        <div class="form-label-group my-3">
                            <select name="id_salon" id="id_salon" class="form-control{{ $errors->has('id_salon') ? ' is-invalid' : '' }}">
                                    <option value="">Selecciona un salón</option>
                                @if (count($paquetes) >= 1)
                                    @foreach ($paquetes as $paquete)

                                        <option value="{{ App\Salon::findOrFail($paquete->id_salon)->id }}">{{ App\Salon::findOrFail($paquete->id_salon)->name }}</option>

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
                            <select name="id_paquete" id="id_paquete" class="form-control{{ $errors->has('id_paquete') ? ' is-invalid' : '' }}">
                                    <option value="">Selecciona un paquete</option>
                                @if (count($paquetes) >= 1)
                                    @foreach ($paquetes as $paquete)

                                        <option value="{{ $paquete->id }}">{{ ' salón: ' . App\Salon::findOrFail($paquete->id_salon)->name . ', paquete: ' . $paquete->name }} </option>

                                    @endforeach
                                @endif
                            </select>
                            @if ($errors->has('id_paquete'))
                                <span class="invalid-feedback" role="alert">
                                    <strong>{{ $errors->first('id_paquete') }}</strong>
                                </span>
                            @endif
                        </div>

                        

                        <hr>
                        
                        <div class='input-group date'>
                            <label for="date">Seleccione fecha:</label>
                            @if ($errors->has('date'))
                                <span class="invalid-feedback" role="alert">
                                <strong>{{ $errors->first('date') }}</strong>
                                </span>
                            @endif
                        </div>
                        <div class='mb-3 input-group date' id='date'>
                            <input name="date" type='text' class="form-control" value=""/>
                            <span class="btn input-group-addon">
                                <span class="fa fa-calendar"></span>
                            </span>
                            
                        </div>

                        <hr>

                        <div class='input-group date'>
                            <label for="time">Seleccione hora para su evento:</label>
                        </div>
                        <div class='input-group date' id='time'>
                        <input name="time" type='text' class="form-control" value=""/>
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

                        <input type="hidden" id="id_salon" name="custId" value="">
                        

                        <button type="submit" class="btn btn-primary btn-block my-3">Nuevo evento</button>  
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

        // $("#id_paquete").val("");

    </script>

@endsection
