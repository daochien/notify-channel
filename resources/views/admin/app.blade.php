@extends('master', ['class' => 'left-side-menu-dark'])
@section('title', 'Dashboard')

@push('css')
    <link href="{{asset('app/assets/css/custom_app.css')}}" rel="stylesheet" type="text/css" />
@endpush

@section('content')
    <div id="app">
        <router-view></router-view>
    </div>
@endsection

@push('scripts')
    <script>window.__user__ = @json(auth()->user())</script>
    <script src="{{ asset('js/app.js') }}"></script>
@endpush

