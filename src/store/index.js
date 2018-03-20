import Vue from 'vue'
import Vuex from 'vuex'
import moduleForm from './form'

Vue.use(Vuex)

const store = new Vuex.Store({
  modules: {
    form: moduleForm
  }
})

export default store
