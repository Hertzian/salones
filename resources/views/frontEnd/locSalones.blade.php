@extends('layouts.master')

@section('content')
{{-- {{ $salones }} --}}
<div class="container">    
    <div class="row mt-3">

        <div class="col-12">
            <h1>Selecciona tu ubicación</h1>
        </div>
        
        {{-- {{ $estados->state }} --}}
        
        <div class="col-12">
            <form action="{{ url('user/getstate/' ) }}" method="post">
                <p>Estados donde contamos con salones de eventos:</p>
            

                {{-- @csrf --}}
                {{-- <select name="" id="state">
                    <option value="Selecciona">Selecciona una opción</option> --}}
                    @if (count($estados) >= 1)                        
                        <div class="list-group">                            
                            @foreach ($estados as $estado)                            
                            <a class="list-group-item list-group-item-action list-group-item-dark" href="{{ url('user/getstate/' . $estado->state ) }}" >{{ $estado->state }}</a>
                            {{-- <link rel="stylesheet" href="{{ url('user/getstate/' . $estado->state ) }}"> --}}
                            {{-- <option value="{{ $estado->state }}">{{ $estado->state }}</option> --}}
                            {{-- <a href="{{ url('user/getstate/' . $estado->state ) }}" class="btn btn-primary">{{ $estado->state }}</a> --}}
                            @endforeach
                        </div>
                    @else
                        <p>No hay salones registrados</p>
                    @endif
                {{-- </select> --}}
                


                {{-- {{ $salones }} --}}
                
                
                
                <div class="col-md-6 mt-2">
                    <div id="mapa">
                        {{-- <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15010284.73901891!2d-111.65385550493417!3d23.293242644770658!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x84043a3b88685353%3A0xed64b4be6b099811!2zTcOpeGljbw!5e0!3m2!1ses-419!2smx!4v1546884986763" width="650" height="450" frameborder="0" style="border:0" allowfullscreen> --}}
                    </div>
                </div>
                
                {{-- <a href="#" class="btn btn-primary">Seleccionar</a> --}}
                {{-- <button type="submit"class="btn btn-primary">Selección</button> --}}
            
            </form>
        </div>
    </div>
</div>

@endsection

@section('scripts')

<script>
    
    $(document).ready(function(){    
        $('#state').change(function(){
            if($('#state').val() == 'Selecciona'){
                $('#mapa').html('<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15010284.73901891!2d-111.65385550493417!3d23.293242644770658!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x84043a3b88685353%3A0xed64b4be6b099811!2zTcOpeGljbw!5e0!3m2!1ses-419!2smx!4v1546884986763" width="650" height="450" frameborder="0" style="border:0" allowfullscreen>');}
            if($('#state').val() == 'Aguascalientes'){
                $('#mapa').html('<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d118472.60376270006!2d-102.36133995822752!3d21.885719942388175!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8429ec143ae4d9fb%3A0x4016978679c5220!2sAguascalientes%2C+Ags.!5e0!3m2!1ses-419!2smx!4v1546880318814" width="650" height="450" frameborder="0" style="border:0" allowfullscreen>');}
            if($('#state').val() == 'Baja California'){
                $('#mapa').html('<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3526020.7912452105!2d-117.77513767247694!3d30.340157684145275!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80d7700ca877ddd3%3A0xfca4fd9f0318de8e!2sBaja+California!5e0!3m2!1ses-419!2smx!4v1546880490406" width="650" height="450" frameborder="0" style="border:0" allowfullscreen>');}
            if($('#state').val() == 'Baja California Sur'){
                $('#mapa').html('<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3690064.062988373!2d-114.56291674461244!3d25.418926508543542!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x86afd339b5a21ec9%3A0x71dfb33aa9a75918!2sBaja+California+Sur!5e0!3m2!1ses-419!2smx!4v1546880587359" width="650" height="450" frameborder="0" style="border:0" allowfullscreen>');}
            if($('#state').val() == 'Campeche'){
                $('#mapa').html('<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1927663.89524491!2d-91.91644055524438!3d19.327171164488274!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x85e8c3424bc7e215%3A0xe68bf78c7baafcc3!2sCampeche!5e0!3m2!1ses-419!2smx!4v1546880753004" width="650" height="450" frameborder="0" style="border:0" allowfullscreen>');}
            if($('#state').val() == 'Coahuila'){
                $('#mapa').html('<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3633988.946751076!2d-104.14592097504536!3d27.19347748184617!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x868872bda68e1e29%3A0x64009ad714cd7a39!2sCoahuila+de+Zaragoza!5e0!3m2!1ses-419!2smx!4v1546880776335" width="650" height="450" frameborder="0" style="border:0" allowfullscreen>');}
            if($('#state').val() == 'Colima'){
                $('#mapa').html('<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7731911.485423586!2d-113.62134911474644!3d18.871663174881153!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8425320dfe7025eb%3A0x2c1e40971f57690a!2sColima!5e0!3m2!1ses-419!2smx!4v1546880802780" width="650" height="450" frameborder="0" style="border:0" allowfullscreen>');}
            if($('#state').val() == 'Chiapas'){
                $('#mapa').html('<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3922417.050213439!2d-94.49950437137!3d16.246874230067867!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x858d44b49757ce67%3A0xcf0033824619d615!2sChiapas!5e0!3m2!1ses-419!2smx!4v1546880827351" width="650" height="450" frameborder="0" style="border:0" allowfullscreen>');}
            if($('#state').val() == 'Chihuahua'){
                $('#mapa').html('<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7174305.559475691!2d-110.68630435369816!3d28.59741015453144!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8696752f8591a409%3A0x9b83e25340a77e07!2sChihuahua!5e0!3m2!1ses-419!2smx!4v1546880854698" width="650" height="450" frameborder="0" style="border:0" allowfullscreen>');}
            if($('#state').val() == 'Distrito Federal'){
                $('#mapa').html('<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d240864.16417598852!2d-99.28370055474345!3d19.390679966413476!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x85ce0026db097507%3A0x54061076265ee841!2sCiudad+de+M%C3%A9xico%2C+CDMX!5e0!3m2!1ses-419!2smx!4v1546880877158" width="650" height="450" frameborder="0" style="border:0" allowfullscreen>');}
            if($('#state').val() == 'Durango'){
                $('#mapa').html('<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3715393.9766123807!2d-107.0859025280893!3d24.578342552763605!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8690a9c1af734549%3A0x297de241abe308b2!2sDurango!5e0!3m2!1ses-419!2smx!4v1546880924142" width="650" height="450" frameborder="0" style="border:0" allowfullscreen>');}
            if($('#state').val() == 'Guanajuato'){
                $('#mapa').html('<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1908731.1841237997!2d-102.00558706412397!3d20.872429372846742!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x842b5b8f509b7f7f%3A0xe78ea61981be43a0!2sGuanajuato!5e0!3m2!1ses-419!2smx!4v1546880950524" width="650" height="450" frameborder="0" style="border:0" allowfullscreen>');}
            if($('#state').val() == 'Guerrero'){
                $('#mapa').html('<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1947179.110134518!2d-101.21725648606325!3d17.59873614715582!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x85cb6558f327203f%3A0x3137229b4277cb3a!2sGuerrero!5e0!3m2!1ses-419!2smx!4v1546880975508" width="650" height="450" frameborder="0" style="border:0" allowfullscreen>');}
            if($('#state').val() == 'Hidalgo'){
                $('#mapa').html('<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1913489.9207365788!2d-100.04365757375591!3d20.4945397799857!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x85d10a0422ce2fe7%3A0x8152c5bf7940781b!2sHidalgo!5e0!3m2!1ses-419!2smx!4v1546881004256" width="650" height="450" frameborder="0" style="border:0" allowfullscreen>');}
            if($('#state').val() == 'Jalisco'){
                $('#mapa').html('<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3818705.548758665!2d-105.847624814759!3d20.823441422573158!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x841f40ebd4624e6f%3A0xa0feb0a35a1b4a53!2sJalisco!5e0!3m2!1ses-419!2smx!4v1546881041515" width="650" height="450" frameborder="0" style="border:0" allowfullscreen>');}
            if($('#state').val() == 'Mexico'){
                $('#mapa').html('<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1927713.3773786381!2d-100.72640988506507!3d19.322977291730066!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x85cd8992c0eb0a3b%3A0xc2fef9be9fc5a857!2sEstado+de+M%C3%A9xico!5e0!3m2!1ses-419!2smx!4v1546881085614" width="650" height="450" frameborder="0" style="border:0" allowfullscreen>');}
            if($('#state').val() == 'Michoacan'){
                $('#mapa').html('<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1929729.718383029!2d-103.02201225044243!3d19.151330376467282!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x842a5f3e1eb35cb7%3A0x3bc7650cf34be0d4!2sMichoac%C3%A1n!5e0!3m2!1ses-419!2smx!4v1546883294035" width="650" height="450" frameborder="0" style="border:0" allowfullscreen>');}
            if($('#state').val() == 'Morelos'){
                $('#mapa').html('<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d483646.17220658466!2d-99.34388120122932!3d18.731829023871345!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x85cddfae25f6fe47%3A0x975f8225a169dd0f!2sMorelos!5e0!3m2!1ses-419!2smx!4v1546883326051" width="650" height="450" frameborder="0" style="border:0" allowfullscreen>');}
            if($('#state').val() == 'Nayarit'){
                $('#mapa').html('<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1896167.7202197863!2d-106.32572307583135!3d21.84007203637085!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8420a89ce63edb47%3A0xc2c8f5a28694d239!2sNayarit!5e0!3m2!1ses-419!2smx!4v1546883771014" width="650" height="450" frameborder="0" style="border:0" allowfullscreen>');}
            if($('#state').val() == 'Nuevo Leon'){
                $('#mapa').html('<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3688688.3406652925!2d-102.05861522964155!3d25.46383709864012!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x86629584a2a5b05d%3A0x701df442c36cbbc6!2sNuevo+Le%C3%B3n!5e0!3m2!1ses-419!2smx!4v1546883799640" width="650" height="450" frameborder="0" style="border:0" allowfullscreen>');}
            if($('#state').val() == 'Oaxaca'){
                $('#mapa').html('<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d122042.35062016113!2d-96.80577242693357!3d17.08128608000221!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x85c72249df26d9b1%3A0xac88a77657dffc3b!2sOaxaca%2C+Oax.!5e0!3m2!1ses-419!2smx!4v1546883825188" width="650" height="450" frameborder="0" style="border:0" allowfullscreen>');}
            if($('#state').val() == 'Puebla'){
                $('#mapa').html('<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1927429.7441712215!2d-99.01901946413534!3d19.347004849130332!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x85cf8cb0ddc0a765%3A0xe25cae5bd60220ad!2sPuebla!5e0!3m2!1ses-419!2smx!4v1546883850511" width="650" height="450" frameborder="0" style="border:0" allowfullscreen>');}
            if($('#state').val() == 'Queretaro'){
                $('#mapa').html('<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1909157.2509221241!2d-100.9412276200606!3d20.838862621149!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x85d344d16144705f%3A0x9146b1c4a44869bb!2sQuer%C3%A9taro!5e0!3m2!1ses-419!2smx!4v1546883885488" width="650" height="450" frameborder="0" style="border:0" allowfullscreen>');}
            if($('#state').val() == 'Quintana Roo'){
                $('#mapa').html('<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3845587.196510146!2d-90.2481789342942!3d19.735761149834424!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8f4ffcf0eac32695%3A0xc4f0c52a484c8d9c!2sQuintana+Roo!5e0!3m2!1ses-419!2smx!4v1546883984573" width="650" height="450" frameborder="0" style="border:0" allowfullscreen>');}
            if($('#state').val() == 'San Luis Potosi'){
                $('#mapa').html('<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d236566.34537198854!2d-101.09615717512841!3d22.112659825704185!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x842aa20005acfb79%3A0xed2ee29afe18257!2sSan+Luis%2C+S.L.P.!5e0!3m2!1ses-419!2smx!4v1546884011454" width="650" height="450" frameborder="0" style="border:0" allowfullscreen>');}
            if($('#state').val() == 'Sinaloa'){
                $('#mapa').html('<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3710644.1772876587!2d-109.66443687948369!3d24.738002792030635!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x869f539428a74959%3A0x9c7bdf760dbe5fef!2sSinaloa!5e0!3m2!1ses-419!2smx!4v1546884035522" width="650" height="450" frameborder="0" style="border:0" allowfullscreen>');}
            if($('#state').val() == 'Sonora'){
                $('#mapa').html('<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7124409.167415816!2d-116.23389331960875!3d29.32002247867777!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x86982969e74dd20f%3A0xcd56ff1afcbbe374!2sSonora!5e0!3m2!1ses-419!2smx!4v1546884059855" width="650" height="450" frameborder="0" style="border:0" allowfullscreen>');}
            if($('#state').val() == 'Tabasco'){
                $('#mapa').html('<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1943381.1493223603!2d-93.68018269021366!3d17.947711366473698!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x85edfb5f8f78cb4f%3A0xd426cb11d9866b44!2sTabasco!5e0!3m2!1ses-419!2smx!4v1546884097089" width="650" height="450" frameborder="0" style="border:0" allowfullscreen>');}
            if($('#state').val() == 'Tamaulipas'){
                $('#mapa').html('<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3705007.3515327326!2d-100.8890585367311!3d24.926235677162968!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x867953aedb1e2459%3A0x33859f5a35e81925!2sTamaulipas!5e0!3m2!1ses-419!2smx!4v1546884121647" width="650" height="450" frameborder="0" style="border:0" allowfullscreen>');}
            if($('#state').val() == 'Tlaxcala'){
                $('#mapa').html('<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d481651.04110666993!2d-98.44711942545996!3d19.416779833045286!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x85cfd93f1c006113%3A0x38bae25ad47cbde0!2sTlaxcala!5e0!3m2!1ses-419!2smx!4v1546884152798" width="650" height="450" frameborder="0" style="border:0" allowfullscreen>');}
            if($('#state').val() == 'Veracruz'){
                $('#mapa').html('<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3844271.197707189!2d-98.38943651978525!3d19.790341956024513!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x85c355d0af54526d%3A0x2d777f0a6710b9b3!2sVeracruz!5e0!3m2!1ses-419!2smx!4v1546884176681" width="650" height="450" frameborder="0" style="border:0" allowfullscreen>');}
            if($('#state').val() == 'Yucatan'){
                $('#mapa').html('<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3812478.438794017!2d-92.1743648980903!3d21.067730057059958!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8f540ff8aad604ed%3A0xcccc217531083d0a!2zWXVjYXTDoW4!5e0!3m2!1ses-419!2smx!4v1546884199503" width="650" height="450" frameborder="0" style="border:0" allowfullscreen>');}
            if($('#state').val() == 'Zacatecas'){
                $('#mapa').html('<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3758901.9279544717!2d-104.79248548808809!3d23.06769519533794!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8681d1a07ec9fe6f%3A0x1c1f2dfd5e256d98!2sZacatecas!5e0!3m2!1ses-419!2smx!4v1546884220306" width="650" height="450" frameborder="0" style="border:0" allowfullscreen>');}
            
        });
    });
</script>

@endsection