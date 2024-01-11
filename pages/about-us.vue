<template>
  <div class="bg-cota-background">
    <div class="-mt-16 h-screen">
      <div class="relative isolate overflow-hidden h-full pt-14" id="hero">
        <div class="absolute inset-0 -z-10">
          <img

            src="https://codetalks.de/img/sections/hero/aboutPage.jpg"
            alt=""
            class="h-full w-full object-cover brightness-50 bg-gradient-to-t from-black to-transparent"
          />
        </div>
        <div
          class="content-around flex flex-col items-center justify-center w-full h-full px-6 -mt-6"
        >
          <div class="max-w-4xl w-full text-center">
  
            <div class="text-center">
              <h1
                class="text-5xl font-extrabold tracking-tight uppercase text-cota-secondary"
              >
              About Us
              </h1>
              <p class="mt-6 text-lg leading-8 text-gray-100">
                code.talks is amazing you should come 😎
              </p>
            

              <div class="mt-10 flex items-center justify-center gap-x-6">
                <a
                  @click="dialogOpen = true"
                  class="rounded-md px-3.5 py-2 text-sm font-semibold text-cota-on-primary bg-cota-primary"
                  >Watch Recap</a
                >
              </div>
            </div>
          </div>
  
        </div>
        <div
          class="absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]"
          aria-hidden="true"
        >
          <div
            class="relative left-[calc(50%+3rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-20 sm:left-[calc(50%+36rem)] sm:w-[72.1875rem]"
            style="
              clip-path: polygon(
                74.1% 44.1%,
                100% 61.6%,
                97.5% 26.9%,
                85.5% 0.1%,
                80.7% 2%,
                72.5% 32.5%,
                60.2% 62.4%,
                52.4% 68.1%,
                47.5% 58.3%,
                45.2% 34.5%,
                27.5% 76.7%,
                0.1% 64.9%,
                17.9% 100%,
                27.6% 76.8%,
                76.1% 97.7%,
                74.1% 44.1%
              );
            "
          />
        </div>
      </div>
    </div>
    <Dialog
      @close="dialogClosed"
      :open="dialogOpen"
      class="fixed inset-0 flex items-center justify-center z-20"
    >
      <div
        class="fixed inset-0 bg-black bg-opacity-50"
        @click="dialogOpen = false"
      ></div>
      <DialogPanel
        class="relative mx-auto p-1 rounded-md text-sm font-semibold text-cota-green shadow-lg backdrop-filter backdrop-blur-md bg-gradient-to-br firefox:bg-opacity-90 from-10% from-white/30 to-85% to-white/5 bg-frosted-glass-texture/50 z-30"
      >
        <iframe
          v-if="dialogOpen"
          class="rounded-lg"
          :width="iframeWidth"
          :height="iframeHeight"
          id="youtubeVideo"
          :src="recapVideo"
          frameborder="0"
          allow="autoplay; encrypted-media"
          allowfullscreen
        ></iframe>
      </DialogPanel>
    </Dialog>
  </div>
</template>

<script setup lang="ts">

import { ref, computed } from "vue";
import { Dialog, DialogPanel } from "@headlessui/vue";

const dialogOpen = ref(false);
const recapVideo = ref(
  "https://www.youtube.com/embed/Kx5N5QK3rOE?enablejsapi=1&autoplay=1&mute=1"
);

const iframeWidth = computed(() => {
  return Math.min(window.innerWidth * 0.9, 560);
});

const iframeHeight = computed(() => {
  return (iframeWidth.value * 9) / 16;
});


const dialogClosed = () => {
  console.log('closing');
};

watch(dialogOpen, (newVal) => {
  const iframe = document.getElementById("youtubeVideo") as HTMLIFrameElement;
  if (iframe) {
    const message = newVal ? "playVideo" : "pauseVideo";
    iframe.contentWindow?.postMessage(
      `{"event":"command","func":"${message}","args":""}`,
      "*"
    );
  }
});

</script>

<style scoped>
</style>

