@extends('layouts.masterAdmin')

@section('content')

<div class="container">
    <div class="row">
        <div class="card mb-3">
            <div class="card-header">
                <i class="fas fa-user"></i>
                <a href="{{ url('/admin/newsalon') }}" class="btn btn-primary">Nuevo salón</a>
            </div>

            <div class="col-12 mt-3 mb-3">
                {{-- <div class="card border-secondary"> --}}
                    {{-- <div class="card-body"> --}}
                        <h1>Editar salón</h1>
                        <form method="POST" action="{{ url('admin/updatesalon/' . $salon->id) }}">
                        @csrf
                            <h3 class="card-title">
                                Salón {{ $salon->name }}
                            </h3>

                            <div class="form-label-group my-3">
                            <input type="text" id="name"  class="form-control{{ $errors->has('name') ? ' is-invalid' : '' }}" name="name" value="{{ $salon->name }}" placeholder="Nombre del salón" required autofocus>
                            <label for="name">Nombre(s):</label>
                                @if ($errors->has('name'))
                                    <span class="invalid-feedback" role="alert">
                                        <strong>{{ $errors->first('name') }}</strong>
                                    </span>
                                @endif
                            </div>

                            <div class="form-label-group my-3">
                            <textarea type="text" id="descriptionC"  class="form-control{{ $errors->has('descriptionC') ? ' is-invalid' : '' }}" name="descriptionC" placeholder="Descripción corta:" required autofocus>{{ $salon->descriptionC }}</textarea>
                            {{-- <label for="descriptionC">Descripcion corta:</label> --}}
                                @if ($errors->has('descriptionC'))
                                    <span class="invalid-feedback" role="alert">
                                        <strong>{{ $errors->first('descriptionC') }}</strong>
                                    </span>
                                @endif
                            </div>
                            
                            <div class="form-label-group my-3">
                                <textarea type="text" id="description"  class="form-control{{ $errors->has('description') ? ' is-invalid' : '' }}" name="description" placeholder="Descripción" required autofocus>{{ $salon->description }}</textarea>
                                {{-- <label for="description">Descripción:</label> --}}
                                @if ($errors->has('description'))
                                    <span class="invalid-feedback" role="alert">
                                        <strong>{{ $errors->first('description') }}</strong>
                                    </span>
                                @endif
                            </div>

                            <div class="col-md-12 py-1">
                                <label for="color">Color:</label>
                                {{-- <div class="form-label-group"> --}}
                                <input type="color" id="color" value="{{ $salon->color }}" class="{{ $errors->has('color') ? ' is-invalid' : '' }}" name="color" required autofocus>
                                @if ($errors->has('color'))
                                    <span class="invalid-feedback" role="alert">
                                        <strong>{{ $errors->first('color') }}</strong>
                                    </span>
                                @endif
                                {{-- </div> --}}
                            </div>

                            <div class="form-label-group">
                            {{-- <input type="text" id="state"  class="form-control{{ $errors->has('state') ? ' is-invalid' : '' }}" name="state" value="{{ $salon->state }}" placeholder="Nombre" required autofocus> --}}
                                <label for="state">Estado:</label>
                                    @if ($errors->has('state'))
                                        <span class="invalid-feedback" role="alert">
                                            <strong>{{ $errors->first('state') }}</strong>
                                        </span>
                                    @endif
                                    <br>
                                {{-- @if ($errors->has('state'))
                                    <span class="invalid-feedback" role="alert">
                                        <strong>{{ $errors->first('state') }}</strong>
                                    </span>
                                @endif --}}
                                
                                <select class="mt-3 form-control{{ $errors->has('state') ? ' is-invalid' : '' }}" name="state" id="state">                                
                                    <option value="">Selecciona un estado</option>
                                    <option value="{{ $salon->state }}" selected>{{ $salon->state }}</option>
                                    <option value="Aguascalientes">Aguascalientes</option>
                                    <option value="Baja California">Baja California</option>
                                    <option value="Baja California Sur">Baja California Sur</option>
                                    <option value="Campeche">Campeche</option>
                                    <option value="Coahuila">Coahuila</option>
                                    <option value="Colima">Colima</option>
                                    <option value="Chiapas">Chiapas</option>
                                    <option value="Chihuahua">Chihuahua</option>
                                    <option value="Distrito Federal">Distrito Federal</option>
                                    <option value="Durango">Durango</option>
                                    <option value="Guanajuato">Guanajuato</option>
                                    <option value="Guerrero">Guerrero</option>
                                    <option value="Hidalgo">Hidalgo</option>
                                    <option value="Jalisco">Jalisco</option>
                                    <option value="Mexico">México</option>
                                    <option value="Michoacan">Michoacán</option>
                                    <option value="Morelos">Morelos</option>
                                    <option value="Nuevo Leon">Nuevo León</option>
                                    <option value="Oaxaca">Oaxaca</option>
                                    <option value="Puebla">Puebla</option>
                                    <option value="Queretaro">Queretaro</option>
                                    <option value="Quintana Roo">Quintana Roo</option>
                                    <option value="San Luis Potosi">San Luis Potosí</option>
                                    <option value="Sinaloa">Sinaloa</option>
                                    <option value="Sonora">Sonora</option>
                                    <option value="Tabasco">Tabasco</option>
                                    <option value="Tamaulipas">Tamaulipas</option>
                                    <option value="Tlaxcala">Tlaxcala</option>
                                    <option value="Veracruz">Veracruz</option>
                                    <option value="Yucatan">Yucatán</option>
                                    <option value="Zacatecas">Zacatecas</option>
                                </select>
                                

                            </div>

                            <div class="col-md-12">
                                <label for="localizacion">Selecciona su localización:</label>
                            
                                <div id="map"></div>
                                
                                
                            </div>
                            <input type="hidden" id="lng"  class="form-control{{ $errors->has('lng') ? ' is-invalid' : '' }}" name="lng" value="{{ $salon->lng }}" placeholder="" required autofocus>
                            @if ($errors->has('lng'))
                                <span class="invalid-feedback" role="alert">
                                    <strong>{{ $errors->first('lng') }}</strong>
                                </span>
                            @endif
                            <input type="hidden" id="lat"  class="form-control{{ $errors->has('lat') ? ' is-invalid' : '' }}" name="lat" value="{{ $salon->lat }}" placeholder="" required autofocus>
                            @if ($errors->has('lat'))
                                <span class="invalid-feedback" role="alert">
                                    <strong>{{ $errors->first('lat') }}</strong>
                                </span>
                            @endif

                            <button type="submit" class="btn btn-primary btn-block my-3">Editar</button>  
                        </form>

                        <h3>Paquetes de este salón:</h3>
                        <a class="btn btn-success mb-3" href="{{ url('/admin/newpaquetes/' . $salon->id) }}">Nuevo paquete para este salón</a>

                        <div class="row">
                        @if (count($paquetes) >= 1)

                            @foreach ($paquetes as $paquete)
                                <div class="col-6 mb-3">
                                    <div class="card text-muted o-hidden h-100">
                                        <div class="card-body">
                                            <a href="{{ url('/admin/detailsalon/' . $paquete->id) }}" class="text-dark">
                                                <img src="http://lorempixel.com/800/531/sports/{{$paquete->id}}/" class="card-img-top img-fluid" alt="">
                                            </a>  
                                            <div class="mr-5">
                                                <h3> 
                                                    <a href="{{ url('/admin/updatepaquete/' . $paquete->id) }}" class="text-dark">
                                                        {{ $paquete->name }}
                                                    </a>
                                                </h3>    
                                            </div>
                                            <div class="mr-5">{{ $paquete->descriptionC }}</div>
                                            <div class="mr-5">{{ $paquete->description }}</div>
                                        </div>
                                        <a class="card-footer text-muted clearfix small z-1" href="{{ url('/admin/updatepaquete/' . $paquete->id) }}">
                                        <span class="float-left">Ver detalles</span>
                                        <span class="float-right">
                                            <i class="fas fa-angle-right"></i>
                                        </span>
                                        </a>
                                    </div>
                                </div>
                            @endforeach

                        @else
                            <p>No hay paquetes registrados para este salón</p>
                        @endif
                        </div>
                        
                        {{ $paquetes->links() }}
                        
                    </div>
                {{-- </div> --}}
            </div>

        </div>
    </div>
</div>

@endsection

@section('scripts')

<script type="text/javascript">
  
    var marker;          //variable del marcador
    var coords = {};    //coordenadas obtenidas con la geolocalización
    
    //Funcion principal
    initMap = function ()
    {        
      //usamos la API para geolocalizar el usuario
      navigator.geolocation.getCurrentPosition(
      function (position){
          coords =  {
          lng: position.coords.longitude,
          lat: position.coords.latitude
          };
          setMapa(coords);  //pasamos las coordenadas al metodo para crear el mapa        
      },function(error){console.log(error);
      });        
    }
    
    function setMapa (coords)
    {
        var y = document.getElementById("lng").value;
        // console.log(y);

        var x = document.getElementById("lat").value;
        // console.log(x);
    
      //Se crea una nueva instancia del objeto mapa
      var map = new google.maps.Map(document.getElementById('map'),
      {
      zoom: 13,
      center:new google.maps.LatLng(x,y),
      });
    
      //Creamos el marcador en el mapa con sus propiedades
      //para nuestro obetivo tenemos que poner el atributo draggable en true
      //position pondremos las mismas coordenas que obtuvimos en la geolocalización
      marker = new google.maps.Marker({
      map: map,
      draggable: true,
      animation: google.maps.Animation.DROP,
      position: new google.maps.LatLng(x,y),        
      });
      //agregamos un evento al marcador junto con la funcion callback al igual que el evento dragend que indica
      //cuando el usuario a soltado el marcador
      marker.addListener('click', toggleBounce);
    
      marker.addListener( 'dragend', function (event)
      {
      //escribimos las coordenadas de la posicion actual del marcador dentro del input #coords
      var z = document.getElementsByClassName("coords").value = this.getPosition().lat()+","+ this.getPosition().lng();
      console.log(z);
    
      var y = document.getElementById("lng").value = this.getPosition().lng();
      console.log(y);
    
      var x = document.getElementById("lat").value = this.getPosition().lat();
      console.log(x);
    
      });
    }
    
    //callback al hacer clic en el marcador lo que hace es quitar y poner la animacion BOUNCE
    function toggleBounce() {
      if (marker.getAnimation() !== null) {
      marker.setAnimation(null);
      } else {
      marker.setAnimation(google.maps.Animation.BOUNCE);
      }
    }        
    // Carga de la libreria de google maps        
    </script>
    <script async defer src="https://maps.googleapis.com/maps/api/js?callback=initMap"></script>

@endsection
