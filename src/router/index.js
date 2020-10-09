import Vue from "vue";
import Router from "vue-router";
import store from '../store'
import userRouter from "./modules/user";
import auth from './middleweres/auth'
import middlewarePipeline from './middlewarePipeline'
// Containers
const TheContainer = () => import("@/components/container");

// Views
const Home = () => import("@/views/Home");
const Login = () => import("@/views/Login");
const Page404 = () => import("@/views/404");

Vue.use(Router);

const createRouter = () => new Router({
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
const router = createRouter()

router.beforeEach((to, from, next) => {
  const middlewares = []
  to.matched.filter(route => route.meta.middleware).forEach(route => {
    if (Array.isArray(route.meta.middleware)) {
      route.meta.middleware.forEach(middleware => middlewares.push(middleware))
    } else {
      middlewares.push(route.meta.middleware)
    }
  })

  if (middlewares.length === 0) {
    return next()
  }
  const context = {
    to,
    from,
    next,
    store
  }
  return middlewares[0]({
    ...context,
    next: middlewarePipeline(context, middlewares, 1)
  })
})
// Detail see: https://github.com/vuejs/vue-router/issues/1234#issuecomment-357941465
export function resetRouter() {
  const newRouter = createRouter()
  router.matcher = newRouter.matcher // reset router
}

export default router