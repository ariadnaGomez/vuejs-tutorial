import axios from 'axios'

const state = {
  user: null,
  logged: !!window.localStorage.getItem('_token')
}

const actions = {
  login: ({commit}, userInput) => {
    return new Promise((resolve, reject) => {
      axios.post('https://reqres.in/api/login', {body: userInput})
        .then(user => {
          window.localStorage.setItem('_token', user.body.token)
          window.localStorage.setItem('_user', userInput)
          commit('setUser')
          resolve(user)
        })
        .catch(error => {
          reject(error)
        })
        .finally(() => {
          console.log('Ha llegado al finally del login')
        })
    })
  },
  logout: ({commit}) => {
    console.log('Ha entrado en el logout')
    window.localStorage.removeItem('_token')
    window.localStorage.removeItem('_user')
    commit('setUser')
  }
}

const getters = {
  getUser: (state) => {
    return state.user
  },
  getLogged: (state) => {
    return state.logged
  }
}

const mutations = {
  setUser: (state) => {
    if (window.localStorage.getItem('_token')) {
      state.user = window.localStorage.getItem('_user')
      state.logged = true
    } else {
      state.user = null
      state.logged = false
    }
  },
  setLogged: (state, logged) => {
    state.logged = logged
  }
}

export default {
  state,
  actions,
  getters,
  mutations
}
