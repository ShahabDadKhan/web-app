import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import Navigation from "../components/Navigation.vue";
import Menu from "../views/Menu.vue";
import Admin from "../views/Admin.vue";
import AddNewItems from "../components/Admin/AddNewItems.vue";
import Login from "../components/Admin/Login.vue";
import Order from "../views/Order.vue";

import firebase from "firebase";
import "firebase/firestore";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/navigation",
    name: "Navigation",
    component: Navigation,
  },
  {
    path: "/menu",
    name: "Menu",
    component: Menu,
  },
  {
    path: "/admin",
    name: "Admin",
    component: Admin,
    meta: {
      requiresAuth: true,
    },
  },
  {
    path: "/addNew",
    name: "AddNew",
    component: AddNewItems,
    meta: {
      requiresAuth: true,
    },
  },
  {
    path: "/login",
    name: "Login",
    component: Login,
  },
  {
    path: "/order",
    name: "Order",
    component: Order,
    meta: {
      requiresAuth: true,
    },
  },
  {
    path: "*",
    redirect: "/",
  },

  {
    path: "/about",
    name: "About",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/About.vue"),
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

router.beforeEach((to, from, next) => {
  const currentUser = firebase.auth().currentUser;
  const requiresAuth = to.matched.some((record) => record.meta.requiresAuth);

  if (requiresAuth && !currentUser) next("login");
  else next();
});

export default router;
