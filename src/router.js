import Vue from "vue";
import Router from "vue-router";

Vue.use(Router);

export default new Router({
  mode: "history",
  base: process.env.BASE_URL,
  routes: [
    {
      path: "/",
      name: "home",
      redirect: { name: "graphql" }
    },
    {
      path: "/graphql",
      name: "graphql",
      component: () => import("./views/Graphql.vue")
    },
    {
      path: "/restful",
      name: "restful",
      component: () => import("./views/Restful.vue")
    }
  ]
});
