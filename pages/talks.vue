<template>
  <div class="bg-cota-background">
    <HeroSection>
      <template v-slot:background>
        <HeroBgImage image-url="/talks_page/hero.jpeg"></HeroBgImage>
      </template>
      <HeroHeadline> OUR TALKS </HeroHeadline>
      <HeroSubHeadline class="mt-6 lg:mt-11">
        Our program will be announced soon. Subscribe to our newsletter to stay
        up to date!
      </HeroSubHeadline>

      <div class="mt-10 flex items-center justify-center gap-x-6">
        <PrimaryBtn link="#newsletter">Subscribe</PrimaryBtn>
      </div>
    </HeroSection>

    <div class="px-12 py-14">
      <SectionHeader class="text-center">
        Some great <SectionHeaderHighlightText text="talks" /> from our previous
        events
      </SectionHeader>
      <div
        class="mx-auto mt-12 grid max-w-7xl grid-cols-1 gap-14 md:grid-cols-2 lg:grid-cols-3 lg:gap-6"
      >
        <div
          v-for="video in videos"
          :key="video.id"
          @click="openDialog(video.id)"
          class="cursor-pointer overflow-hidden rounded-lg border border-cota-primary"
        >
          <img :src="video.thumbnailUrl" :alt="video.title" class="w-full" />
        </div>
      </div>

      <div class="mt-12 flex items-center justify-center gap-x-6">
        <NuxtLink
          href="https://www.youtube.com/@code.talksbyalphalist"
          class="rounded-md bg-cota-primary px-3.5 py-2 text-sm font-semibold text-cota-on-primary"
          >Visit our Youtube channel</NuxtLink
        >
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
useSeoMeta({
    title: "Talks | code.talks Tech Conference  | Hamburg | September 19-20 2024",
    description: "Explore the lineup of speakers and sessions at code.talks 2024, featuring the brightest minds in tech. Dive into our archives for past years' highlights and innovations",
    ogType: 'website',
    ogUrl: 'https://codetalks.com/talks',
    ogSiteName: 'code.talks',
    ogTitle: "code.talks Tech Conference| Network & Learn in Hamburg September 19-20 2024",
    ogDescription: "Explore the lineup of speakers and sessions at code.talks 2024, featuring the brightest minds in tech. Dive into our archives for past years' highlights and innovations",
    ogImage: "/talks_page/hero.jpeg",
    twitterCard: 'summary_large_image',
    twitterTitle:'Talks | code.talks Tech Conference', 
    twitterDescription: 'Explore the lineup of speakers and sessions at code.talks 2024, featuring the brightest minds in tech. Dive into our archives for past years highlights and innovations',
    keywords: "tech conference talks, Tech event speaker lineup, Developer conference sessions,code.talks speakers, technology conference agenda",
  });
</script>

<style scoped></style>
