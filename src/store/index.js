import Vue from 'vue'
import Vuex from 'vuex'
import InitialState from './initial-state'
import Mutations from './mutations'
import Actions from './actions'
import Getters from './getters'

Vue.use(Vuex)

const debug = process.env.NODE_ENV !== 'production'

export default new Vuex.Store({
  state: InitialState,
  mutations: Mutations,
  actions: Actions,
  getters: Getters,
  strict: debug
})
