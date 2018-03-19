
// import Vue from 'vue'
// import axios from 'axios'
// Vue.use(axios)

const state = {
  users: null
}

const actions = {
  loadUsers: (context) => {
    axios.get('https://randomuser.me/api/?results=100')
      .then((result) => {
        // state.users = result.data.results
        console.log('ACTIONNNN' + state.users)
        context.commit('saveUser', result.data.results)
      })
  }
}

const getters = {
  getUsers: (state) => { return state.users }
}

const mutations = {
  addNewUser: (state, user) => {
    state.users.push(user)
  },
  saveUser: (state, users) => {
    // console.log('Ha llegado')
    state.users = users
  }
}

export default {
  state,
  actions,
  getters,
  mutations
}
