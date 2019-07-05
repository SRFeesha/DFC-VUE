// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from "vue";
import App from "./App";
import store from "./store/store.js";
import VueMq from "vue-mq";
import router from "./router/router";
import VueRouter from "vue-router";

Vue.use(VueRouter);

// responsive breakpoint
Vue.use(VueMq, {
  breakpoints: {
    mobile: 360,
    tablet: 768,
    desktop: Infinity
  }
});

Vue.config.productionTip = false;

/* eslint-disable no-new */
new Vue({
  router: router,
  store: store,
  el: "#app",
  components: { App },
  template: "<App/>"
});
