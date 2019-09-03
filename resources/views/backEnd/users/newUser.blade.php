@extends('layouts.masterAdmin')

@section('content')

<div class="container">
    <div class="row">
        <h3>
            Crear usuario
        </h3>
        <br>



        <div class="col-12 mx-3">
            

            {{-- <form method="POST" action="{{ route('register') }}"> --}}
            <form method="POST" action="{{ url('admin/newuser') }}">
                @csrf

                <div class="form-group">
                    <div class="form-row">
                        <div class="col-md-4">
                            <div class="form-label-group">
                            <input type="text" id="name"  class="form-control{{ $errors->has('name') ? ' is-invalid' : '' }}" name="name" value="" placeholder="Nombre" required autofocus>
                            <label for="name">Nombre(s):</label>
                                @if ($errors->has('name'))
                                    <span class="invalid-feedback" role="alert">
                                        <strong>{{ $errors->first('name') }}</strong>
                                    </span>
                                @endif
                            </div>
                        </div>
                        <div class="col-md-4">
                            <div class="form-label-group">
                            <input type="text" id="apellidoP"  class="form-control{{ $errors->has('apellidoP') ? ' is-invalid' : '' }}" name="apellidoP" value="" placeholder="Nombre" required autofocus>
                            <label for="apellidoP">Apellido Paterno:</label>
                                @if ($errors->has('apellidoP'))
                                    <span class="invalid-feedback" role="alert">
                                        <strong>{{ $errors->first('apellidoP') }}</strong>
                                    </span>
                                @endif
                            </div>
                        </div>
                        <div class="col-md-4">
                            <div class="form-label-group">
                            <input type="text" id="apellidoM"  class="form-control{{ $errors->has('apellidoM') ? ' is-invalid' : '' }}" name="apellidoM" value="" placeholder="Nombre" required autofocus>
                            <label for="apellidoM">Apellido Materno:</label>
                                @if ($errors->has('apellidoM'))
                                    <span class="invalid-feedback" role="alert">
                                        <strong>{{ $errors->first('apellidoM') }}</strong>
                                    </span>
                                @endif
                            </div>
                        </div>
                    </div>
                </div>
                
                <div class="form-group">
                    <div class="form-row">
                        <div class="col-md-8">
                            <div class="form-label-group">
                            <input type="text" id="domicilio"  class="form-control{{ $errors->has('domicilio') ? ' is-invalid' : '' }}" name="domicilio" value="" placeholder="Nombre" required autofocus>
                            <label for="domicilio">Domicilio:</label>
                                @if ($errors->has('domicilio'))
                                    <span class="invalid-feedback" role="alert">
                                        <strong>{{ $errors->first('domicilio') }}</strong>
                                    </span>
                                @endif
                            </div>
                        </div>
                        <div class="col-md-4">
                            <div class="form-label-group">
                            <input type="text" id="codigoP"  class="form-control{{ $errors->has('codigoP') ? ' is-invalid' : '' }}" name="codigoP" value="" placeholder="Nombre" required autofocus>
                            <label for="codigoP">C.P.</label>
                                @if ($errors->has('codigoP'))
                                    <span class="invalid-feedback" role="alert">
                                        <strong>{{ $errors->first('codigoP') }}</strong>
                                    </span>
                                @endif
                            </div>
                        </div>
                    </div>                    
                </div>

                <div class="form-group">
                    <div class="form-row">
                        <div class="col-md-4">
                            <div class="form-label-group">
                            <input type="text" id="telefono"  class="form-control{{ $errors->has('telefono') ? ' is-invalid' : '' }}" name="telefono" value="" placeholder="Nombre" required autofocus>
                            <label for="telefono">Teléfono:</label>
                                @if ($errors->has('telefono'))
                                    <span class="invalid-feedback" role="alert">
                                        <strong>{{ $errors->first('telefono') }}</strong>
                                    </span>
                                @endif
                            </div>
                        </div>
                        <div class="col-md-4">
                            <div class="form-label-group">
                            <input type="text" id="colonia"  class="form-control{{ $errors->has('colonia') ? ' is-invalid' : '' }}" name="colonia" value="" placeholder="Nombre" required autofocus>
                            <label for="colonia">Colonia:</label>
                                @if ($errors->has('colonia'))
                                    <span class="invalid-feedback" role="alert">
                                        <strong>{{ $errors->first('colonia') }}</strong>
                                    </span>
                                @endif
                            </div>
                        </div>
                        <div class="col-md-4">
                            <div class="form-label-group">
                            <input type="text" id="municipio"  class="form-control{{ $errors->has('municipio') ? ' is-invalid' : '' }}" name="municipio" value="" placeholder="Nombre" required autofocus>
                            <label for="municipio">Municipio:</label>
                                @if ($errors->has('municipio'))
                                    <span class="invalid-feedback" role="alert">
                                        <strong>{{ $errors->first('municipio') }}</strong>
                                    </span>
                                @endif
                            </div>
                        </div>
                    </div>                    
                </div>

                <div class="form-group">
                    <div class="form-row">
                        <div class="col-md-12">
                            <div class="form-label-group">
                            <input type="text" id="email"  class="form-control{{ $errors->has('email') ? ' is-invalid' : '' }}" name="email" value="" placeholder="Nombre" required autofocus>
                            <label for="email">Email:</label>
                                @if ($errors->has('email'))
                                    <span class="invalid-feedback" role="alert">
                                        <strong>{{ $errors->first('email') }}</strong>
                                    </span>
                                @endif
                            </div>
                        </div>
                    </div>
                </div>

                <div class="form-group">
                    <div class="form-row">
                        <div class="col-md-6">
                            <div class="form-label-group">
                            <input type="password" id="password"  class="form-control{{ $errors->has('password') ? ' is-invalid' : '' }}" name="password" value="{{ old('password') }}">
                            <label for="password">Contraseña:</label>
                                @if ($errors->has('password'))
                                    <span class="invalid-feedback" role="alert">
                                        <strong>{{ $errors->first('password') }}</strong>
                                    </span>
                                @endif
                            </div>
                        </div>

                        <div class="col-md-6">
                            <div class="form-label-group">
                            <input type="password" id="password-confirm"  class="form-control" name="password_confirmation">
                            <label for="password-confirm">Confirmar contraseña:</label>
                            </div>
                        </div>





                    </div>
                </div>

                <button type="submit" class="btn btn-primary btn-block">Enviar</button>
                
            </form>


        </div>
    </div>
</div>

@endsection

@section('scripts')
    
@endsection