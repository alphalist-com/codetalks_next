<template>
  <div>

  <div class="bg-transparent sm:py-8 z-10 -mx-10 sm:-mx-0">
    <div class="text-center">
      <SectionHeader>
        {{ title }}
        <SectionHeaderHighlightText :text="titleHighlight!" />
      </SectionHeader>
      <SectionSubHeadline class="mt-4 px-16 sm:mx-10">{{
        subtitle
      }}</SectionSubHeadline>
    </div>
    <ul
      role="list"
      class="mx-auto max-w-fit mt-12 grid grid-cols-2 gap-6 px-4 sm:grid-cols-3 sm:px-6 md:grid-cols-4 xl:grid-cols-6 relative"
    >
      <div
        class="z-20 absolute bottom-0 left-0 right-0 h-1/2 bg-gradient-to-t from-cota-background from-20% to-transparent to-100%"
      ></div>

      <li
        v-for="speaker in getSpeakers"
        :key="speaker.name"
        class="relative flex flex-col items-center w-40 h-64 cursor-pointer"
      >
        <div
          class="relative w-full h-full cota-material rounded-lg overflow-hidden"
        >
          <img
            class="w-full h-full object-cover"
            :src="speaker.imageUrl"
            :alt="speaker.name"
          />
          <div
            class="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black to-transparent p-2"
          >
            <div class="grid grid-cols-10">
              <p
                class="col-span-10 text-md text-clip line-clamp-1 font-semibold text-white"
              >
                {{ speaker.name }}
              </p>
              <p
                class="col-span-10 text-sm text-ellipsis line-clamp-1 text-gray-300"
              >
                {{ speaker.position }}
              </p>
              <p
                class="col-span-9 text-sm text-clip h-4 line-clamp-1 text-gray-300"
              >
                {{ speaker.company }}
              </p>
              <button
                class="col-span-1 items-center justify-center w-4 h-4 cota-material rounded-full"
              >
                <p class="text-cota-primary text-xs">i</p>
              </button>
            </div>
          </div>
        </div>
      </li>
    </ul>
    <div
      class="flex flex-col sm:flex-row items-center justify-center gap-x-6 mx-14"
    >
      <PrimaryBtn link="/speakers">Explore speaker</PrimaryBtn>
    </div>
  </div>

  </div>
</template>

<script setup lang="ts">
import type { Button } from "@/utils/types/button";
import type { Speaker } from "@/utils/types/speaker";

const dialogOpen = ref(false);

const dialogClosed = () => {
  dialogOpen.value = false;
};


const props = defineProps({
  title: String,
  titleHighlight: String,
  subtitle: String,
  buttons: Array<Button>,
  speakerList: Array<Speaker>,
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
