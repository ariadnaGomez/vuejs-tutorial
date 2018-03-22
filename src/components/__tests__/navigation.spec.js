import { mount } from 'vue-test-utils'
import { createRenderer } from 'vue-server-renderer'
import Navigation from '@/components/navigation.vue'

describe('navigation', () => {
  it('has same HTML structure', () => {
    const mocks = {
      $route: {name: 'Form'}}
    const renderer = createRenderer()
    const wrapper = mount(Navigation, {mocks})
    renderer.renderToString(wrapper.vm, (err, str) => {
      if (err) throw new Error(err)
      expect(str).toMatchSnapshot()
    })
  })
})
