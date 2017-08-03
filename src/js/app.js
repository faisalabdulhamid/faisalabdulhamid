import VueRouter from "vue-router";
import router from './router';

require('./bootstrap');

window.Vue = require('vue');

Vue.use(VueRouter);


const app = new Vue({
    el: '#app',
    //component: {DataDiri},
    router

});
