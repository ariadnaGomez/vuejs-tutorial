import { shallow, mount } from 'vue-test-utils'
import { createRenderer } from 'vue-server-renderer'
import Posts from '@/views/Posts.vue'
import CheckboxItem from '@/components/checkbox-item.vue'

describe('Posts', () => {
  test('should render a checkbox item for each item', () => {
    const wrapper = shallow(Posts)
    const lengthArrayItems = wrapper.vm.itemsArray.length
    expect(wrapper.findAll(CheckboxItem).length).toBe(lengthArrayItems)
  })

  test('should save each checkbox in the store', () => {
    const wrapper = shallow(Posts)
    const itemCheckbox = wrapper.find(CheckboxItem)
    const contentItemArray = { isActive: true, id: 1 }
    wrapper.setData({ itemsArray:
      [{ isActive: false, id: 1 }, {isActive: false, id: 2}] })
    itemCheckbox.vm.$emit('checkbox-clicked', contentItemArray)
    wrapper.update()
    expect(wrapper.vm.itemsArray[0].isActive).toBe(contentItemArray.isActive)
  })

  it('has same HTML structure', () => {
    const renderer = createRenderer()
    const wrapper = mount(Posts)
    wrapper.setData({ itemsArray:
      [{ isActive: false, id: 1 }, {isActive: false, id: 2}] })
    renderer.renderToString(wrapper.vm, (err, str) => {
      if (err) throw new Error(err)
      expect(str).toMatchSnapshot()
    })
  })
})
