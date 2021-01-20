import axios from 'axios';

const jogsModule = {
  state: {
    jogs: null,
    user: null,
    formattedJogs: null,
    jogsFormState: null,
    jogsForm: null,
    datePanel: null,
    jogFormConditionState: null
  },
  mutations: {
    setJogs(state: any, jogs: any) {
      console.log(jogs);
      state.jogs = jogs;
      state.formattedJogs = jogs;
    },
    setUser(state: any, user: any) {
      console.log(user);
      state.user = user;
    },
    setFormattedJogs(state: any, {dateFrom, dateTo}: any) {
      state.formattedJogs = state.jogs.filter((item: any) => {
        return item.date*1000 >= dateFrom && item.date*1000 <= dateTo;
      });
      return state.formattedJogs;
    },
    toggleJogsFormState(state: any, condition: boolean) {
      console.log(condition);
      return state.jogsFormState = condition;
    },
    setJogsForm(state: any, {distance, time, date, id}: any) {
      if(date) {
        const rawDate = new Date(date*1000);
        const day = rawDate.getDate();
        const month = rawDate.getMonth() === 11 || rawDate.getMonth() === 10 ? rawDate.getMonth() : `0${rawDate.getMonth()}`
        const year = rawDate.getFullYear();
        const formattedDate = `${year}-${month}-${day}`;
        return state.jogsForm = {distance, time, date: formattedDate, id};
      } else {
        return state.jogsForm = {distance, time, date, id};
      }
    }, 
    setDatePanelState(state: any, condition: boolean) {
      return state.datePanel = condition;
    },
    setJogFormCondition(state: any, condition: boolean) {
      return state.jogFormConditionState = condition;
    }
  },
  actions: {
    getJogs({ commit }: any) {
      axios.get("v1/data/sync")
      .then(res => commit("setJogs", res.data.response.jogs))
      .then(res => commit("setUser", res.data.response.users))
    },
    postNewJogItem({dispatch}: any, data: any) {
      axios.post("v1/data/jog", data).then(() => {
        dispatch("getJogs");
      })
    },
    updateJogItem({dispatch}: any, data: any) {
      axios.put("v1/data/jog", data).then(() => {
        dispatch("getJogs");
      })
    }
  },
  getters: {
    allJogs: (state: any) => {
        return state.jogs;
    },
    user: (state: any) => {
      return state.user;
    },
    formattedJogs: (state: any) => {
      return state.formattedJogs;
    },
    jogsFormState: (state: any) => {
      return state.jogsFormState;
    },
    jogsFormData: (state: any) => {
      return state.jogsForm;
    },
    datePanelState: (state: any) => {
      return state.datePanel;
    },
    jogFormCondition: (state: any) => {
      return state.jogFormConditionState
    }
  }
};

export default jogsModule;