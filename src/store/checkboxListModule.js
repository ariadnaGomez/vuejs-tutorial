const state = {
  checkboxList: null
}

const actions = {
}

const getters = {
  getCheckboxList: (state) => { return state.checkboxList }
}

const mutations = {
  addNewCheckbox: (state, checkbox) => {
    state.checkboxList.push(checkbox)
  }
}

export default {
  state,
  actions,
  getters,
  mutations
}
