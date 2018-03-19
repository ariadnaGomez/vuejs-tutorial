import Vue from 'vue'
import Vuex from 'vuex'

import users from './UserStoreModule'

Vue.use(Vuex)

export const store = new Vuex.Store({
  state: {
    user: {
      name: 'Arcas',
      developer: true,
      enterprise: 'Sopra'
    },
    user1: {
      name: 'Arcas1',
      developer: false,
      enterprise: 'Sopra1'
    },
    user2: {
      name: 'Arcas2',
      developer: false,
      enterprise: 'Sopra2'
    }
  },
  mutations: {
    home1: (state) => {
      state.user = state.user1
    },
    home2: (state) => {
      state.user = state.user2
    }
  },
  modules: {
    users
  }
})
