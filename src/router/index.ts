import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path     : '/',
      name     : 'home',
      component: () => import('@/counter/pages/CounterPageOne.vue')
    },
    {
      path     : '/counter-2',
      name     : 'counter-2',
      component: () => import('@/counter/pages/CounterSetUpPage.vue')
    },
    {
      path     : '/clients',
      name     : 'clients',
      component: () => import('@/clients/layout/ClientsLayout.vue'),
      redirect : { name: 'list' },
      children : [
        {
          path     : 'list',
          name     : 'list',
          component: () => import('@/clients/pages/ListPage.vue')
        },
        {
          path     : '/client/:id',
          name     : 'client-id',
          component: () => import('@/clients/pages/ClientPage.vue')
        },
      ]
    }
  ]
})

export default router
