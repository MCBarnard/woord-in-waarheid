require('./bootstrap');

import Vue from "vue";
import VueRouter from "vue-router";

import router from "./Router/index.js";
import store from "./Store/index.js";
import App from "./App.vue";

Vue.use(VueRouter);

const app = new Vue({
    el: "#app",
    router,
    store,
    components: { App }
});
