@extends('layouts.master')

@section('style')

<style>
    
    @media (min-width: 768px){
        .sidebar .nav-item .nav-link span {
            font-size: inherit;
            display: inline;
        }
        .navbar{
            border-radius: 0px!important;
            margin-bottom: 0px!important;
            min-height: 48px!important;
            padding: 0em!important;
        }
    }

    footer.sticky-footer .copyright {
    font-size: inherit;
    }

    
    
    </style>    

@endsection

@section('content')

<link href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.6/css/bootstrap.min.css" rel="stylesheet">
    {{-- <link href="https://cdnjs.cloudflare.com/ajax/libs/bootstrap-datetimepicker/4.17.37/css/bootstrap-datetimepicker.min.css" rel="stylesheet"> --}}

    {{-- vista "getDate" --}}

    {{-- <div class="container"> --}}
        {{-- <div class="row">
            <div class='col-md-6'>
                <div class="form-group">
                    <div class='input-group date'>
                        <p>Selecciona fecha y hora</p>
                    </div>
                    <div class='input-group date' id='datetimepicker1'>
                        <input type='text' class="form-control" />
                        <span class="input-group-addon"> --}}
                            {{-- <span class="glyphicon glyphicon-calendar"></span> --}}
                            {{-- <span class="fa fa-calendar"></span>
                        </span>
                    </div>
                </div>
            </div>

            
        </div> --}}
    {{-- </div> --}}


        
{{-- <h1>Salón <small>:D</small></h1> --}}
<div class="container pt-3">
    <div class="row">
        <div class="card mb-3">
            <div class="card-header">
                {{-- <i class="fas fa-user"></i> --}}
                {{-- <label for="paquete">Paquete {{ $paquete->id }}</label> --}}
                <label for="paquete">Paquete {{ $paquete->name }}</label>
            </div>
            <div class="card-body">
                
                <form action="{{ url('/user/getdate/' . $paquete->id) }}" method="post">

                    <div class='col-md-12'>
                        <div class="form-group">

                            <form action="{{ url('/user/getdate/') . $paquete->id }}" method="post">
                                @csrf
                                
                                <div class='input-group date'>
                                    <label for="localizacion">Seleccione fecha:</label>
                                </div>
                                <div class='mb-3 input-group date' id='date1'>
                                    <input name="date" type='text' class="form-control" />
                                    <span class="input-group-addon"><span class="fa fa-calendar"></span></span>
                                    @if ($errors->has('date'))
                                        <span class="invalid-feedback" role="alert">
                                        <strong>{{ $errors->first('date') }}</strong>
                                        </span>
                                    @endif
                                </div>

                                <hr>

                                <div class='input-group date'>
                                    <label for="time">Seleccione hora para su evento:</label>
                                </div>
                                <div class='input-group date' id='hour1'>
                                    <input name="time" type='text' class="form-control" />
                                    <span class="input-group-addon">
                                        <span class="fa fa-clock"></span>
                                    </span>
                                    @if ($errors->has('time'))
                                        <span class="invalid-feedback" role="alert">
                                        <strong>{{ $errors->first('time') }}</strong>
                                        </span>
                                    @endif

                                </div>
                            <input type="hidden" id="id_salon"  class="form-control{{ $errors->has('id_salon') ? ' is-invalid' : '' }}"     name="id_salon" value="{{ $paquete->id_salon }}" placeholder="" required autofocus>
                                @if ($errors->has('id_salon'))
                                    <span class="invalid-feedback" role="alert">
                                        <strong>{{ $errors->first('id_salon') }}</strong>
                                    </span>
                                @endif

                                <hr>

                                <button class="btn btn-primary" type="submit">Enviar</button>

                            </form>

                        </div>
                    </div>


                </form>

                
            </div>
        </div>
    </div>
</div>

@endsection

@section('scripts')

    <script type="text/javascript">
        // Date
        $(function () {
            $('#date1').datetimepicker({
                // format: 'l'
                format: 'YYYY-MM-DD',
                disabledDates: [
                    @foreach ($ocupieds as $oc)
                        '{{ $oc->date }}',
                    @endforeach                    
                ]
            });
        });

        // Hour
        $(function () {
                $('#hour1').datetimepicker({
                    format: 'LT'
                });
            });
    </script>

@endsection





{{-- <!DOCTYPE html>
<html>
<head>
  <title>Laravel Bootstrap Timepicker</title>
  <link href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.6/css/bootstrap.min.css" rel="stylesheet"> --}}

  {{-- <script src="http://ajax.googleapis.com/ajax/libs/jquery/1.9.1/jquery.js"></script>
  <script type="text/javascript" src="https://cdnjs.cloudflare.com/ajax/libs/moment.js/2.9.0/moment.min.js"></script> --}}

  {{-- <link href="https://cdnjs.cloudflare.com/ajax/libs/bootstrap-datetimepicker/4.17.37/css/bootstrap-datetimepicker.min.css" rel="stylesheet">
  <script src="https://cdnjs.cloudflare.com/ajax/libs/bootstrap-datetimepicker/4.17.37/js/bootstrap-datetimepicker.min.js"></script>
</head>
<body>
    <div class="container">
        <div class="row">
            <div class='col-sm-6'>
                <div class="form-group">
                    <div class='input-group date'>
                        <p>Selecciona fecha y hora</p>
                    </div>
                    <div class='input-group date' id='datetimepicker1'>
                        <input type='text' class="form-control" />
                        <span class="input-group-addon">
                            <span class="glyphicon glyphicon-calendar"></span>
                        </span>
                    </div>
                </div>
            </div>
            <script src="http://ajax.googleapis.com/ajax/libs/jquery/1.9.1/jquery.js"></script>
            <script type="text/javascript" src="https://cdnjs.cloudflare.com/ajax/libs/moment.js/2.9.0/moment.min.js"></script>
            <script src="https://cdnjs.cloudflare.com/ajax/libs/bootstrap-datetimepicker/4.17.37/js/bootstrap-datetimepicker.min.js"></script>
            <script type="text/javascript">
                $(function () {
                    $('#datetimepicker1').datetimepicker();
                });
            </script>
        </div>
    </div>
</body>
</html> --}}