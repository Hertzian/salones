@extends('layouts.masterAdmin')

@section('content')

<h1>Control de puertas</h1>
<div class="container">
    <div class="row">
        <div class="card mb-3">
            <div class="card-header">                
                Acceso a salón
            </div>
            <div class="card-body">
                <form action="{{ url('admin/open') }}" method="post">
                    {{ csrf_field() }}
                    <button class="btn btn-primary btn-lg btn-block" type="submit">Abrir</button>
                </form>
                <br>
                <form action="{{ url('admin/close') }}" method="post">
                    {{ csrf_field() }}
                    <button class="btn btn-danger btn-lg btn-block" type="submit">Cerrar</button>
                </form>
                <br>
                <div class="card-body">
                    <form action="{{ url('admin/send') }}" method="post">
                        {{ csrf_field() }}
                        <label for="body">Escribe tu mensaje:</label>
                        <input type="text" id="body"  class="form-control{{ $errors->has('body') ? ' is-invalid' : '' }}" name="body" value="" placeholder="Mensaje" required autofocus>
                        <button class="btn btn-success btn-lg btn-block mt-3" type="submit">Send</button>
                    </form>
                </div>
            </div>
        </div>
    </div>
</div>


<div class="">
    
</div>

@endsection

@section('scripts')

@endsection