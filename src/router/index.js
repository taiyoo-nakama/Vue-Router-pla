import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import DynamicRouteMatching from '../views/DynamicRouteMatching.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
  },
  {
    path: '/dynamic-route-matching',
    name: 'DynamicRouteMatching',
    component: DynamicRouteMatching,
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router