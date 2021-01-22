import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import axios from 'axios';

export const Vue = createApp(App);
export const testToken = `Bearer eb8cdf9e61521369da24ab55f0095f5da870881990d9b75daefef50333178daf`

axios.defaults.baseURL = "https://jogtracker.herokuapp.com/api/";

axios.interceptors.request.use(
  async config => {
      config.headers = { 
          'Authorization': testToken,
          'Accept': 'application/json',
      }
    return config;
  },
  error => {
    Promise.reject(error)
});



Vue.use(store).use(router).mount('#app')
