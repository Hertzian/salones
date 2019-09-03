@extends('layouts.master')

@section('content')
{{-- 
<div class="container">
    <div class="row">
        <div class="col-12">
            <h2>Salones disponibles para {{ $state }}</h2>
        </div>
    @foreach($salones as $salon)
        <div class="col-xl-3 col-sm-6 mb-3">
            <div class="card text-muted o-hidden h-100">
                <div class="card-body">
                    <a href="{{ url('/user/detailsalon/' . $salon->id) }}" class="text-dark">
                        <img src="http://lorempixel.com/800/531/sports/{{$salon->id}}/" class="card-img-top img-fluid" alt="">
                        </a>  
                        <div class="mr-5">
                            <h3> 
                                <a href="{{ url('/user/detailsalon/' . $salon->id) }}" class="text-dark">
                                {{ $salon->name }}
                            </a>
                        </h3>    
                    </div>
                    <div class="mr-5">{{ $salon->descriptionC }}</div>
                    <div class="mr-5">{{ $salon->description }}</div>
                </div>
                <a class="card-footer text-muted clearfix small z-1" href="{{ url('/user/detailsalon/' . $salon->id) }}">
                <span class="float-left">Ver detalles</span>
                <span class="float-right">
                    <i class="fas fa-angle-right"></i>
                </span>
                </a>
            </div>
        </div>

    @endforeach
    @else 
    <div class="col-12">
        <h1>
            No hay salones registrados
        </h1>
    </div>
    @endif
    </div>
</div> --}}
    

<div class="container">
    <div class="row">
        <div class="col-12">
            <h2>Salones disponibles para {{ $state }}</h2>
        </div>
        @if (count($salones) >= 1)        
            @foreach($salones as $salon)
                <div class="col-xl-6 col-sm-6 mb-3">
                    <div class="card text-muted o-hidden h-100">
                        <div class="card-body">
                            <a href="{{ url('/user/detailsalon/' . $salon->id) }}" class="text-dark">
                                <img src="http://lorempixel.com/800/531/sports/{{$salon->id}}/" class="card-img-top img-fluid" alt="">
                                </a>  
                                <div class="mr-5">
                                    <h3> 
                                        <a href="{{ url('/user/detailsalon/' . $salon->id) }}" class="text-dark">
                                        {{ $salon->name }}
                                    </a>
                                </h3>    
                            </div>
                            <div class="mr-5">{{ $salon->descriptionC }}</div>
                            <div class="mr-5">{{ $salon->description }}</div>
                        </div>
                        <div id="map"></div>
                        <a class="card-footer text-muted clearfix small z-1" href="{{ url('/user/detailsalon/' . $salon->id) }}">
                        <span class="float-left">Ver detalles</span>
                        <span class="float-right">
                            <i class="fas fa-angle-right"></i>
                        </span>
                        </a>

                        <input id="lng" type="hidden" class="form-control{{ $errors->has('lng') ? ' is-invalid' : '' }}" name="lng" value="{{ $salon->lng }}" required readonly>
                        @if ($errors->has('lng'))
                        <span class="invalid-feedback text-danger" role="alert">
                            <strong>{{ $errors->first('lng')}}</strong>
                        </span>                  
                        @endif

                        <input id="lat" type="hidden" class="form-control{{ $errors->has('lat') ? ' is-invalid' : '' }}" name="lat" value="{{ $salon->lat }}" required readonly>
                        @if ($errors->has('lat'))
                        <span class="invalid-feedback text-danger" role="alert">
                            <strong>{{ $errors->first('lat')}}</strong>
                        </span>                  
                        @endif

                    </div>
                </div>

            @endforeach
        @else 
            <div class="col-12">
                <h4>
                    No hay salones registrados para {{ $state}}
                </h4>
            </div>    
        @endif
    
        {{ $salones->links() }}
        
    </div>
</div>
    
@endsection

@section('scripts')
    <script>
  $('.datepicker').datepicker({
    format: "dd-mm-yyyy",
    language: "es",
    daysOfWeekDisabled: "0,6",
    autoclose: true
  });

  $('.timepicker').timepicker({
    timeFormat: 'h:mm p',
    interval: 15,
    minTime: '10',
    maxTime: '6:00pm',
    startTime: '10:00',
    dynamic: false,
    dropdown: true,
    scrollbar: true
});
</script>

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
