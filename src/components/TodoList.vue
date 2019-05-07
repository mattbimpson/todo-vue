<template>
    <div>
        <ul>
            <ol>
                <Todo v-for="item in todos" :key="item.id" :todo="item" />
            </ol>
        </ul>
        <div v-show="this.todos.length">
            <ConfirmBtn buttonText="Clear all your todos?" @action="clearAll" />
        </div>
    </div>
</template>

<script>
import Todo from './Todo.vue'
import ConfirmBtn from './ConfirmBtn.vue'
import { mapGetters } from 'vuex'

export default {
    name: 'TodoList',
    components: {
        Todo,
        ConfirmBtn
    },
    computed: {
    ...mapGetters([
      'todos'
    ]),
    methods: {
        clearAll () {
            window.alert('clearing')
        }
    }
  }
}
</script>
