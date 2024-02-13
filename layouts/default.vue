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
    <TicketShopDialog
      :hidden="!showTicketShopDialog"
      @close="ticketShopHidden"
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
  title: "code.talks Tech Conference 2024 | Network & Learn in Hamburg",
  description: "Join other developers and CTOs at the leading tech event which is a fixture in the DACH tech scene. Network, learn, and have fun at this tech event. It is more than a developer conference, it is a community.",
  ogTitle: "code.talks Tech Conference 2024 | Network & Learn in Hamburg September 19-20 2024",
  ogDescription: "Join other developers and CTOs at the leading tech event which is a fixture in the DACH tech scene. Network, learn, and have fun at this tech event. It is more than a developer conference, it is a community.",
  ogImage: "/cota_logo.png",
  ogSiteName: 'code.talks',
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
const showSpeakerDialog = ref<Boolean>(false);
const showTalkDialog = ref<Boolean>(false);
const showTicketShopDialog = ref<Boolean>(false);

const speakerDialogClosed = () => {
  showSpeakerDialog.value = false;
};

const talkDialogClosed = () => {
  showTalkDialog.value = false;
};

const ticketShopHidden = () => {
  showTicketShopDialog.value = false;
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

const showTicketShop = async () => {
  console.log("showTicketShop");
  showTicketShopDialog.value = true;
};

provide("openDialogWithPersonId", openDialogWithPersonId);
provide("showTicketShop", showTicketShop);
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
  z-index: 60;
  width: 6px;
  background-color: #020811;
}

::-webkit-scrollbar-thumb {
  background-color: #020811;
  border-radius: 4px;
  border: 1px solid #1aba8b;
}

::-webkit-scrollbar-thumb:hover {
  background: #1aba8b;
}
</style>
