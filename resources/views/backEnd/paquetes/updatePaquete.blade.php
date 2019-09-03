@extends('layouts.masterAdmin')

@section('content')

<h1>
Propiedades del paquete <small>{{ $paquete->name}}</small>
</h1>    

<div class="container">
    <div class="row">
        <div class="card mb-5">
            <div class="card-header">
                <i class="fas fa-user"></i>
                <a href="{{ url('/admin/newpaquete') }}" class="btn btn-primary">Nuevo paquete</a>
            </div>

            <div class="col-8 mt-3 mb-5">
                <div class="card border-secondary">
                    <img src="http://lorempixel.com/800/531/sports/{{ $paquete->id }}/" class="card-img-top img-fluid" alt="">
                    <div class="card-body">

                        <form method="POST" action="{{ url('/admin/updatepaquete/' . $paquete->id) }}">
                        @csrf
                            <h3 class="card-title">

                                <label for="name"><small>Nombre paquete:</small></label>
                                <input type="text" id="name"  class="form-control{{ $errors->has('name') ? ' is-invalid' : '' }}" name="name" value="{{ $paquete->name }}" placeholder="Nombre paquete" required autofocus>
                                @if ($errors->has('name'))
                                    <span class="invalid-feedback" role="alert">
                                        <strong>{{ $errors->first('name') }}</strong>
                                    </span>
                                @endif


                            </h3>

                            <label for="price"><small>Precio:</small></label>
                            <input type="text" id="price"  class="form-control{{ $errors->has('price') ? ' is-invalid' : '' }}" name="price" value="{{ $paquete->price }}" placeholder="Precio" required autofocus>
                            @if ($errors->has('price'))
                                <span class="invalid-feedback" role="alert">
                                    <strong>{{ $errors->first('price') }}</strong>
                                </span>
                            @endif

                            <label for="descriptionC"><small>Descripción corta:</small></label>
                            <textarea type="text" id="descriptionC"  class="form-control{{ $errors->has('descriptionC') ? ' is-invalid' : '' }}" name="descriptionC" placeholder="Descripción corta" required autofocus>{{ $paquete->descriptionC }}</textarea>
                            @if ($errors->has('descriptionC'))
                                <span class="invalid-feedback" role="alert">
                                    <strong>{{ $errors->first('descriptionC') }}</strong>
                                </span>
                            @endif

                            <label for="description"><small>Detalle:</small></label>
                            <textarea type="text" id="description"  class="mb-3 form-control{{ $errors->has('description') ? ' is-invalid' : '' }}" name="description" placeholder="Detalle" required autofocus>{{ $paquete->description }}</textarea>
                            @if ($errors->has('description'))
                                <span class="invalid-feedback" role="alert">
                                    <strong>{{ $errors->first('description') }}</strong>
                                </span>
                            @endif

                            <label for="id_salon"><small>Salón:</small></label>
                            <select name="id_salon" id="id_salon" class="form-control{{ $errors->has('id_salon') ? ' is-invalid' : '' }}">
                                    <option value="">Selecciona un salón</option>
                                @if (count($salones) >= 1)
                                    @foreach ($salones as $salon)
                                        <option value="{{ $salon->id }}" selected>{{ $salon->name }}</option>
                                    @endforeach
                                @endif
                            </select>
                            @if ($errors->has('id_salon'))
                                <span class="invalid-feedback" role="alert">
                                    <strong>{{ $errors->first('id_salon') }}</strong>
                                </span>
                            @endif
                            
                            <button type="submit" class="btn btn-primary btn-block my-3">Editar</button>
                            
                        </form>
                    </div>
                </div>
            </div>

        </div>




    </div>
</div>




















@endsection

@section('scripts')
    
@endsection