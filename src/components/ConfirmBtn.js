// import * as a from '../store/action-types'
export default {
    name: 'ConfirmBtn',
    props: ['buttonText'],
    data: function () {
        return {
            confirming: false
        }
    },
    methods: {
        toggleConfirm () {
            this.confirming = !this.confirming
        },
        confirmYes () {
            this.$emit('action')
            this.toggleConfirm()
        },
        confirmNo () {
            this.toggleConfirm()
        }
    }
}
