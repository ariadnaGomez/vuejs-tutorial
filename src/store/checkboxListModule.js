const state = {
  checkboxList: [],
  checkboxListAux: []
}

const actions = {}

const getters = {
  getCheckboxList: (state) => {
    return state.checkboxList.sort(function (a, b) {
      if (a.id > b.id) {
        return 1
      }
      if (a.id < b.id) {
        return -1
      }
      return 0
    })
  },
  getIsActive: (state) => (checkboxID) => {
    var index = state.checkboxList.map(function (item) {
      return item.id
    }).indexOf(checkboxID)
    if (index > -1) {
      return true
    }
    return false
  },
  getCheckboxListAux: (state) => {
    return state.checkboxListAux
  }
}

const mutations = {
  addNewCheckbox: (state, checkbox) => {
    var removeIndex = state.checkboxList.map(function (item) {
      return item.id
    }).indexOf(checkbox.id)
    if (removeIndex > -1) {
      state.checkboxList.splice(removeIndex, 1)
    } else {
      state.checkboxList.push(checkbox)
    }
  },
  setCheckboxAux: (state, checkboxListAux) => {
    state.checkboxListAux = checkboxListAux
  }
}

export default {
  state,
  actions,
  getters,
  mutations
}
