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
    path: '/dynamic-route-matching/:userId',
    name: 'DynamicRouteMatching',
    component: DynamicRouteMatching,
    props:true//値を渡すことを許可
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router