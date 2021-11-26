require('./bootstrap');

import routes from "./routes";


//vue import
window.Vue = require('vue').default;

//vue-router
import VueRouter from 'vue-router'

Vue.use(VueRouter)

import Toasted from 'vue-toasted';

Vue.use(Toasted, {
    duration: 3000,

})

//const router 
const router = new VueRouter({
    routes, // short for `routes: routes`
    // mode: 'history'
})
import VueSweetalert2 from 'vue-sweetalert2';


Vue.use(VueSweetalert2);
//filter use
import { filter } from './filter'

//all component is here
Vue.component('example-component', require('./components/ExampleComponent.vue').default);
Vue.component('dashboard-component', require('./components/backend/Dashboard.vue').default);



import store from "./store";

const app = new Vue({
    store,
    router,
    el: '#app',
});