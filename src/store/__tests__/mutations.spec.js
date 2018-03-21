import checkboxModule from '../checkboxListModule'

describe('mutations', () => {
  test('setCheckboxAux sets state to checkbox', () => {
    const checkboxList = [{
      id: 1,
      isActive: false,
      title: 'title1'
    },
    {
      id: 2,
      isActive: true,
      title: 'title2'
    }]
    const state = {}
    checkboxModule.mutations.setCheckboxAux(state, checkboxList)
    expect(state.checkboxListAux).toEqual(checkboxList)
  })

  test('addNewCheckbox should remove checkbox element from checkboxList',
    () => {
      const checkboxList = [{
        id: 1,
        isActive: false,
        title: 'title1'
      },
      {
        id: 2,
        isActive: true,
        title: 'title2'
      }]
      const checkbox = {
        id: 2,
        isActive: true,
        title: 'title2'
      }
      const checkboxListAfterMutation = [{
        id: 1,
        isActive: false,
        title: 'title1'
      }]
      const state = {
        checkboxList: checkboxList
      }
      checkboxModule.mutations.addNewCheckbox(state, checkbox)
      expect(state.checkboxList).toEqual(checkboxListAfterMutation)
    })

  test('addNewCheckbox should add checkbox element to checkboxList',
    () => {
      const checkboxList = [{
        id: 1,
        isActive: false,
        title: 'title1'
      }]
      const checkbox = {
        id: 2,
        isActive: true,
        title: 'title2'
      }
      const checkboxListAfterMutation = [{
        id: 1,
        isActive: false,
        title: 'title1'
      },
      {
        id: 2,
        isActive: true,
        title: 'title2'
      }]
      const state = {
        checkboxList: checkboxList
      }
      checkboxModule.mutations.addNewCheckbox(state, checkbox)
      expect(state.checkboxList).toEqual(checkboxListAfterMutation)
    })
})
