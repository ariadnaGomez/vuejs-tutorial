import Vue from 'vue'
import Vuex from 'vuex'
import moduleForm from './form'
import moduleCheckboxList from './checkboxListModule'

Vue.use(Vuex)

const store = new Vuex.Store({
  modules: {
    form: moduleForm,
    checkboxList: moduleCheckboxList
  }
})

export default store
