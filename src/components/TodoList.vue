<template>
    <div>
        <ul>
            <ol>
                <Todo v-for="item in todos" :key="item.id" :todo="item" />
            </ol>
        </ul>
    </div>
</template>

<script>
import Todo from './Todo.vue'
import { mapGetters } from 'vuex'

export default {
    name: 'TodoList',
    components: {
        Todo
    },
    computed: {
    ...mapGetters([
      'todos',
    ]),
  }
}
</script>
