import { createRouter, createWebHashHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import ContactView from '../views/ContactView.vue'
import ProductsView from '../views/ProductsView.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  },

  {
    path: '/contact',
    name: 'contact',
    component: ContactView
  },

  {
    path: '/products',
    name: 'products',
    component: ProductsView
  },
  

]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
