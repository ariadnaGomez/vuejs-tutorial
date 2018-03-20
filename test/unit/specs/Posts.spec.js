import {mount, shallow, createLocalVue} from 'vue-test-utils'
import {createRenderer} from 'vue-server-renderer'
import Posts from '@/views/Posts.vue'
import CheckboxItem from '@/components/checkbox-item.vue'
import Vuex from 'vuex'

describe('Posts', () => {

  const localVue = createLocalVue()
  localVue.use(Vuex)
  let actions
  let getters
  let mutations
  let store
  beforeEach(() => {
    actions = {
      fetchListData: jest.fn(() => Promise.resolve())
    }
    getters = {
      getCheckboxList: jest.fn(),
      getIsActive: jest.fn(() => () => Promise.resolve()),
      getCheckboxListAux: jest.fn()
    }
    mutations = {
      addNewCheckbox: jest.fn(),
      setCheckboxAux: jest.fn()
    }
    store = new Vuex.Store({
      state: {},
      getters,
      mutations,
      actions
    })
  })

  test('should render a checkbox item for each item', () => {
    // const wrapper = shallow(Posts)

    const checkboxListAux = []
    getters.getCheckboxListAux.mockReturnValue(checkboxListAux)
    // getters.getIsActive.mockReturnValue()
    // mutations.setCheckboxAux.mockReturnValue(items)
    // mutations.setCheckboxAux.mockReturnValue(items)

    const wrapper = shallow(Posts, { store, localVue })
    const lengthArrayItems = wrapper.vm.itemsArray.length
    expect(wrapper.findAll(CheckboxItem).length).toBe(lengthArrayItems)
  })

  // test('should save each checkbox in the store', () => {
  //   // const wrapper = shallow(Posts)
  //   // const itemCheckbox = wrapper.find(CheckboxItem)
  //   const contentItemArray = {isActive: true, id: 1, title: 'title1'}
  //   const items = [{}, {}, {}]
  //   getters.getCheckboxListAux.mockReturnValue(items)
  //
  //   const wrapper = shallow(Posts, { store, localVue })
  //   const itemCheckbox = wrapper.find(CheckboxItem)
  //
  //   wrapper.setData({
  //     itemsArray:
  //       [{isActive: false, id: 1, title: 'title1'}, {isActive: false, id: 2}]
  //   })
  //   itemCheckbox.vm.$emit('checkbox-clicked', contentItemArray)
  //   wrapper.update()
  //   expect(wrapper.vm.itemsArray[0].isActive).toBe(contentItemArray.isActive)
  // })
  //
  // it('has same HTML structure', () => {
  //   const renderer = createRenderer()
  //   const wrapper = mount(Posts)
  //   wrapper.setData({
  //     itemsArray:
  //       [{isActive: false, id: 1}, {isActive: false, id: 2}]
  //   })
  //   renderer.renderToString(wrapper.vm, (err, str) => {
  //     if (err) throw new Error(err)
  //     expect(str).toMatchSnapshot()
  //   })
  // })
})
