import { shallow, mount, createLocalVue } from 'vue-test-utils'
import { createRenderer } from 'vue-server-renderer'
import flushPromises from 'flush-promises'
import Vuex from 'vuex'
import Posts from '@/views/Posts.vue'
import CheckboxItem from '@/components/checkbox-item.vue'

describe('Posts', () => {
  const localVue = createLocalVue()
  localVue.use(Vuex)
  let store
  let actions
  let state
  let mutations
  beforeEach(() => {
    state = {modulePosts: {posts: [
      {id: 2, isActive: false, title: 'title1'},
      {id: 3, isActive: true, title: 'title2'}]}}
    actions = {
      getLastPosts: jest.fn(() => Promise.resolve())
    }
    mutations = {
      setActivePost: jest.fn()
    }
    store = new Vuex.Store({
      state,
      actions,
      mutations
    })
  })
  test('should render a checkbox item for each item', async () => {
    const wrapper = mount(Posts, {localVue, store})
    await flushPromises()
    const lengthArrayItems = wrapper.vm.posts.length
    expect(wrapper.findAll(CheckboxItem).length).toBe(lengthArrayItems)
  })

  test('should save each checkbox in the store', () => {
    const wrapper = shallow(Posts, {localVue, store})
    const itemCheckbox = wrapper.find(CheckboxItem)
    const contentItemArray = { isActive: true, id: 2 }
    itemCheckbox.vm.$emit('checkbox-clicked', contentItemArray)
    wrapper.update()
    expect(mutations.setActivePost).toBeCalledWith(state, contentItemArray)
  })

  it('has same HTML structure', () => {
    const renderer = createRenderer()
    const wrapper = mount(Posts, {localVue, store})
    renderer.renderToString(wrapper.vm, (err, str) => {
      if (err) throw new Error(err)
      expect(str).toMatchSnapshot()
    })
  })
})
