@extends('layouts.app')

@section('content')

{{-- <div class="container">
    <div class="row justify-content-center">
        <div class="col-md-8">
            <div class="card">
                <div class="card-header">{{ __('Register') }}</div>

                <div class="card-body">
                    <form method="POST" action="{{ route('register') }}">
                        @csrf

                        <div class="form-group row">
                            <label for="name" class="col-md-4 col-form-label text-md-right">{{ __('Name') }}</label>

                            <div class="col-md-6">
                                <input id="name" type="text" class="form-control{{ $errors->has('name') ? ' is-invalid' : '' }}" name="name" value="{{ old('name') }}" required autofocus>

                                @if ($errors->has('name'))
                                    <span class="invalid-feedback">
                                        <strong>{{ $errors->first('name') }}</strong>
                                    </span>
                                @endif
                            </div>
                        </div>

                        <div class="form-group row">
                            <label for="email" class="col-md-4 col-form-label text-md-right">{{ __('E-Mail Address') }}</label>

                            <div class="col-md-6">
                                <input id="email" type="email" class="form-control{{ $errors->has('email') ? ' is-invalid' : '' }}" name="email" value="{{ old('email') }}" required>

                                @if ($errors->has('email'))
                                    <span class="invalid-feedback">
                                        <strong>{{ $errors->first('email') }}</strong>
                                    </span>
                                @endif
                            </div>
                        </div>

                        <div class="form-group row">
                            <label for="password" class="col-md-4 col-form-label text-md-right">{{ __('Password') }}</label>

                            <div class="col-md-6">
                                <input id="password" type="password" class="form-control{{ $errors->has('password') ? ' is-invalid' : '' }}" name="password" required>

                                @if ($errors->has('password'))
                                    <span class="invalid-feedback">
                                        <strong>{{ $errors->first('password') }}</strong>
                                    </span>
                                @endif
                            </div>
                        </div>

                        <div class="form-group row">
                            <label for="password-confirm" class="col-md-4 col-form-label text-md-right">{{ __('Confirm Password') }}</label>

                            <div class="col-md-6">
                                <input id="password-confirm" type="password" class="form-control" name="password_confirmation" required>
                            </div>
                        </div>

                        <div class="form-group row mb-0">
                            <div class="col-md-6 offset-md-4">
                                <button type="submit" class="btn btn-primary">
                                    {{ __('Register') }}
                                </button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </div>
</div> --}}




<body class="bg-dark">

    <div class="container">
        <div class="card card-register mx-auto mt-5">
        <div class="card-header">Registrar una cuenta nueva</div>
        <div class="card-body">
            <form method="POST" action="{{ route('register') }}">
                @csrf
            
                <div class="form-group">
                    <div class="form-row">
                        <div class="col-md-4">
                            <div class="form-label-group">
                            <input type="text" id="name"  class="form-control{{ $errors->has('name') ? ' is-invalid' : '' }}" name="name" value="{{ old('name') }}" placeholder="Nombre" required autofocus>
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
                            <input type="text" id="apellidoP"  class="form-control{{ $errors->has('apellidoP') ? ' is-invalid' : '' }}" name="apellidoP" value="{{ old('apellidoP') }}" placeholder="Nombre" required autofocus>
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
                            <input type="text" id="apellidoM"  class="form-control{{ $errors->has('apellidoM') ? ' is-invalid' : '' }}" name="apellidoM" value="{{ old('apellidoM') }}" placeholder="Nombre" required autofocus>
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
                            <input type="text" id="domicilio"  class="form-control{{ $errors->has('domicilio') ? ' is-invalid' : '' }}" name="domicilio" value="{{ old('domicilio') }}" placeholder="Nombre" required autofocus>
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
                            <input type="text" id="codigoP"  class="form-control{{ $errors->has('codigoP') ? ' is-invalid' : '' }}" name="codigoP" value="{{ old('codigoP') }}" placeholder="Nombre" required autofocus>
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
                            <input type="text" id="telefono"  class="form-control{{ $errors->has('telefono') ? ' is-invalid' : '' }}" name="telefono" value="{{ old('telefono') }}" placeholder="Nombre" required autofocus>
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
                            <input type="text" id="colonia"  class="form-control{{ $errors->has('colonia') ? ' is-invalid' : '' }}" name="colonia" value="{{ old('colonia') }}" placeholder="Nombre" required autofocus>
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
                            <input type="text" id="municipio"  class="form-control{{ $errors->has('municipio') ? ' is-invalid' : '' }}" name="municipio" value="{{ old('municipio') }}" placeholder="Nombre" required autofocus>
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

                {{-- <div class="form-group">
                    <div class="form-row">
                        <div class="col-md-6">
                            <div class="form-label-group">
                            <input type="file" id="imgId"  class="form-control{{ $errors->has('imgId') ? ' is-invalid' : '' }}" name="imgId" value="{{ old('imgId') }}" placeholder="Nombre" required autofocus>
                            <label for="imgId">Imagen de perfil:</label>
                                @if ($errors->has('imgId'))
                                    <span class="invalid-feedback" role="alert">
                                        <strong>{{ $errors->first('imgId') }}</strong>
                                    </span>
                                @endif
                            </div>
                        </div>
                        <div class="col-md-6">
                            <div class="form-label-group">
                            <input type="file" id="imgOfId"  class="form-control{{ $errors->has('imgOfId') ? ' is-invalid' : '' }}" name="imgOfId" value="{{ old('imgOfId') }}" placeholder="Nombre" required autofocus>
                            <label for="imgOfId">Identificación oficial:</label>

                            @if ($errors->has('imgOfId'))
                                <span class="invalid-feedback" role="alert">
                                    <strong>{{ $errors->first('imgOfId') }}</strong>
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
                            <input type="file" id="curp"  class="form-control{{ $errors->has('curp') ? ' is-invalid' : '' }}" name="curp" value="{{ old('curp') }}" placeholder="Nombre" required autofocus>
                            <label for="curp">CURP:</label>
                                @if ($errors->has('curp'))
                                    <span class="invalid-feedback" role="alert">
                                        <strong>{{ $errors->first('curp') }}</strong>
                                    </span>
                                @endif
                            </div>
                        </div>
                        <div class="col-md-6">
                            <div class="form-label-group">
                            <input type="file" id="compD"  class="form-control{{ $errors->has('compD') ? ' is-invalid' : '' }}" name="compD" value="{{ old('compD') }}" placeholder="Nombre" required autofocus>
                            <label for="compD">Comprobante de domicilio:</label>
                            @if ($errors->has('compD'))
                                <span class="invalid-feedback" role="alert">
                                    <strong>{{ $errors->first('compD') }}</strong>
                                </span>
                            @endif
                            </div>
                        </div>
                    </div>                    
                </div> --}}

                <div class="form-group">
                    <div class="form-row">
                        <div class="col-md-12">
                            <div class="form-label-group">
                            <input type="text" id="email"  class="form-control{{ $errors->has('email') ? ' is-invalid' : '' }}" name="email" value="{{ old('email') }}" placeholder="Nombre" required autofocus>
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
                            <input type="password" id="password"  class="form-control{{ $errors->has('password') ? ' is-invalid' : '' }}" name="password" value="{{ old('password') }}" placeholder="Nombre" required>
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
                            <input type="password" id="password-confirm"  class="form-control" name="password_confirmation" required>
                            <label for="password-confirm">Confirmar contraseña:</label>
                            </div>
                        </div>





                        {{-- <div class="form-group row">
                            <label for="password" class="col-md-4 col-form-label text-md-right">{{ __('Password') }}</label>

                            <div class="col-md-6">
                                <input id="password" type="password" class="form-control{{ $errors->has('password') ? ' is-invalid' : '' }}" name="password" required>

                                @if ($errors->has('password'))
                                    <span class="invalid-feedback" role="alert">
                                        <strong>{{ $errors->first('password') }}</strong>
                                    </span>
                                @endif
                            </div>
                        </div>

                        <div class="form-group row">
                            <label for="password-confirm" class="col-md-4 col-form-label text-md-right">{{ __('Confirm Password') }}</label>

                            <div class="col-md-6">
                                <input id="password-confirm" type="password" class="form-control" name="password_confirmation" required>
                            </div>
                        </div> --}}

                            



                    </div>
                </div>

                <button type="submit" class="btn btn-primary btn-block">Registrar</button>
                
            </form>

            <div class="text-center">
                <a class="d-block small mt-3" href="{{ route('login') }}">Ingresar</a>
                <a class="d-block small" href="{{ route('password.request') }}">¿Olvidaste tu contraseña?</a>
            </div>
        </div>
        </div>
    </div>


</body>




@endsection
