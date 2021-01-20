import axios from 'axios';

const jogsModule = {
  state: {
    jogs: null,
    formattedJogs: null,
  },
  mutations: {
    setJogs(state: any, jogs: any) {
      state.jogs = jogs;
      state.formattedJogs = jogs;
    },
    setFormattedJogs(state: any, {dateFrom, dateTo}: any) {
      state.formattedJogs = state.jogs.filter((item: any) => {
        return item.date > dateFrom && item.date < dateTo;
      });
      return state.formattedJogs;
    }
  },
  actions: {
    getjogs({ commit }: any) {
      axios.get("v1/data/sync").then(res => commit("setJogs", res.data.response.jogs))
    },
  },
  getters: {
    allJogs: (state: any) => {
        return state.jogs;
    },
    formattedJogs: (state: any) => {
      return state.formattedJogs;
    }
  }
};

export default jogsModule;