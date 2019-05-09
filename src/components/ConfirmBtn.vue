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
<script src='./ConfirmBtn.js' />
<style scoped src='./ConfirmBtn.css' />
