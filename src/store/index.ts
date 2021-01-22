import { createStore } from 'vuex';
import auth from './modules/auth';
import common from './modules/common';
import jogs from './modules/jogs';


export default createStore({
  modules: {
    authModule: auth,
    jogsModule: jogs,
    commonModule: common,
  },
})
