import { createRouter, createWebHistory } from 'vue-router'
import portifolio from '../views/inicioView.vue'
import projeto from '../views/projetoView.vue'
import contato from '../views/contatoView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: portifolio,
    },
    {
      path: '/projeto',
      name: 'projeto',
      component: projeto,
    },
    {
      path: '/contato',
      name: 'contato',
      component: contato
    },
  ],
})

export default router
