import Vue from 'vue'
import Vuex from 'vuex'
import moduleForm from './form'
import modulePosts from './posts'
import moduleAuth from './auth'

Vue.use(Vuex)

const store = new Vuex.Store({
  modules: {
    form: moduleForm,
    modulePosts,
    auth: moduleAuth
  }
})

export default store
