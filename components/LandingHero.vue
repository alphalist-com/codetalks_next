<template>
  <div>
    <div class="-mt-16 h-screen">
      <div class="relative isolate h-full overflow-hidden pt-14" id="hero">
        <div class="absolute inset-0 -z-10">
          <video
            id="backgroundVideo"
            autoplay
            loop
            muted
            playsinline
            alt="codetalks-loop"
            class="h-full w-full bg-gradient-to-t from-black to-transparent object-cover brightness-50"
          >
            <source src="/background_video/cota.webm" type="video/webm" />
            <source src="/background_video/cota.mp4" type="video/mp4" />
          </video>
        </div>
        <div
          class="-mt-6 flex h-full w-full flex-col content-around items-center justify-center px-6"
        >
          <div class="w-full max-w-4xl text-center">
            <div class="mb-8 flex justify-center sm:mb-8 sm:flex">
              <div
                class="relative rounded-full px-3 py-1 text-sm leading-6 text-gray-400 ring-1 ring-white/10 hover:ring-white/20"
              >
                Become a
                <NuxtLink
                  href="https://app.codetalks.com/call-for-papers"
                  class="font-semibold text-white"
                  ><span class="absolute inset-0" aria-hidden="true" />Speaker
                  <span aria-hidden="true">&rarr;</span></NuxtLink
                >
              </div>
            </div>
            <div class="text-center">
              <HeroHeadline>
                Germany's Greatest Developer Conference
              </HeroHeadline>
              <HeroSubHeadline class="mt-6 lg:mt-11">
                19. & 20. September 2024 in Hamburg
              </HeroSubHeadline>

              <div
                class="mt-12 grid grid-cols-1 items-center justify-evenly gap-6"
              >
                <NuxtLink
                  @click="showTicketShop"
                  class="cursor-pointer justify-self-center rounded-md bg-cota-primary px-3.5 py-2 text-sm font-semibold uppercase text-cota-on-primary"
                  >Get your ticket</NuxtLink
                >

                <NuxtLink
                  class="mt-6 cursor-pointer text-sm font-semibold text-white"
                  @click="dialogOpen = true"
                  >RECAP MOVIE 2023 <span aria-hidden="true">></span></NuxtLink
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
      class="fixed inset-0 z-20 flex items-center justify-center"
    >
      <div
        class="fixed inset-0 bg-black bg-opacity-50"
        @click="dialogOpen = false"
      ></div>
      <DialogPanel
        class="text-cota-green relative z-30 mx-auto rounded-lg border-2 border-cota-primary bg-cota-background p-1 text-sm font-semibold shadow-lg backdrop-blur-md backdrop-filter"
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
import { ref, onMounted, watch, computed } from "vue";
import { Dialog, DialogPanel } from "@headlessui/vue";

const dialogOpen = ref(false);
const videoRef = ref<HTMLVideoElement | null>(null);
const recapVideo = ref(
  "https://www.youtube.com/embed/Kx5N5QK3rOE?enablejsapi=1&autoplay=1&mute=1",
);

type showTicketShopFunction = (details: any) => void;

const showTicketShop = inject<showTicketShopFunction>("showTicketShop", () => {
  console.log("Undefined showTicketShopCall to show TicketShop");
});

const iframeWidth = computed(() => {
  return Math.min(window.innerWidth * 0.9, 560);
});

const iframeHeight = computed(() => {
  return (iframeWidth.value * 9) / 16;
});

const pauseBgVideo = () => {
  videoRef.value?.pause();
};

const playBgVideo = () => {
  videoRef.value?.play();
};

const dialogClosed = () => {
  playBgVideo();
};

onMounted(() => {
  videoRef.value = document.getElementById(
    "backgroundVideo",
  ) as HTMLVideoElement | null;
});

watch(dialogOpen, (newVal) => {
  newVal ? pauseBgVideo() : playBgVideo();
  const iframe = document.getElementById("youtubeVideo") as HTMLIFrameElement;
  if (iframe) {
    const message = newVal ? "playVideo" : "pauseVideo";
    iframe.contentWindow?.postMessage(
      `{"event":"command","func":"${message}","args":""}`,
      "*",
    );
  }
});
</script>

<style scoped>
.gradient-border {
  border-width: 2px;
  border-style: solid;
  border-image: linear-gradient(from top, to right, darkblue, darkorchid) 1;
}
</style>
