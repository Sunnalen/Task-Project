import { createRouter, createWebHistory } from 'vue-router'
import Main from '@/pages/Main.vue'


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/list',
      name: 'list',
      component: () => import('@/pages/List.vue')

    },

    {
      path: '/main',
      name: 'main',
      component: Main
    }
  ]
})
router.beforeEach

export default router
