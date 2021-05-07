<template>
  <div id="app">
    <div class="w-96 mx-auto">
      <div class="text-center text-xl mt-4">
        stuff to do
      </div>
      <div class="container px-8 pt-20 mx-auto lg:px-4">
        <input type="text" id="txtTodo" class="p-1 rounded text-black" placeholder="what do you need to do?" v-model='description' />
        <input type="button" id="btnAdd" class="p-1 rounded text-black mx-1" @click='addTodo' value="add todo" :disabled=addDisabled />
      </div>
      <TodoList />
    </div>
  </div>
</template>

<style>
html {
  background-color: #282c34;
  color: white;
}
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