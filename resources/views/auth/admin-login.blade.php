@extends('layouts.app')

@section('content')
<body class="bg-info">
    <div class="container">
        <div class="card card-login mx-auto mt-5">
        <div class="card-header">Bienvenido <strong>Admin</strong></div>
        <div class="card-body">
            <form method="POST" action="{{ route('admin.login.submit') }}">
            @csrf
            <div class="form-group">
                <div class="form-label-group">                    
                    <input type="email" id="email" class="form-control{{ $errors->has('email') ? ' is-invalid' : '' }}" name="email" value="{{ old('email') }}" placeholder="Correo electrónico" required autofocus>

                    <label for="email">Correo electrónico:</label>

                    @if ($errors->has('email'))
                        <span class="invalid-feedback" role="alert">
                            <strong>{{ $errors->first('email') }}</strong>
                        </span>
                    @endif
                </div>
            </div>    
            <div class="form-group">
                <div class="form-label-group">
                    <input id="password" type="password" class="form-control{{ $errors->has('password') ? ' is-invalid' : '' }}" name="password" placeholder="Contraseña" required>

                    <label for="password">Contraseña:</label>

                    @if ($errors->has('password'))
                        <span class="invalid-feedback" role="alert">
                            <strong>{{ $errors->first('password') }}</strong>
                        </span>
                    @endif
                </div>
            </div>
            <div class="form-group">
                <div class="checkbox">
                    <label for="remember">
                        <input type="checkbox" name="remember" id="remember" {{ old('remember') ? 'checked' : '' }}>
                        Recuérdame
                    </label>                    
                </div>
            </div>
            <button type="submit" class="btn btn-primary btn-block">
                Entrar
            </button>
            </form>

            {{-- <div class="text-center">
                @if (Route::has('password.request'))
                    <a class="d-block small" href="{{ route('password.request') }}">
                        ¿Olvidaste tu contraseña?
                    </a>
                @endif

                @if (Route::has('register'))
                    <a class="d-d-block small mt-3" href="{{ route('register') }}">Registar una cuenta</a>
                @endif
                
            </div> --}}

        </div>
        </div>
    </div>
</body>


@endsection
