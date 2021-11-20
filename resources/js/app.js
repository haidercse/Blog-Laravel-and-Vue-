require('./bootstrap');

import routes from "./routes";
window.Vue = require('vue').default;

import VueRouter from 'vue-router'

Vue.use(VueRouter)

const router = new VueRouter({
    routes, // short for `routes: routes`
    mode: 'history'
})

Vue.component('example-component', require('./components/ExampleComponent.vue').default);



const app = new Vue({
    router,
    el: '#app',
});