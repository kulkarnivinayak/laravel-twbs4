// Vue Router Setup
import Vue from 'vue';
import VueRouter from 'vue-router';
Vue.use(VueRouter);

// Components that are going to be used for respective routes
import home from './components/home.vue';


let routes = [
  {
    path: '/home',
    name: 'home',
    component: home,
  }
];

export default new VueRouter({
  mode: 'history',
  routes: routes
});
