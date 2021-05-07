<template>
  <div>
    <ul>
      <ol>
        <Todo v-for="item in todos" :key="item.id" :todo="item" />
      </ol>
    </ul>
    <div v-show="this.todos.length">
      <ConfirmBtn id="btnConfirm" buttonText="Clear all your todos?" @confirm-action="clearAll" />
    </div>
  </div>
</template>

<script>
import Todo from './Todo.vue';
import ConfirmBtn from './ConfirmBtn.vue';
import { mapGetters } from 'vuex';
import * as a from '../store/action-types';

export default {
  name: 'TodoList',
  components: {
    Todo,
    ConfirmBtn
  },
  computed: {
    ...mapGetters([
      'todos'
    ])
  },
  methods: {
    clearAll () {
      this.$store.dispatch(a.clearTodos);
    }
  }
}
</script>
