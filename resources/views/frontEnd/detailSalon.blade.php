@extends('layouts.master')

@section('content')

<h1>Salón <small>{{ $salon->name }}</small></h1>
<div class="container pt-3">
    <div class="row">
        <div class="card mb-3">
            <div class="card-header">
                {{-- <i class="fas fa-user"></i> --}}
                {{ $salon->name }}
            </div>
            <div class="card-body">
                <div class="table-responsive col-10 mb-3">
                    <p>{{ $salon->description }}</p>
                    {{-- <a class="btn btn-primary" href="{{ url('/user/date/' . $salon->id) }}">Seleccionar fecha</a> --}}
                </div>
                <div class="col-10">
                    <div class="carousel slide table-responsive" id="principal-carousel" data-ride="carousel">
                        {{-- <ol class="carousel-indicators">
                            <li data-target="#principal-carousel" data-slide-to="0" class="active"></li>
                            <li data-target="#principal-carousel" data-slide-to="1"></li>
                            <li data-target="#principal-carousel" data-slide-to="2"></li>
                            <li data-target="#principal-carousel" data-slide-to="3"></li>
                            <li data-target="#principal-carousel" data-slide-to="4"></li>
                            <li data-target="#principal-carousel" data-slide-to="5"></li>
                            <li data-target="#principal-carousel" data-slide-to="6"></li>
                        </ol> --}}
                        <div class="carousel-inner">
                            <div class="carousel-item active">
                                <img src="https://picsum.photos/1100/400?image=1078" alt="">
                            </div>   
                            <div class="carousel-item">
                                <img src="https://picsum.photos/1100/400?image=1076" alt="">
                            </div>
                            <div class="carousel-item">
                                <img src="https://picsum.photos/1100/400?image=1072" alt="">
                            </div>    
                            <div class="carousel-item">
                                <img src="https://picsum.photos/1100/400?image=1077" alt="">
                            </div>   
                            <div class="carousel-item">
                                <img src="https://picsum.photos/1100/400?image=1075" alt="">
                            </div>
                            <div class="carousel-item">
                                <img src="https://picsum.photos/1100/400?image=1073" alt="">
                            </div>                
                        </div>
                        <a href="#principal-carousel" class="carousel-control-prev" data-slide="prev">
                            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                            <span class="sr-only">Anterior</span><!-- para dispositivos de lectura-->
                        </a>
                        <a href="#principal-carousel" class="carousel-control-next" data-slide="next">
                            <span class="carousel-control-next-icon" aria-hidden="true"></span>
                            <span class="sr-only">Anterior</span><!-- para dispositivos de lectura-->
                        </a>
                    </div>
                </div>
                
                <div class="col-10">
                    <label for="localizacion">Geolocalización del salón:</label>
                
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

                <div class="row mt-3">
                    @if(count($paquetes) >=1)
                        
                        @foreach($paquetes as $paquete)
            
                            <div class="col-4 col-md-5 mx-2 my-2">
                                <div class="card text-muted o-hidden h-100">
                                    <div class="card-body">
                                            <a href="{{ url('/user/getpaquete/' . $paquete->id) }}" class="text-dark">
                                            <img src="http://lorempixel.com/800/531/sports/{{ $paquete->id }}/" class="card-img-top img-fluid" alt="">
                                            </a>  
                                        <div class="mr-5">
                                            <h3> 
                                                <a href="{{ url('/user/getpaquete/' . $paquete->id) }}" class="text-dark">
                                                    {{ $paquete->name }}
                                                </a>
                                            </h3>    
                                        </div>
                                        <div class="mr-5">${{ $paquete->price }}.00</div>
                                        {{-- <div class="mr-5">{{ $salon->description }}</div> --}}
                                    </div>
                                    {{-- <a class="btn btn-primary" href="{{ url('/user/getpaquete/' . $paquete->id) }}">Seleccionar</a> --}}
                                    
                                    <a class="card-footer text-muted clearfix small z-1" href="{{ url('/user/getpaquete/' . $paquete->id) }}">
                                    <span class="float-left">Ver paquete {{ $paquete->name}}</span>
                                    <span class="float-right">
                                        <i class="fas fa-angle-right"></i>
                                    </span>
                                    </a>
                                </div>
                            </div>
                            
                        @endforeach
                    @else 
                        <p>
                            No hay paquetes registrados para este salón
                        </p>
                            
                    @endif

                    {{ $paquetes->links() }}
            
                </div>
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
      draggable: false,
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