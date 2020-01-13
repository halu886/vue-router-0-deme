// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from "vue";
import App from "./App";
import Route from "./Route.vue";
import VueRouter from "vue-router";

Vue.config.productionTip = false;

const routes = [{ path: "/en/*", component: Route, name: "route__1" }];

const router = new VueRouter({
  routes
});

Vue.use(VueRouter);

/* eslint-disable no-new */
new Vue({
  router,
  components: {
    App
  },
  template: "<App/>",
  el: "#app"
});
