import Vue from 'vue'
import Router from 'vue-router'
import userRoute from './user'

// Containers
const TheContainer = () => import('@/components/container')

// Views
const Home = () => import('@/views/Home')

Vue.use(Router)

export default new Router({
  mode: 'hash', // https://router.vuejs.org/api/#mode
  linkActiveClass: 'active',
  scrollBehavior: () => ({ y: 0 }),
  routes: configRoutes()
})

function configRoutes () {
  return [
    {
      path: '/',
      redirect: '/dashboard',
      name: 'Home',
      component: TheContainer,
      children: [
        {
          path: 'dashboard/',
          name: 'Dashboard',
          component: Home,
        },
        userRoute
      ]
    }
  ]
}