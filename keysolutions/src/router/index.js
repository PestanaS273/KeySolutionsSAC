import { createRouter, createWebHashHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import ContactView from '../views/ContactView.vue'
import ProductsView from '../views/ProductsView.vue'
import TarjetasBanca from '../views/TarjetasBanca.vue'
import TarjetasEmpresa from '../views/TarjetasEmpresa.vue'
import RollosView from '../views/RollosView.vue'
import SobresView from '../views/SobresView.vue'

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
  },
  {
    path: '/tarjetas-empresa',
    name: 'tarjetas-empresa',
    component: TarjetasEmpresa,
    meta: {
      cache: true // enable caching for this route
    }
  },

  {
    path: '/tarjetas-banca',
    name: 'tarjetas-banca',
    component: TarjetasBanca,
    meta: {
      cache: true // enable caching for this route
    }
  },
  {
    path: '/rollos',
    name: 'rollos',
    component: RollosView,
    meta: {
      cache: true // enable caching for this route
    }
  },
  {
    path: '/sobres-preimpresos',
    name: 'sobres-preimpresos',
    component: SobresView,
    meta: {
      cache: true // enable caching for this route
    }
  },
]

const router = createRouter({
  history: createWebHashHistory(),
  routes,
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition
    } else {
      return { top: 0 }
    }
  },
})


router.beforeEach((to, from, next) => {
  if (to.meta.cache) {
    const cachedData = sessionStorage.getItem(to.path)
    if (cachedData) {
      to.params.cachedData = JSON.parse(cachedData)
    }
  }
  next();
});


router.afterEach((to) => {
  if (to.meta.cache && !to.params.cachedData) {
    const dataInstance = to.matched[0]?.instances?.default;
    if (dataInstance) {
      sessionStorage.setItem(to.path, JSON.stringify(dataInstance.$data))
    }
  }
})

export default router
