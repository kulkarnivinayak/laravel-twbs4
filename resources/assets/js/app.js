
/**
 * First, we will load all of this project's Javascript utilities and other
 * dependencies. Then, we will be ready to develop a robust and powerful
 * application frontend using useful Laravel and JavaScript libraries.
 */

require('./vendor');

window.NProgress = require('nprogress');
NProgress.configure({ showSpinner: false, trickleSpeed: 1000, easing: 'ease', speed: 700, minimum: 0.3 });

/**
 * Next, we will create a fresh Vue application instance and attach it to
 * the page. Then, you may begin adding components to this application
 * or customize the JavaScript scaffolding to fit your unique needs.
 */

// Vue.component('home', require('./components/home.vue')); // for registering global components only!

// Toast Notification - https://github.com/shakee93/vue-toasted
import Toasted from 'vue-toasted';
Vue.use(Toasted, {position: 'bottom-right', duration: 3000});


import router from './routes';

// Load the component where id = 'app'
window.onload = () => {
  if (document.getElementById("app")) {
  	var app = new Vue({
  	    el: '#app',
        router
  	});
  }
}