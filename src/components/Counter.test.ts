import { shallowMount } from '@vue/test-utils'

import Counter from './Counter.vue'

describe('counter', () => {
  const wrapper = shallowMount(Counter, {
    props: {
      count: 0,
    },
  })

  const counter = wrapper.get(`[data-test]="counter"`)

  it('should be rendered', () => {
    expect(counter.text()).toBe('count: 0')
  })

  it('should be plus one', async () => {
    await wrapper.find('button').trigger('click')

    expect(counter.text()).toBe('count: 1')
  })
})
