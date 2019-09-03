@extends('layouts.masterAdmin')

@section('content')





<div class="container">
    <div class="row">
        <div class="col-12 mx-3">
            
            <h1>Nuevo salón</h1>
            <form method="POST" action="{{ url('admin/newsalon') }}">
                @csrf
                <h3 class="card-title">
                    Nuevo salón
                </h3>

                <div class="form-label-group my-3">
                <input type="text" id="name"  class="form-control{{ $errors->has('name') ? ' is-invalid' : '' }}" name="name" value="" placeholder="Nombre del salón" required autofocus>
                <label for="name">Nombre(s):</label>
                    @if ($errors->has('name'))
                        <span class="invalid-feedback" role="alert">
                            <strong>{{ $errors->first('name') }}</strong>
                        </span>
                    @endif
                </div>

                <div class="form-label-group my-3">
                <textarea type="text" id="descriptionC"  class="form-control{{ $errors->has('descriptionC') ? ' is-invalid' : '' }}" name="descriptionC" placeholder="Descripción corta:" required autofocus></textarea>
                {{-- <label for="descriptionC">Descripcion corta:</label> --}}
                    @if ($errors->has('descriptionC'))
                        <span class="invalid-feedback" role="alert">
                            <strong>{{ $errors->first('descriptionC') }}</strong>
                        </span>
                    @endif
                </div>
                
                <div class="form-label-group my-3">
                    <textarea type="text" id="description"  class="form-control{{ $errors->has('description') ? ' is-invalid' : '' }}" name="description" placeholder="Descripción" required autofocus></textarea>
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
                    <input type="color" id="color" value="" class="{{ $errors->has('color') ? ' is-invalid' : '' }}" name="color" required autofocus>
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
                <input type="hidden" id="lng"  class="form-control{{ $errors->has('lng') ? ' is-invalid' : '' }}" name="lng" value="" placeholder="" required autofocus>
                @if ($errors->has('lng'))
                    <span class="invalid-feedback" role="alert">
                        <strong>{{ $errors->first('lng') }}</strong>
                    </span>
                @endif
                <input type="hidden" id="lat"  class="form-control{{ $errors->has('lat') ? ' is-invalid' : '' }}" name="lat" value="" placeholder="" required autofocus>
                @if ($errors->has('lat'))
                    <span class="invalid-feedback" role="alert">
                        <strong>{{ $errors->first('lat') }}</strong>
                    </span>
                @endif

                <button type="submit" class="btn btn-primary btn-block my-3">Nuevo salón</button>  
            </form>

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
  //Se crea una nueva instancia del objeto mapa
  var map = new google.maps.Map(document.getElementById('map'),
  {
  zoom: 13,
  center:new google.maps.LatLng(coords.lat,coords.lng),
  });

  //Creamos el marcador en el mapa con sus propiedades
  //para nuestro obetivo tenemos que poner el atributo draggable en true
  //position pondremos las mismas coordenas que obtuvimos en la geolocalización
  marker = new google.maps.Marker({
  map: map,
  draggable: true,
  animation: google.maps.Animation.DROP,
  position: new google.maps.LatLng(coords.lat,coords.lng),        
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
