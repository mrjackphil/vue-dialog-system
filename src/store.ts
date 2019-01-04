import Vue from 'vue';
import Vuex from 'vuex';
import {isNameInArray, maxInArray, add1, objId} from './modules/functions';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    characters: [] as Array<{}>,
    dialogues: [] as Array<{}>,
  },
  mutations: {
    newCharacter(store, n: string) {
      store.characters = store.characters.concat([{name: n}]); },

    newDialog(store, id: number) {
      store.dialogues = store.dialogues.concat([{}]); },
  },
  actions: {
    addChar({state, commit}, name: string) {
      if (!name || isNameInArray(state.characters, name)) { return; }
      commit('newCharacter', name);
    },

    addDialog({state, commit}) {
      const max = maxInArray(
        state.dialogues.map( (e) => objId(e)) );
      commit('newDialog', add1(max) );
    },
  },
});
