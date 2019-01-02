import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    characters: [],
  },
  mutations: {
    addCharacter(state, name: string) {
      state.characters = {
        ...state.characters,
        [name]: {},
      };
    },
  },
  actions: {

  },
});
