import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router';

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'Jogs',
    component: () => import('../views/Jogs.vue'),
    meta: { authRequired: true },
    beforeEnter(to, from, next) {
      if(localStorage.getItem('token') !== null) {
        next();
      } else {
        next("/login");
      }
    }
  },
  {
    path: '/login',
    name: 'Login',
    component: () => import('../views/Login.vue'),
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
});


export default router
