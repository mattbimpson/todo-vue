<template>
  <div id="app">
    <div class="header">
        stuff to do
    </div>
    <div class="add-container">
      <input type="text" id="txtTodo" placeholder="what do you need to do?" v-model='description' />
      <input type="button" id="btnAdd" class="btn" @click='addTodo' value="add todo" :disabled=addDisabled />
    </div>
    <TodoList />
  </div>
</template>

<style>

</style>

<script>
import * as a from './store/action-types'
import TodoList from './components/TodoList.vue'

export default {
  name: 'app',
  components: {
    TodoList
  },
  computed: {
    addDisabled () {
      return !this.description
    }
  },
  methods: {
    addTodo () {
      const payload = { text: this.description, completed: false }
      this.$store.dispatch(a.addTodo, payload)
      this.description = ''
    }
  },
  data () {
    return {
      description: ''
    }
  }
}
</script>