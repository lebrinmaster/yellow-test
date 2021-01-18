import axios from 'axios';
import {testToken} from '@/main';

const authModule = {
  state: {
      token: localStorage.getItem('token') || '',
      user: null,
  },
  mutations: {
    setUser(state: any, user: any) {
      state.user = user;
    },
    logout(state: any, user: any) {
      state.user = user;
    },
  },
  actions: {
    logIn({ commit }: any) {
      axios.get("v1/auth/user").then(res => commit("setUser", res.data.response));
      localStorage.setItem("token", testToken);
    },
    logOut({ commit }: any) {
      const user = null;
      localStorage.setItem("token", '');
      commit("logout", user);
    },
  },
  getters: {
  }
};

export default authModule;