@extends('layouts.masterAdmin')

@section('content')

<h3>Calendario de eventos</h3>

<a class="btn btn-primary" href="{{ url('/admin/newevent') }}">Nuevo evento</a>
<hr>
{!! $calendar->calendar() !!}

@endsection

@section('scripts')

{!! $calendar->script() !!}

@endsection