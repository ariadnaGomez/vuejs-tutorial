const state = {
  checkboxList: []
}

const actions = {}

const getters = {
  getCheckboxListOrdered: (state) => {
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
  getCheckboxListChecked: (state, getters) => {
    return getters.getCheckboxListOrdered.filter(checkboxItem =>
      checkboxItem.isActive
    )
  }
}

const mutations = {
  initializeStore: (state) => {
    if (state.checkboxList.length === 0) {
      state.checkboxList = [
        {
          id: 0,
          isActive: false,
          title: 'titulo0'
        },
        {
          id: 1,
          isActive: false,
          title: 'titulo1'
        },
        {
          id: 2,
          isActive: false,
          title: 'titulo2'
        },
        {
          id: 3,
          isActive: false,
          title: 'titulo3'
        },
        {
          id: 4,
          isActive: false,
          title: 'titulo4'
        }
      ]
    }
  },
  changeIsActiveValue: (state, checkboxItem) => {
    const index = state.checkboxList
      .findIndex(checkbox =>
        checkbox.id === checkboxItem.id
      )
    state.checkboxList[index].isActive = checkboxItem.isActive
  },
  addNewCheckbox: (state) => {
    const newCheckbox = {
      id: state.checkboxList.length,
      isActive: false,
      title: 'titulo' + state.checkboxList.length
    }
    state.checkboxList.push(newCheckbox)
  }
}

export default {
  state,
  actions,
  getters,
  mutations
}
