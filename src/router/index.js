import { createRouter, createWebHistory } from 'vue-router'
import { auth } from '../firebase'

const routes = [
  {
    path: '/',
    name: 'dashboard',
    component: () => import('../views/DashboardView.vue'),
    meta: {
      requiresAuth: true
    }
  },
  {
    path: '/login',
    name: 'login',
    component: () => import('../views/LoginView.vue')
  },
  {
    path: '/licitacoes',
    name: 'licitacao',
    component: () => import('../views/LicitacaoView.vue'),
    meta: {
      requiresAuth: true
    }
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

router.beforeEach((to, from, next) => {
  if(to.path === '/login' && auth.currentUser){
    next('/')
    return;
  }

  // if(to.matched.some(record => record.meta.requiresAuth) & !auth.currentUser){
  //   next('/login');
  //   return;
  // }
  
  if(to.matched.requiresAuth && !auth.currentUser){
    next('/login');
    return;
  }

  next();
})

export default router
