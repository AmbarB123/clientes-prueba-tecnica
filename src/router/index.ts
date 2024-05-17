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
      path: '/login',
      name: 'login',
      component: () => import('../views/LoginView.vue')
    },
    {
      path: '/admin',
      name: 'admin',
      component: () => import('../views/admin/AdminLayout.vue'),
      children:[
        {
          path: '/admin/clientes',
          name: 'admin-clientes',
          component: () => import('../views/admin/AdminView.vue'),
        },
        {
          path: '/admin/nuevo',
          name: 'admin-nuevo-cliente',
          component: () => import('../views/admin/NewClient.vue')
        },
        {
          path: '/admin/editar/:id',
          name: 'admin-editar-cliente',
          component: () => import('../views/admin/EditClient.vue')
        },
        
      ]
    },
  ]
})

export default router
