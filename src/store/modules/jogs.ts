import axios from 'axios';

const jogsModule = {
  state: {
    jogs: null,
  },
  mutations: {
    setJogs(state: any, jogs: any) {
        console.log(state);
      state.jogs = jogs;
    },
  },
  actions: {
    getjogs({ commit }: any) {
      axios.get("v1/data/sync").then(res => commit("setJogs", res.data.response.jogs));
    },
  },
  getters: {
    allJogs: (state: any) => {
        return state.jogs;
    },
  }
};

export default jogsModule;