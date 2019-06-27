// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from "vue";
import App from "./App";
import { store } from "./store/store";
import VueRouter from "vue-router";
Vue.use(VueRouter);

Vue.config.productionTip = false;

const routes = [
  { path: "/", component: require("./components/FreaksBoard.vue").default },
  { path: "/board", component: require("./components/Board.vue") }
  // { path: '/purchase', component: require('./page-2.vue').default }
];

const router = new VueRouter({
  routes: routes,
  mode: "history"
});

/* eslint-disable no-new */
new Vue({
  router: router,
  store: store,
  el: "#app",
  components: { App },
  template: "<App/>"
});
