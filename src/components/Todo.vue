<template>
    <div className='todo-container'>
        <div className='todo-item'>
            {{todo.text}}
        </div>
        <div className='todo-controls'>
            done <input type="checkbox" />
            <input type="button" className="btn" value="remove" @click="remove" />
        </div>
    </div>
</template>
<style src="../styles/todo.css"></style>
<script>
import * as a from '../store/action-types';
export default {
    name: 'Todo',
    props: ['todo'],
    methods: {
        remove() {
            this.$store.dispatch(a.removeTodo, this.todo.id)
        }
    }
}
</script>
