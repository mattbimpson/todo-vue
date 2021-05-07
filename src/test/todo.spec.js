import { mount, createLocalVue } from '@vue/test-utils';
import Todo from '../components/Todo.vue';

import Vuex from 'vuex';

const localVue = createLocalVue();

localVue.use(Vuex);

/* eslint-disable */
describe('Todo', () => {
    let actions;
    let store;

    beforeEach(() => {
        actions = {
            updateTodo: jest.fn()
        }
        store = new Vuex.Store({
            actions
        });
    })

    it('should render', () => {
        const todo = {id: 0, text: 'some text'};
        const wrapper = mount(Todo, { propsData: { todo } });
        expect(wrapper).toBeTruthy();
    });

    it('should add completed class when completed prop on todo item is true', () => {
        const todo = {id: 0, text: 'some text', completed: true };
        const wrapper = mount(Todo, { propsData: { todo }, store, localVue });
        expect(wrapper.html()).toContain('bg-green-300');
    });

    it('dispatches updateTodo when todo is clicked', () => {
        const todo = {id: 0, text: 'some text', completed: false };
        const wrapper = mount(Todo, { propsData: { todo }, store, localVue });
        const button = wrapper.find('#todo');
        button.trigger('click');
        expect(actions.updateTodo).toHaveBeenCalled();
    });
})
