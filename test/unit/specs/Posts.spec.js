import { shallow } from 'vue-test-utils'
import Posts from '../../../src/views/Posts.vue'
import CheckboxItem from '../../../src/components/checkbox-item.vue'

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
})
