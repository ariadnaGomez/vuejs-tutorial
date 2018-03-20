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
    // if (state.checkboxList.indexOf(checkbox) === -1) {
    //   return false
    // }
    // return true

    // for (var i = 0; i < state.checkboxList.length; i += 1) {
    //   if (state.checkboxList[i].id === checkbox) {
    //     return true
    //   }
    // }
    // return false

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
    // console.log(checkbox)
    // var index = state.checkboxList.id.indexOf(checkbox.id)
    // if (index > -1) {
    //   state.checkboxList.splice(index, 1)
    // } else {
    //   state.checkboxList.push(checkbox)
    // }

    // var flag = 1
    // for (var i = 0; i < state.checkboxList.length; i += 1) {
    //   if (state.checkboxList[i].id === checkbox.id) {
    //     console.log('se supone que lo encuentra' + i)
    //     console.log(state.checkboxList)
    //     state.checkboxList.splice(i, 1)
    //     flag = 0
    //     console.log(state.checkboxList)
    //     // break
    //   }
    // }
    // if (flag === 1) {
    //   state.checkboxList.push(checkbox)
    // }

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
