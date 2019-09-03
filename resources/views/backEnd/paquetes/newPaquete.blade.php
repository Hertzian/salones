@extends('layouts.masterAdmin')

@section('content')

<h1>
Nuevo paquete
</h1>    

<div class="container">
    <div class="row">
        <div class="card mb-3">
            <div class="card-header">
                {{-- <i class="fas fa-user"></i> --}}
                <label for="price"><strong>Nuevo paquete </strong></label>                
            </div>

                <div class="col-12 mt-3 mb-3">
                    <div class="card border-secondary">
                        {{-- <img src="http://lorempixel.com/800/531/sports/{{ $paquete->id }}/" class="card-img-top img-fluid" alt=""> --}}
                        <div class="card-body">

                            <form method="POST" action="{{ url('/admin/newpaquete/') }}">
                            @csrf
                                <h3 class="card-title">
                                </h3>

                                <label for="name"><small>Nombre paquete:</small></label>
                                <input type="text" id="name"  class="form-control{{ $errors->has('name') ? ' is-invalid' : '' }}" name="name" value="" placeholder="Nombre paquete" required autofocus>
                                @if ($errors->has('name'))
                                    <span class="invalid-feedback" role="alert">
                                        <strong>{{ $errors->first('name') }}</strong>
                                    </span>
                                @endif



                                <label for="price"><small>Precio:</small></label>
                                <input type="text" id="price"  class="form-control{{ $errors->has('price') ? ' is-invalid' : '' }}" name="price" value="" placeholder="Precio" required autofocus>
                                @if ($errors->has('price'))
                                    <span class="invalid-feedback" role="alert">
                                        <strong>{{ $errors->first('price') }}</strong>
                                    </span>
                                @endif

                                <label for="descriptionC"><small>Descripción corta:</small></label>
                                <textarea type="text" id="descriptionC"  class="form-control{{ $errors->has('descriptionC') ? ' is-invalid' : '' }}" name="descriptionC" value="" placeholder="Descripción corta" required autofocus></textarea>
                                @if ($errors->has('descriptionC'))
                                    <span class="invalid-feedback" role="alert">
                                        <strong>{{ $errors->first('descriptionC') }}</strong>
                                    </span>
                                @endif

                                {{-- <label for="description"><small>Detalle:</small></label>
                                <input type="text" id="description"  class="form-control{{ $errors->has('description') ? ' is-invalid' : '' }}" name="description" value="" placeholder="Detalle" required autofocus>
                                @if ($errors->has('description'))
                                    <span class="invalid-feedback" role="alert">
                                        <strong>{{ $errors->first('description') }}</strong>
                                    </span>
                                @endif --}}

                                <label for="description"><small>Detalle:</small></label>
                                <textarea type="text" id="description"  class="form-control{{ $errors->has('description') ? ' is-invalid' : '' }}" name="description" value="" placeholder="Detalle" required autofocus></textarea>
                                @if ($errors->has('description'))
                                    <span class="invalid-feedback" role="alert">
                                        <strong>{{ $errors->first('description') }}</strong>
                                    </span>
                                @endif
                                
                                <label for="id_salon"><small>Salón:</small></label>
                                    
                                <select class="mt-3" name="id_salon" id="id_salon" required>
                                    @if ($errors->has('id_salon'))
                                        <span class="invalid-feedback" role="alert">
                                            <strong>{{ $errors->first('id_salon') }}</strong>
                                        </span>
                                    @endif    
                                    <option value="">Selecciona un salon</option>
                                    @if (count($salones) >= 1)     
                                        @foreach ($salones as $salon)
                                            <option value="{{ $salon->id }}">{{ $salon->name }}</option>
                                        @endforeach
                                    @endif
                                </select>
                                

                            <button type="submit" class="btn btn-primary btn-block my-2">Enviar</button>

                        </div>
                    </div>
                </div>
            </form>

        </div>




    </div>
</div>




















@endsection

@section('scripts')
    
@endsection