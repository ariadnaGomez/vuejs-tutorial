import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const moduleForm = {
  state: {
    Name: '',
    Email: ''
  },
  mutations: {
    setNombre (state, name) {
      state.Name = name
    },
    setEmail (state, email) {
      state.Email = email
    }
  },

  getters: {
    getNameError (state) {
      if (!state.Name || state.Name.length < 3) {
        return 'El nombre debe tener más de 3 letras'
      }
      return null
    },
    getEmailError (state) {
      /* eslint-disable */
      const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
      if (re.test(state.Email)) {
        return null;
      }
      return 'El email está mal formateado'
    }
  }
}

const store = new Vuex.Store({
  modules: {
    form: moduleForm
  }

})

export default store
