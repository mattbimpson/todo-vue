<template>
    <div :class="{'todo-container': !completed, 'todo-container completed': completed}">
        <div class='todo-item'>
            {{todo.text}}
        </div>
        <div class='todo-controls'>
            done <input type="checkbox" @change="toggleCompleted" :model="completed" id="btnDone" />
            <input type="button" class="btn" value="remove" @click="remove" />
        </div>
    </div>
</template>

<script>
import * as a from '../store/action-types'
export default {
    name: 'Todo',
    props: ['todo'],
    methods: {
        remove () {
            this.$store.dispatch(a.removeTodo, this.todo.id)
        },
        toggleCompleted () {
            let payload = { ...this.todo }
            payload.completed = !this.todo.completed
            this.$store.dispatch(a.updateTodo, payload)
        }
    },
    computed: {
        completed () {
            return this.todo.completed
        }
    }
}

</script>

<style scoped>
.todo-container.completed {
    text-decoration: line-through;
    color: darkgray;
    background-color: darkgreen;
}

.todo-item {
    display: block;
}

.todo-controls {
    display: block;
    font-size: small;
}

.todo-container {
    border-radius: 5px;
    background: darkgray;
    padding: 5px;
    margin-top: 5px;
    width: 600px;
    text-align: center;
}

.btn {
    border-radius: 5px;
}
</style>
