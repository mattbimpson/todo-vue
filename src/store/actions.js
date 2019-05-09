import * as m from './mutation-types'
import * as a from './action-types'

export default {
    [a.addTodo] ({ commit }, payload) {
        commit(m.addTodo, payload)
    },
    [a.removeTodo] ({ commit }, payload) {
        commit(m.removeTodo, payload)
    },
    [a.updateTodo] ({ commit }, payload) {
        commit(m.updateTodo, payload)
    },
    [a.clearTodos] ({ commit }) {
        commit(m.clearTodos)
    }
}
