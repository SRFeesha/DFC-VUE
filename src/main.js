// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from "vue";
import App from "./App";
import store from "./store/store.js";
import VueMq from "vue-mq";
import router from "./router/router";
import VueRouter from "vue-router";
import firebase from "firebase";

Vue.use(VueRouter);

// responsive breakpoint
Vue.use(VueMq, {
  breakpoints: {
    mobile: 360,
    tablet: 768,
    desktop: Infinity
  }
});

var firebaseConfig = {
  apiKey: "AIzaSyDZBEZIGxD6-HZFF7EATX1iSB7vwmFfOQg",
  authDomain: "dfc-vue.firebaseapp.com",
  databaseURL: "https://dfc-vue.firebaseio.com",
  projectId: "dfc-vue",
  storageBucket: "",
  messagingSenderId: "392522122490",
  appId: "1:392522122490:web:b1c3738b12a4b076"
};

firebase.initializeApp(firebaseConfig);
export const db = firebase.firestore();

Vue.config.productionTip = false;

/* eslint-disable no-new */
new Vue({
  router: router,
  store: store,
  el: "#app",
  components: { App },
  template: "<App/>"
});
