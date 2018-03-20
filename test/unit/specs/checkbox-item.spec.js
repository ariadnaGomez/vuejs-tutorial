import { shallow } from 'vue-test-utils'

import CheckboxItem from '@/components/checkbox-item.vue'

describe('checkboxItem', () => {
  test('should render post title', () => {
    const wrapper = shallow(CheckboxItem,
      {propsData: {title: 'My test title', isActive: false, id: 1}})
    const title = wrapper.find('p')
    expect(title.text()).toBe('My test title')
  })

  test('checkbox should be init', () => {
    const wrapper = shallow(CheckboxItem,
      {propsData: {title: 'My test title', isActive: true, id: 1}})
    const checkbox = wrapper.find('input')
    expect(checkbox.element.checked).toBe(true)
  })

  test('should emit event when checkbox is clicked', () => {
    const wrapper = shallow(CheckboxItem,
      { propsData: {title: 'My test title', isActive: true, id: 1} })
    const checkbox = wrapper.find('input')
    const stub = jest.fn()
    wrapper.vm.$on('checkbox-clicked', stub)
    checkbox.trigger('click')
    wrapper.update()
    expect(stub).toBeCalledWith({isActive: false, id: 1})
  })
})
