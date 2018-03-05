import Vue from "vue";
import App from "./App.vue";
import VueRouter from "vue-router";
import { ROUTES } from "./routes";

import VueResource from "vue-resource";


require("../node_modules/bootstrap/dist/css/bootstrap.min.css");
require("../node_modules/bootstrap/dist/js/bootstrap.min.js");
require("../node_modules/jquery/dist/jquery.slim.js");

global.jQuery = require("../node_modules/jquery/dist/jquery.slim.js");
var $ = global.jQuery;
window.$ = $;

Vue.use(VueRouter);
Vue.use(VueResource);
Vue.http.options.root = "http://localhost:8081/";

Vue.http.interceptors.push(function(request) {

  document.getElementById('loading').classList.add('containerLoading')
  return function(response) {
    document.getElementById('loading').classList.remove('containerLoading')


  };
});


const ROUTER = new VueRouter({
  routes: ROUTES,
  mode: "history"
});

Vue.config.productionTip = false;

new Vue({
  router: ROUTER,
  render: h => h(App)
}).$mount("#app");
