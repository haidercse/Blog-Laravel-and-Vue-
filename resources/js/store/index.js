import Vue from "vue";

import Vuex from "vuex";

import Toasted from 'vue-toasted';

Vue.use(Toasted, {
    duration: 3000,

})
Vue.use(Vuex);

import categories from "../store/modules/categories";
export default new Vuex.Store({
    modules: {
        categories,
    }
})