import Vue from 'vue';
import Vuex from 'vuex';
import {objName, add1, objId} from './modules/functions';
import {Dialogue, Objects} from './modules/storeDeclarations';
import {arrMax, isNameInArray, fst, findById, getIds, arrsMax} from './modules/arrays';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    objects: [] as Objects[],
    dialogues: [] as Dialogue[],
  },
  mutations: {
    newCharacter(state, opt: {id: number, name: string}) {
      state.objects = state.objects
          .concat([{id: opt.id, type: 'character', name: opt.name}]); },

    newDialog(state, i: number) {
      state.dialogues = state.dialogues.concat([{id: i}]); },

    setDialogName(state, options: {id: number, name: string}) {
      const obj = fst (findById(state.dialogues, options.id));
      if (obj) { obj.name = options.name; }
    },
  },
  actions: {
    addChar({state, commit}, n: string) {
      if (!n || isNameInArray(state.objects, n)) { return; }
      const max = arrsMax( getIds(state.dialogues), getIds(state.objects) );
      commit('newCharacter', {id: add1(max), name: n});
    },

    addDialog({state, commit}, n: string) {
      const max = arrsMax( getIds(state.dialogues), getIds(state.objects) );
      commit('newDialog', add1(max) );
      commit('setDialogName', {id: add1(max), name: n});
    },
  },
  getters: {
    characters(state) {
      return state.objects.filter( (e) => e.type === 'character');
    },
  },
});
