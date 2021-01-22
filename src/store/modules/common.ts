const commonModule = {
  state: {
      isMobile: null,
      mobileMenu: false,
  },
  mutations: {
    checkWindowSize(state: any) {
        if(window.innerWidth < 768 && window.innerWidth > 320) {
            state.isMobile = true;
        } else {
            state.isMobile = false;
        }
    },
    toggleMobileMenu(state: any, condition: boolean) {
      state.mobileMenu = condition;
    },
  },
  actions: {
  },
  getters: {
    getWindowSize: (state: any) => state.isMobile,
    getMobileMenuState: (state: any) => state.mobileMenu,
  }
};

export default commonModule;