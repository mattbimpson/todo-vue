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
