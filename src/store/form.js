export default {
  state: {
    title: '',
    body: ''
  },
  mutations: {
    settitle (state, name) {
      state.title = name
    },
    setbody (state, email) {
      state.body = email
    },
    resetForm (state) {
      state.title = ''
      state.body = ''
    }
  },

  getters: {
    formErrors (state) {
      let titleError = null
      let bodyError = null
      if (!state.title || state.title.length < 3) {
        titleError = 'El nombre debe tener más de 3 letras'
      }
      if (!state.body || state.body.length < 3) {
        bodyError = 'El email está mal formateado'
      }
      return [
        titleError,
        bodyError
      ].filter(error => error !== null)
    }
  }
}
