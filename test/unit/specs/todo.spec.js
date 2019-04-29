import { mount } from '@vue/test-utils'
import Todo from '../../../src/components/Todo.vue'

/* eslint-disable */
describe('Todo', () => {
    it('should render', () => {
        const todo = {id: 0, text: 'some text'}
        const wrapper = mount(Todo, { propsData: { todo } })
        }
    )
})