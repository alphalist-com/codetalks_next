<template>
  <div class="bg-cota-background">
    <div class="-mt-16 h-screen">
      <div class="relative isolate overflow-hidden h-full pt-14" id="hero">
        <div class="absolute inset-0 -z-10">
          <img
            src="https://codetalks.de/img/sections/hero/programPage.jpg"
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
                Program
              </h1>
              <p class="mt-6 text-lg leading-8 text-gray-100">
                Our program will be announced soon. Subscribe to our newsletter
                to stay up to date!
              </p>

              <div class="mt-10 flex items-center justify-center gap-x-6">
                <NuxtLink
                  href="#newsletter"
                  class="rounded-md px-3.5 py-2 text-sm font-semibold text-cota-on-primary bg-cota-primary"
                  >Subscribe</NuxtLink
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

    <div class="py-14 px-12">
      <h1
        class="text-4xl font-bold tracking-tight text-cota-secondary sm:text-6xl text-center mb-12"
      >
        Checkout some of the great talks from our previous events
        <!-- <span class="text-cota-primary font-thin">HORIZON!</span> -->
      </h1>
      <div
        class="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-14 lg:gap-6"
      >
        <div
          v-for="video in videos"
          :key="video.id"
          @click="openDialog(video.id)"
          class="cursor-pointer rounded-lg overflow-hidden shadow-md shadow-cota-secondary"
        >
          <img :src="video.thumbnailUrl" :alt="video.title" class="w-full" />
        </div>
      </div>

      <div class="flex items-center justify-center gap-x-6 mt-12">
        <NuxtLink
          href="https://www.youtube.com/@code.talksbyalphalist"
          class="rounded-md px-3.5 py-2 text-sm font-semibold text-cota-on-primary bg-cota-primary"
          >Explore more Videos</NuxtLink
        >
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
          :src="currentVideoUrl"
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
import type { Video } from "@/utils/types/video";

const dialogOpen = ref(false);
const currentVideoId = ref("");

const openDialog = (videoId: string) => {
  currentVideoId.value = videoId;
  dialogOpen.value = true;
};

const dialogClosed = () => {
  dialogOpen.value = false;
};

const iframeWidth = computed(() => Math.min(window.innerWidth * 0.9, 560));
const iframeHeight = computed(() => (iframeWidth.value * 9) / 16);

const currentVideoUrl = computed(() => {
  return `https://www.youtube.com/embed/${currentVideoId.value}?enablejsapi=1&autoplay=1&mute=1`;
});

const videos: Video[] = [
  {
    id: "9Mq6NTLGHtM",
    title: "Introduction to Return Oriented Exploitation on ARM64",
    thumbnailUrl: "https://img.youtube.com/vi/9Mq6NTLGHtM/mqdefault.jpg",
  },
  {
    id: "FH5ek7LEd2U",
    title: "Out of Office: The future of work is anywhere",
    thumbnailUrl: "https://img.youtube.com/vi/FH5ek7LEd2U/mqdefault.jpg",
  },
  {
    id: "iS__wLPgfPg",
    title: "From Good to SOLID: How to become a better developer",
    thumbnailUrl: "https://img.youtube.com/vi/iS__wLPgfPg/mqdefault.jpg",
  },
  {
    id: "jCHJNt6FR-4",
    title: "Digitalpolitik 2018 - geht da noch was?",
    thumbnailUrl: "https://img.youtube.com/vi/jCHJNt6FR-4/mqdefault.jpg",
  },
  {
    id: "76S1vIbt1-Y",
    title:
      "Alles Klamotte oder was? Erfahrungsbericht von der Herausforderung einem Bären Beine zu machen!",
    thumbnailUrl: "https://img.youtube.com/vi/76S1vIbt1-Y/mqdefault.jpg",
  },
  {
    id: "SqCRhjnBxAU",
    title:
      "Panel Diskussion mit dem Hamburger Bürgermeister zur digitalen Ausbildung, Weiterbildung und Stadt",
    thumbnailUrl: "https://img.youtube.com/vi/SqCRhjnBxAU/mqdefault.jpg",
  },
];
</script>

<style scoped></style>
