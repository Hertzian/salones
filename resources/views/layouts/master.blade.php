<!DOCTYPE html>
<html lang="en">

<head>

<meta charset="utf-8">
<meta http-equiv="X-UA-Compatible" content="IE=edge">
{{-- <meta name="viewport" content="width=device-width, initial-scale=1.0 user-scalable=no, maximu-scale=1.0, minimum-scale=1.0"> --}}
<meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
<meta name="description" content="">
<meta name="author" content="">
<meta name="csrf-token" content="{{ csrf_token() }}">
<title>Salones</title>
<link rel="stylesheet" href="{{ asset('css/app.css') }}">
<link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.7.2/css/all.css" integrity="sha384-fnmOCqbTlWIlj8LyTjo7mOUStjsKC4pOpQbqyi7RrhN7udi9RwhKkMHpvLbHG9Sr" crossorigin="anonymous">

@yield('style')

<style>
    #mapa{padding:50%;}
    #map{padding:50%;}
    #mapholder{padding:50%;height:50%}
</style>


<!-- Custom fonts for this template-->
{{-- <link href="vendor/fontawesome-free/css/all.min.css" rel="stylesheet" type="text/css"> --}}

<!-- Page level plugin CSS-->
{{-- <link href="vendor/datatables/dataTables.bootstrap4.css" rel="stylesheet"> --}}

<!-- Custom styles for this template-->
{{-- <link href="css/sb-admin.css" rel="stylesheet"> --}}

</head>

<body id="page-top">

    @include('partials.navbar')    

    <div id="wrapper">

        @include('partials.sidebar')

        <div id="content-wrapper">
        
            <div class="container-fluid">

            @include('partials.message')

                @yield('content')

            </div>

            @include('partials.footer')

        

        <a class="scroll-to-top rounded" href="#page-top">
            <i class="fas fa-angle-up"></i>
        </a>

    
    <script src="{{ asset('js/app.js') }}"></script>
    
    @yield('scripts')
    
</body>
</html>