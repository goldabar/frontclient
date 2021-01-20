import Vue from 'vue'
import App from './App.vue'
import 'bulma/css/bulma.css';
import router from "@/router/router";
import VueRouter from "vue-router";
import axios from "axios";


Vue.config.productionTip = false
axios.defaults.baseURL = 'https://localhost:5000/api';
Vue.use(VueRouter)

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')