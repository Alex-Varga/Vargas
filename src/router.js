import { createRouter, createWebHistory } from "vue-router"
import Index from '@/views/Index.vue'

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      name: 'Index',
      component: Index
    },
    {
      path: '/product/:id',
      name: 'Product',
      component: () => import('@/views/Product.vue')
    },
    {
      path: '/cart',
      name: 'Cart',
      component: () => import('@/views/Cart.vue')
    },
    {
      path: '/user',
      name: 'User',
      component: () => import('@/views/User.vue')
    },
    {
      path: '/plant',
      name: 'Plant',
      component: () => import('@/views/Plant.vue')
    },
    {
      path: '/ceramics',
      name: 'Ceramics',
      component: () => import('@/views/Ceramics.vue')
    },
    {
      path: '/tables',
      name: 'Tables',
      component: () => import('@/views/Tables.vue')
    },
    {
      path: '/chairs',
      name: 'Chairs',
      component: () => import('@/views/Chairs.vue')
    },
    {
      path: '/crockery',
      name: 'Crockery',
      component: () => import('@/views/Crockery.vue')
    },
    {
      path: '/tableware',
      name: 'Tableware',
      component: () => import('@/views/Tableware.vue')
    },
    {
      path: '/cutlery',
      name: 'Cutlery',
      component: () => import('@/views/Cutlery.vue')
    }
  ]
})

export default router;