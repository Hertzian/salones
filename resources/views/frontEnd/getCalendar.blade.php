@extends('layouts.master')

@section('style')

@endsection

@section('content')

<h3>Calendario de eventos</h3>

{!! $calendar->calendar() !!}

@endsection

@section('scripts')

{!! $calendar->script() !!}

@endsection