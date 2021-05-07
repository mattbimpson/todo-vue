<template>
  <div>
    <div v-if="!confirming">
    <input type="button" id="btnMain" class="p-1 rounded text-black" :value="buttonText" @click="toggleConfirm" />
  </div>
  <div v-if="confirming">
    <input type="button" class="p-1 rounded text-black bg-green-300 mr-5" value="Yes" @click="confirmYes" />
    <input type="button" class="p-1 rounded text-black bg-red-300" value="No" @click="confirmNo" />
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
      this.confirming = !this.confirming;
    },
    confirmYes () {
      this.$emit('confirm-action');
      this.toggleConfirm();
    },
    confirmNo () {
      this.toggleConfirm();
    }
  }
}
</script>

