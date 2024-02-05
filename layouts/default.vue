<template>
  <div class="bg-cota-background">
    <head>
      <meta name="theme-color" content="#020811" />
      <meta
        name="apple-mobile-web-app-status-bar-style"
        content="black-translucent"
      />
    </head>
    <Navbar />

    <slot />

    <FooterSection @submission-result="handleSubscriptionResult" id="footer" />
    <NotificationComponent
      :show="showNotification"
      :message="notificationMessage"
      :isSuccess="isSuccess"
      @close="showNotification = false"
    />
  </div>
</template>
<script setup lang="ts">
useSeoMeta({
  title: "code.talks conference",
  description: "Home page of the code.talks Hamburg developer conference.",
  ogTitle: "code.talks conference",
  ogDescription: "Home page of the code.talks Hamburg developer conference.",
  ogImage: "/cota_logo.png",
});

useHead({
  htmlAttrs: {
    lang: "en",
  },
  link: [
    {
      rel: "icon",
      type: "image/png",
      href: "/favicon-16x16.png",
    },
  ],
});

import { ref } from "vue";

type SubscriptionResult = {
  success: boolean;
  message: string;
};

const showNotification = ref(false);
const notificationMessage = ref("");
const isSuccess = ref(false);

const handleSubscriptionResult = (result: SubscriptionResult) => {
  notificationMessage.value = result.message;
  isSuccess.value = result.success;
  showNotification.value = true;
};
</script>

<style></style>
