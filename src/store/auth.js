import axios from 'axios'

const state = {
  user: null,
  logged: !!window.localStorage.getItem('_token')
}

const actions = {
  login: ({commit}, userInput) => {
    console.log('Ha llegado al authLogon con los datos: ' + userInput)
    const userToMatch = {
      user: 'Arcas',
      pass: '123456'
    }
    return new Promise((resolve, reject) => {
      if (userInput.user === userToMatch.user &&
        userInput.pass === userToMatch.pass) {
        axios.post('https://reqres.in/api/users', {body: userInput})
          .then(user => {
            console.log('Ha llegado al then del login' + user.data.id)
            window.localStorage.setItem('_token', user.data.id)
            window.localStorage.setItem('_user', JSON.stringify(userInput))
            commit('setUser')
            resolve(user)
          })
          .catch(error => {
            console.log('Ha llegado al catch del login')
            reject(error)
          })
          .finally(() => {
            console.log('Ha llegado al finally del login')
          })
      }
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
  }
}

export default {
  state,
  actions,
  getters,
  mutations
}
