import Vue from "vue";
import Router from "vue-router";
import userRouter from "./modules/user";
import auth from './middleweres/auth'
// import middlewarePipeline from './middlewarePipeline'
// Containers
const TheContainer = () => import("@/components/container");

// Views
const Home = () => import("@/views/Home");
const Login = () => import("@/views/Login");
const Page404 = () => import("@/views/404");

Vue.use(Router);

export default new Router({
  mode: "hash", // https://router.vuejs.org/api/#mode
  linkActiveClass: "active",
  scrollBehavior: () => ({ y: 0 }),
  routes: configRoutes()
});

function configRoutes() {
  return [
    {
      path: "/",
      redirect: "/login",
      meta: { middleware: [auth] },
      name: "Home",
      component: TheContainer,
      children: [
        {
          path: "dashboard",
          name: "Dashboard",
          component: Home
        },
        userRouter
      ]
    },
    {
      name: "Login",
      path: "/login",
      component: Login,
      meta: { middleware: [auth] }
    },
    {
      name: "404",
      path: "/404",
      component: Page404
    }
  ];
}
