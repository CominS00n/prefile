import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/home',
      name: 'home',
      component: () => import('../views/HomeView.vue'),
    },
    {
      path: '/test',
      name: 'test',
      redirect: "/test/blog",
      children: [
        {
          path: 'blog',
          name: 'blog',
          component: () => import('../views/BlogData.vue')
        },
        {
          path: 'convert',
          name: 'convert',
          component: () => import('../views/ConvertDate.vue')
        }
      ],
      meta: {
        breadcrumb: 'Test',
        requiresAuth: true
      }
    },
  ]
})

export default router
