import Vue from "vue";
import App from "./App.vue";
import router from "./router";
var VueScrollTo = require('vue-scrollto');

Vue.config.productionTip = false;
Vue.use(VueScrollTo)

new Vue({
  router,
  VueScrollTo,
  render: h => h(App)
}).$mount("#app");
