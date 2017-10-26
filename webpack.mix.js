const { mix } = require('laravel-mix');

/*
 |--------------------------------------------------------------------------
 | Mix Asset Management
 |--------------------------------------------------------------------------
 |
 | Mix provides a clean, fluent API for defining some Webpack build steps
 | for your Laravel application. By default, we are compiling the Sass
 | file for the application as well as bundling up all the JS files.
 |
 */

mix.webpackConfig({
  resolve: {
    extensions: ['.js'],
      alias: {
        jquery: 'jquery/dist/jquery.js',
        bootstrap: 'bootstrap/dist/js/bootstrap.js',
        lodash: 'lodash/lodash.js',
        moment: 'moment/moment.js',
        axios: 'axios/dist/axios.js'
    }
  }});

// Copy fonts and images to public
mix.copy('resources/assets/fonts/**/*', 'public/assets/fonts')
.copy('resources/assets/images/**/*', 'public/assets/images');


// Build vendor css
mix.sass('resources/assets/sass/vendor.sass', 'public/assets/css')
.version();

// Build application css
mix.sass('resources/assets/sass/app.sass', 'public/assets/css')
.version();

// Build manifest, vendor and app js
// Prevents Mix's automatic configuring of jQuery, so that we can set it up ourselves later
// 1. https://github.com/JeffreyWay/laravel-mix/issues/229#issuecomment-276332984
// 2. https://github.com/JeffreyWay/laravel-mix/blob/master/docs/autoloading.md
mix.js('resources/assets/js/app.js', 'public/assets/js')
.extract(['jquery', 'bootstrap', 'moment', 'lodash', 'vue', 'axios', 'nprogress'])
.autoload({ jquery: ['$', 'jQuery', 'window.jQuery'], 'popper.js/dist/umd/popper.js': ['Popper', 'window.Popper'] })
.version();
