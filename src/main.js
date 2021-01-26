import Vue from 'vue'
import App from './App.vue'
import 'bulma/css/bulma.css';
import router from "@/router/router";
import VueRouter from "vue-router";
import axios from "axios";
import store from "./store";
import BootstrapVue from 'bootstrap-vue/dist/bootstrap-vue.esm';


import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap-vue/dist/bootstrap-vue.css';

Vue.config.productionTip = false
axios.defaults.baseURL = 'http://localhost:5000/api';
Vue.use(VueRouter, BootstrapVue);

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')