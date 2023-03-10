import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    component: () => import('../views/index1.vue')
  },
  {
    path: '/index-1',
    name: 'Index-1',
    component: () => import('../views/index1.vue')
  },
  {
    path: '/index-2',
    name: 'Index-2',
    component: () => import('../views/index2.vue')
  },
  {
    path: '/index-3',
    name: 'Index-3',
    component: () => import('../views/index3.vue')
  },
  {
    path: '/index-4',
    name: 'Index-4',
    component: () => import('../views/index4.vue')
  },
  {
    path: '/index-5',
    name: 'Index-5',
    component: () => import('../views/index5.vue')
  },
  {
    path: '/index-6',
    name: 'Index-6',
    component: () => import('../views/index6.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
