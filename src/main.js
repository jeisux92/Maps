import Vue from "vue";
import App from "./App.vue";
import VueRouter from "vue-router";
import { ROUTES } from "./routes";

require("../node_modules/bootstrap/dist/css/bootstrap.min.css");
require("../node_modules/bootstrap/dist/js/bootstrap.min.js");

global.jQuery = require("../node_modules/jquery/dist/jquery.slim.js");
var $ = global.jQuery;
window.$ = $;

Vue.use(VueRouter);

const ROUTER = new VueRouter({
  routes: ROUTES,
  mode: "history"
});

Vue.config.productionTip = false;

new Vue({
  router: ROUTER,
  render: h => h(App)
}).$mount("#app");
