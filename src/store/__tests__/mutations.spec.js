import checkboxModule from '../checkboxListModule'

describe('mutations', () => {
  test('setActiveType sets state to type', () => {
    const type = 'top'
    const state = {}
    checkboxModule.mutations.setCheckboxAux(state, type)
    expect(state.checkboxListAux).toBe(type)
  })
})
