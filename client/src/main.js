import Vue from 'vue'
import App from './App.vue'
import router from './router'
import 'bulma/css/bulma.css';

//Auth0 configuration
import { domain, clientId } from "../auth_config.json";

//plugin
import { Auth0Plugin } from "./auth";

//authentication plugin
Vue.use(Auth0Plugin, {
  domain,
  clientId,
  onRedirectCallback: appState => {
    router.push(
      appState && appState.targetUrl
        ? appState.targetUrl
        : window.location.pathname
    );
  }
});

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')