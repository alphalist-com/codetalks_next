<template>
  <div class="bg-transparent sm:py-8 z-10 -mx-10 sm:-mx-0">
    <div class="text-center">
      <h2 class="text-3xl font-extrabold tracking-tight text-cota-secondary sm:text-4xl">
        {{ title }} <span class="text-cota-primary font-extralight">{{ titleHighlight }}</span>
      </h2>
      <p class="mt-4 px-16 sm:mx-10 text-xl leading-8 text-cota-secondary">{{ subtitle }}</p>
    </div>
      <ul
      role="list"
      class="mx-auto max-w-fit mt-12 grid grid-cols-2 gap-6 px-4 sm:grid-cols-3 sm:px-6 md:grid-cols-4 xl:grid-cols-6"
    >
      <li
        v-for="speaker in getSpeakers"
        :key="speaker.name"
        class="relative flex flex-col items-center w-40 h-64 rounded-md p-1 hover:p-0 transition-all text-sm font-semibold text-cota-green shadow-lg backdrop-filter backdrop-blur-md bg-gradient-to-br firefox:bg-opacity-90 from-10% from-white/30 to-85% to-white/5 bg-frosted-glass-texture/50"
      >
        <div
          class="relative w-full h-full rounded-md overflow-hidden shadow-lg"
        >
          <img
            class="absolute top-0 left-0 w-full h-full object-cover"
            :src="speaker.imageUrl"
            :alt="speaker.name"
          />
          <div
            class="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black to-transparent p-2"
          >
            <h3 class="text-lg font-semibold text-white">{{ speaker.name }}</h3>
            <p class="text-sm text-gray-300">{{ speaker.position }}</p>
          </div>
        </div>
      </li>
    </ul>
    <div class="mt-10 flex flex-col sm:flex-row  items-center justify-center gap-x-6 mx-14">
      <a
        v-for="button in buttons"
        :key="button.text"
        :href="button.link"
        class="rounded-md px-3.5 py-2 mb-4 text-md font-semibold text-cota-on-primary bg-cota-primary"
      >
        {{ button.text }} <span v-if="button.arrow" aria-hidden="true">→</span>
      </a>
    </div>
  </div>
</template>


<script setup lang="ts">

import type { Button } from '@/utils/types/button';
import type { Speaker } from '@/utils/types/speaker';
import { defineProps } from 'vue';


const props = defineProps({
  title: String,
  titleHighlight: String,
  subtitle: String,
  buttons: Array<Button>,
  speakerList: Array<Speaker>
});


const getSpeakers = computed(() => {
  if (props.speakerList != null) {
    return props.speakerList;
  }
  return speakers;
});

const speakers = [
  {
    name: "Ivan Notaroš",
    position: "Tech Artist",
    company: "nothke",
    imageUrl:
      "https://codetalks.de/storage/images/persons/thumbnails/Ivan_Notaroš-7dae29ae2a9e396ddc8a8038bab1c8d1.png",
  },
  {
    name: "Philipp Gentz",
    company: "Synatix GmbH",
    position: "Team Lead und Developer",
    imageUrl:
      "https://codetalks.de/storage/images/persons/thumbnails/Philipp_Gentz-6f8dd39ab6ed605242bada98754410ad.jpg",
  },
  {
    name: "Jonas Jaenicke",
    position: "Consultant",
    company: "Netlight Consulting GmbH",
    imageUrl:
      "https://codetalks.de/storage/images/persons/thumbnails/Jonas_Jaenicke-0f85e566c5cbca2d77950366854e2a2d.jpg",
  },
  {
    name: "Rami Ismail",
    position: "Executive Director",
    company: "Rami Ismail",
    imageUrl:
      "https://codetalks.de/storage/images/persons/thumbnails/Rami_Ismail-b5c8a6a1481f13506be50cab18d3e66a.png",
  },
  {
    name: "Anna Nadeina",
    position: "Head of Growth @saas.group",
    company: "saas.group",
    imageUrl:
      "https://codetalks.de/storage/images/persons/thumbnails/Anna_Nadeina-c3cf26fc15e3f2218aaad45cf50dbfa3.jpg",
  },
  {
    name: "Barbara Wittenberg",
    position: "CTO",
    company: "1KOMMA5°",
    imageUrl:
      "https://codetalks.de/storage/images/persons/thumbnails/Barbara_Wittenberg-10c929c0881d0c86b859a22161bef757.jpg",
  },
  {
    name: "Anna Nadeina",
    position: "Head of Growth @saas.group",
    company: "saas.group",
    imageUrl:
      "https://codetalks.de/storage/images/persons/thumbnails/Anna_Nadeina-c3cf26fc15e3f2218aaad45cf50dbfa3.jpg",
  },
  {
    name: "Barbara Wittenberg",
    position: "CTO",
    company: "1KOMMA5°",
    imageUrl:
      "https://codetalks.de/storage/images/persons/thumbnails/Barbara_Wittenberg-10c929c0881d0c86b859a22161bef757.jpg",
  },
  
  {
    name: "Philipp Gentz",
    company: "Synatix GmbH",
    position: "Team Lead und Developer",
    imageUrl:
      "https://codetalks.de/storage/images/persons/thumbnails/Philipp_Gentz-6f8dd39ab6ed605242bada98754410ad.jpg",
  },
  {
    name: "Ivan Notaroš",
    position: "Tech Artist",
    company: "nothke",
    imageUrl:
      "https://codetalks.de/storage/images/persons/thumbnails/Ivan_Notaroš-7dae29ae2a9e396ddc8a8038bab1c8d1.png",
  },
  {
    name: "Jonas Jaenicke",
    position: "Consultant",
    company: "Netlight Consulting GmbH",
    imageUrl:
      "https://codetalks.de/storage/images/persons/thumbnails/Jonas_Jaenicke-0f85e566c5cbca2d77950366854e2a2d.jpg",
  },
  {
    name: "Rami Ismail",
    position: "Executive Director",
    company: "Rami Ismail",
    imageUrl:
      "https://codetalks.de/storage/images/persons/thumbnails/Rami_Ismail-b5c8a6a1481f13506be50cab18d3e66a.png",
  },
];
</script>
