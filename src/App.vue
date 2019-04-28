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
<style src="./styles/app.css"></style>

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
      const payload = { text: this.description }
      this.$store.dispatch(a.addTodo, payload)
      this.description = ''
    }
  },
  data() {
    return {
      description: ''
    }
  }
}
</script>
