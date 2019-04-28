<template>
  <div id="app">
    <div className="header">
        stuff to do
    </div>
    <div className="add-container">
      <input type="text" id="txtTodo" placeholder="what do you need to do?" v-model='description' />
      <input type="button" id="btnAdd" className="btn" @click='addTodo' value="add todo" />
    </div>
    <TodoList />
  </div>
</template>

<script>
import * as a from './store/action-types';
import TodoList from './components/TodoList.vue'

export default {
  name: 'app',
  components: {
    TodoList
  },
  methods: {
    addTodo() {
      const payload = { text: 'new todo' }
      this.$store.dispatch(a.addTodo, payload)
    }
  },
  data() {
    return {
      description: ''
    }
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
