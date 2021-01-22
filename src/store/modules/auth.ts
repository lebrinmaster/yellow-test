import axios from 'axios';
import {testToken} from '@/main';
import router from '@/router';

const authModule = {
  state: {
      token: localStorage.getItem('token') || '',
      user: null,
      isAuthenticated: null,
  },
  mutations: {
    logout(state: any, user: any) {
      state.user = user;
      state.isAuthenticated = false;
    },
    setToken(state: any, token: string) {
      state.token = token;
      localStorage.setItem("token", testToken);
    },
    checkAuth(state: any) {
      state.isAuthenticated = !!localStorage.getItem("token") !== null;
    }
    
  },
  actions: {
    logIn({ commit }: any) {
      axios.get("v1/auth/user").then(res => commit("setUser", res.data.response))
      .then(() => commit("setToken", testToken))
      .then(() => commit("checkAuth"))
      .finally(() => router.push({name: "Jogs"}));
    },
    logOut({ commit }: any) {
      const user = null;
      localStorage.removeItem("token");
      commit("logout", user);
    },
  },
  getters: {
    getAuth: (state: any) => state.isAuthenticated,
  }
};

export default authModule;