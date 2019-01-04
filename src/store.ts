import Vue from 'vue';
import Vuex from 'vuex';
import {add1} from './modules/functions';
import {IState} from './modules/storeDeclarations';
import {isNameInArray, fst, findById, getIds, arrsMax} from './modules/arrays';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    objects: [],
    dialogues: [],
    activeDialog: 0,
  } as IState,
  mutations: {
    newCharacter(state, opt: {id: number, name: string}) {
      state.objects.push({id: opt.id, type: 'character', name: opt.name}); },

    activateDialog(state, id: number) {
      state.activeDialog = id;
    },

    newObject(state, opt: {id: number, name?: string, type: string}) {
      state.objects.push({id: opt.id, name: opt.name, type: opt.type}); },

    newDialog(state, i: number) {
      state.dialogues.push({id: i}); },

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
