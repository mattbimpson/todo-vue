<template>
    <div>
        <div v-if="!confirming">
            <input type="button" id="btnMain" :value="buttonText" @click="toggleConfirm" />
        </div>
        <div v-if="confirming">
            <input type="button" class="confirm-yes" value="Yes" @click="confirmYes" />
            <input type="button" class="confirm-no" value="No" @click="confirmNo" />
        </div>
    </div>
</template>
<script>
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
        this.$emit('confirm-action')
        this.toggleConfirm()
    },
    confirmNo () {
        this.toggleConfirm()
    }
}
}
</script>
<!--<style scoped>
input {
    border-radius: 5px;
    border: 0px;
}

.confirm-yes {
    background-color: lightgreen;
    padding: 5px;
    margin-right: 5px;
}
.confirm-no {
    background-color: lightcoral;
    padding: 5px;
}
</style>-->
