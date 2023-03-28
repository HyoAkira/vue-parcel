import { createRouter, createWebHistory } from 'vue-router'


const router = createRouter({
  history: createWebHistory("/"),
  routes: [
    {
      path: '/',
      name: 'home',
      component: () => import('../pages/homepage.vue')
    }
  ]
})

export default router
