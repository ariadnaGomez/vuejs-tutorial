import { mount, createLocalVue } from 'vue-test-utils'
import { createRenderer } from 'vue-server-renderer'
import Vuex from 'vuex'
import ActivePosts from '@/views/ActivePosts.vue'

describe('Posts', () => {
  const localVue = createLocalVue()
  localVue.use(Vuex)
  let store
  let getters
  beforeEach(() => {
    getters = {activePosts: jest.fn(() => [
      {id: 3, isActive: true, title: 'title2'}])}
    store = new Vuex.Store({
      getters
    })
  })

  it('has same HTML structure', () => {
    const renderer = createRenderer()
    const wrapper = mount(ActivePosts, {localVue, store})
    renderer.renderToString(wrapper.vm, (err, str) => {
      if (err) throw new Error(err)
      expect(str).toMatchSnapshot()
    })
  })

  it('has same HTML structure', () => {
    const renderer = createRenderer()
    getters.activePosts.mockImplementation(() => [
      {id: 3, isActive: true, title: 'title2'}, {id: 4, title: 'title3'}])
    const wrapper = mount(ActivePosts, {localVue, store})
    renderer.renderToString(wrapper.vm, (err, str) => {
      if (err) throw new Error(err)
      expect(str).toMatchSnapshot()
    })
  })
})
