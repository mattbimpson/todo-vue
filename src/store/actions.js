import * as m from './mutation-types'
import * as a from './action-types'

export default {
    [a.addTodo]({ commit }, payload) {
        commit(m.addTodo, payload)
    },
}