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
    <SpeakerDialog
      @close="speakerDialogClosed"
      :speaker-dialog-open="showSpeakerDialog"
      :speaker-id="speakerId"
    />
    <TalkDialog
      @close="talkDialogClosed"
      :talk-dialog-open="showTalkDialog"
      :talk-data="talkData"
    />
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

import { ref, provide } from "vue";

const speakerId = ref("");
const talkData = ref<Object | null>(null);
const showSpeakerDialog = ref(false);
const showTalkDialog = ref(false);

const speakerDialogClosed = () => {
  showSpeakerDialog.value = false;
};

const talkDialogClosed = () => {
  showTalkDialog.value = false;
};

const openDialogWithPersonId = async (id: string) => {
  console.log(id);
  speakerId.value = id;
  showTalkDialog.value = false;
  showSpeakerDialog.value = true;
};

const openDialogWithTalkData = async (talk: Object) => {
  console.log(talk);
  talkData.value = talk;
  showSpeakerDialog.value = false;
  showTalkDialog.value = true;
};

provide("openDialogWithPersonId", openDialogWithPersonId);
provide("openDialogWithTalkData", openDialogWithTalkData);

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

<style>
::-webkit-scrollbar {
  margin-left: 4px;
  z-index: 60;
  margin-left: -4px;
  width: 4px;
  background-color: #020811;
}

::-webkit-scrollbar-thumb {
  background-color: #020811;
  border-radius: 4px;
  border: 1px solid #1aba8b;
  background-clip: padding-box;
}

::-webkit-scrollbar-thumb:hover {
  background: #1aba8b;
}
</style>
