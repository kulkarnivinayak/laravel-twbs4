<!doctype html>
<html lang="{{ app()->getLocale() }}">
    <head>
        <meta charset="utf-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <!-- CSRF Token -->
        <meta name="csrf-token" content="{{ csrf_token() }}">

        <title>Laravel</title>

        <!-- Styles -->
        <link rel="stylesheet" href="{{ mix('assets/css/vendor.css') }}">
        <link rel="stylesheet" href="{{ mix('assets/css/app.css') }}">
        <!-- Scripts -->
        <script src="{{ mix('assets/js/manifest.js') }}"></script>
        <script src="{{ mix('assets/js/vendor.js') }}"></script>
        <script src="{{ mix('assets/js/app.js') }}"></script>
    </head>
  <body>
    <div id="app">
      <router-view></router-view>
    </div>
  </body>
</html>
