import { createRouter, createWebHashHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import ContactView from '../views/ContactView.vue'
import ProductsView from '../views/ProductsView.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView,
    meta: {
      cache: true // enable caching for this route
    }
  },
  {
    path: '/about',
    name: 'about',
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue'),
    meta: {
      cache: false // disable caching for this route
    }
  },
  {
    path: '/contact',
    name: 'contact',
    component: ContactView,
    meta: {
      cache: true // enable caching for this route
    }
  },
  {
    path: '/products',
    name: 'products',
    component: ProductsView,
    meta: {
      cache: true // enable caching for this route
    }
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

router.beforeEach((to, from, next) => {
  if (to.meta.cache) {
    const cachedData = sessionStorage.getItem(to.path)
    if (cachedData) {
      to.params.cachedData = JSON.parse(cachedData)
    }
  }
  next()
})

router.afterEach((to) => {
  if (to.meta.cache && !to.params.cachedData) {
    sessionStorage.setItem(to.path, JSON.stringify(to.matched[0].instances.default.$data))
  }
})

export default router
