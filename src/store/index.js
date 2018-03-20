import Vue from 'vue'
import Vuex from 'vuex'
import moduleForm from './form'
import modulePosts from './posts'

Vue.use(Vuex)

const store = new Vuex.Store({
  modules: {
    form: moduleForm,
    modulePosts: modulePosts
  }
})

export default store
