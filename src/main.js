import Vue from "vue";
import App from "./App.vue";

require("./sass/components/_global.scss");

Vue.config.productionTip = false;

new Vue({
  render: (h) => h(App),
}).$mount("#app");
