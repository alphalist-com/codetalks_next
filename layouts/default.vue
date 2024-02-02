<template>
  <head>
    <meta name="theme-color" content="#020811">
    <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent">
  </head>
  <Navbar/>
  <div class="bg-cota-background">
    <slot/>
  </div>
  <FooterSection @submission-result="handleSubscriptionResult" id="footer"/>
  <NotificationComponent 
    :show="showNotification" 
    :message="notificationMessage" 
    :isSuccess="isSuccess"
    @close="showNotification = false"
  />
</template>
<script setup lang="ts">
import { ref } from 'vue';

type SubscriptionResult = {
  success: boolean;
  message: string;
};

const showNotification = ref(false);
const notificationMessage = ref('');
const isSuccess = ref(false);

const handleSubscriptionResult = (result: SubscriptionResult) => {
  notificationMessage.value = result.message;
  isSuccess.value = result.success;
  showNotification.value = true;
};

</script>

<style>
</style>
