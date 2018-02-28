import Vue from 'vue'
import App from './App.vue'

require('../node_modules/bootstrap/dist/css/bootstrap.min.css')
require('../node_modules/bootstrap/dist/js/bootstrap.min.js')


global.jQuery = require('../node_modules/jquery/dist/jquery.slim.js');
var $ = global.jQuery;
window.$ = $;

Vue.config.productionTip = false

new Vue({
  render: h => h(App)
}).$mount('#app')
