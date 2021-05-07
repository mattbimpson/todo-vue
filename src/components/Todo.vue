<template>
  <div class="flex mb-5 w-80 p-3 rounded justify-between text-black items-baseline"
    :class="{'bg-green-300 line-through': !completed, 'bg-white': completed}"
    @click="toggleCompleted"
    >
    {{todo.text}}
    <input type="button" class="p-1 rounded text-black" value="remove" @click="remove" />
  </div>
</template>

<script>
import * as a from '../store/action-types';
export default {
  name: 'Todo',
  props: ['todo'],
  methods: {
    remove () {
        this.$store.dispatch(a.removeTodo, this.todo.id);
    },
    toggleCompleted () {
        let payload = { ...this.todo };
        payload.completed = !this.todo.completed;
        this.$store.dispatch(a.updateTodo, payload);
    }
  },
  computed: {
    completed () {
      return this.todo.completed;
    }
  }
}

</script>
