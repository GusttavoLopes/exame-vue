import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    trabalho: null
  },
  mutations: {
    setTrabalho(state, trabalho) {
      state.trabalho = trabalho;
    }
  },
  modules: {}
});
