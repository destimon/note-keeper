import Vue from 'vue'
import Vuex from 'vuex'
import _ from 'lodash';

Vue.use(Vuex)

let localNotesInitial = [];

if (localStorage.notes) {
  localNotesInitial = JSON.parse(localStorage.notes)
}

export default new Vuex.Store({
  state: {
    notes: localNotesInitial
  },
  mutations: {
    addNote(state, notes) {
      state.notes = notes;
    }
  },
  actions: {
    addNote({commit}, note) {
      let localNotes;

      if (localStorage.notes)
        localNotes = JSON.parse(localStorage.notes);
      else
        localNotes = [];

      const result = _.union(localNotes, [note]);

      localStorage.setItem('notes', JSON.stringify(result));
      commit('addNote', result)
    }
  },
  modules: {
  }
})
