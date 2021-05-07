import { mount, createLocalVue } from '@vue/test-utils';
import TodoList from '../components/TodoList.vue';
import Vuex from 'vuex';

const localVue = createLocalVue();

localVue.use(Vuex);

/* eslint-disable */
describe('TodoList', () => {
    //let actions
    let store;
    let getters;

    beforeEach(() => {
        // actions = {
        //     updateTodo: jest.fn()
        // }
        getters = {
            todos: () => [{id: 0, text: 'test'}]
        };
        store = new Vuex.Store({
            getters
        });
    })

    it('should render', () => {
        const todo = {id: 0, text: 'some text'};
        const wrapper = mount(TodoList, { propsData: {}, store, localVue });
    })

    // it('should call clearAll when clear button clicked', () => {
    //     const todo = {id: 0, text: 'some text'}
    //     const wrapper = mount(TodoList, { propsData: {}, store, localVue })
    //     const button = wrapper.find('#btnConfirm')
    //     button.trigger('click')
    //     const btnClear = wrapper.find('.confirm-yes')
    //     btnClear.trigger('click')
    // })
})
