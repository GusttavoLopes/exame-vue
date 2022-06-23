import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/avaliacao',
    name: 'Avaliacao',
    component: () => import(/* webpackChunkName: "about" */ '../views/Avaliacao.vue')
  },
  {
    path: '/',
    name: 'Trabalho',
    component: () => import(/* webpackChunkName: "about" */ '../views/Trabalho.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
