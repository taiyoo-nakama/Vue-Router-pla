import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import DynamicRouteMatching from "../views/DynamicRouteMatching.vue";
// import UserList from '../views/UserList.vue'
import subPage from '../views/subPage.vue'


Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
  },
  {
    path: '/sub-page',
    name: 'SubPage',
    component: subPage
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

router.beforeEach(function(to,from, next) {
  if (to.query.redirect) {
    next('/')
  } else {
    next()
  }
})

export default router