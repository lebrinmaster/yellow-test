import { createStore } from 'vuex';
import auth from './modules/auth';
import jogs from './modules/jogs';

export default createStore({
  modules: {
    authModule: auth,
    jogsModule: jogs,
  },
})
