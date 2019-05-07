<template>
    <div>
        <div v-if="!confirming">
            <input type="button" id="btnMain" :value="buttonText" @click="toggleConfirm" />
        </div>
        <div v-if="confirming">
            <input type="button" className="confirm-yes" value="Yes" @click="confirmYes" />
            <input type="button" className="confirm-no" value="No" @click="confirmNo" />
        </div>
    </div>
</template>
<script src='./ConfirmBtn.js' />
