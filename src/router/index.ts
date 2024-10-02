import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/about',
      name: 'about',
      component: () => import('../views/AboutView.vue')
    },
    {
      path: '/contact',
      name: 'contact',
      component: () => import('../views/ContactView.vue')
    },
    {
      path: '/deposit',
      name: 'deposit',
      component: () => import('../views/DepositView.vue')
    },
    {
      path: '/aktivitas',
      name: 'aktivitas',
      component: () => import('../views/ActivityView.vue')
    },
    {
      path: '/login',
      name: 'login',
      component: () => import('../auth/LoginPage.vue')
    },
    {
      path: '/daftar',
      name: 'daftar',
      component: () => import('../auth/RegisterPage.vue')
    }
  ]
})

export default router
