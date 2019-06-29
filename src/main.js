// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from "vue";
import App from "./App";
import { store } from "./store/store";
import VueRouter from "vue-router";
import Home from "./components/Home";
import Schedule from "./components/Schedule";
import Meetup from "./components/Meetup";
import FreaksBoard from "./components/FreaksBoard";
import VueMq from "vue-mq";

Vue.use(VueMq, {
  breakpoints: {
    mobile: 360,
    tablet: 768,
    desktop: Infinity
  }
});

Vue.use(VueRouter);

Vue.config.productionTip = false;

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home
  },
  {
    path: "/schedule",
    name: "Schedule",
    component: Schedule
  },
  {
    path: "/meetup",
    name: "Meetup",
    component: Meetup
  },
  {
    path: "/freaksboard",
    name: "FreaksBoard",
    component: FreaksBoard
  }
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
