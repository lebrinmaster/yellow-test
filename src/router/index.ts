import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router';

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'Jogs',
    component: () => import('../views/Jogs.vue'),
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
    /*beforeEnter(to, from, next) {
      if(localStorage.getItem('token') !== null) {
        localStorage.removeItem("token")
        next("/login");
      } else {
        next("/login");
      }
    }*/
  },
  {
    path: '/info',
    name: 'Info',
    component: () => import('../views/Info.vue'),
    beforeEnter(to, from, next) {
      if(localStorage.getItem('token') !== null) {
        next();
      } else {
        next("/login");
      }
    }
  },
  {
    path: '/contact-us',
    name: 'Contact-us',
    component: () => import('../views/ContactUs.vue'),
    beforeEnter(to, from, next) {
      if(localStorage.getItem('token') !== null) {
        next();
      } else {
        next("/login");
      }
    }
  },
  
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
});
router.afterEach((to, from) => {
  if(to.name === "Login") {
    localStorage.removeItem("token");
  }
})

export default router
