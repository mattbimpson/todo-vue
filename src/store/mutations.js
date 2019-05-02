import * as m from './mutation-types'
export default {
    [m.addTodo] (state, payload) {
        let todo = { ...payload }
        const id = state.todos.length ? state.todos[state.todos.length - 1].id + 1 : 0
        todo.id = id
        state.todos.push(todo)
    },
    [m.removeTodo] (state, payload) {
        state.todos = state.todos.filter(x => x.id !== payload)
    },
    [m.updateTodo] (state, payload) {
        const todo = state.todos.find(t => t.id === payload.id)
        let modified = { ...todo }
        modified.completed = payload.completed
    }
}
