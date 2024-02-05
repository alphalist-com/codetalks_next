<template>
  <div>
    <LandingHero />

    <div class="px-6 sm:px-12">
      <AboutSection class="overflow-hidden" />
      <CtaSection class="mt-12" :items="ctas" />
      <NetworkBrandSection class="mt-12" />
      <GallerySection class="mt-12" :imageInfos="pictures" />
      <FactsSection class="mt-12" />
      <div class="-mx-12 bg-transparent sm:py-8 z-10">
        <div class="text-center">
          <SectionHeader>
            OUR
            <SectionHeaderHighlightText text="SPEAKERS!" />
          </SectionHeader>
          <SectionSubHeadline class="mt-4 px-16 sm:mx-10">
            Whether they are legends of the tech scene, authors, or
            professionals in their field, we curate the most relevant experts
            for you and your daily work.
          </SectionSubHeadline>
        </div>
        <PersonTileList
          :fade-out="true"
          :person-array="speakers"
        ></PersonTileList>
        <div class="flex items-center justify-center gap-x-6 mx-14">
          <PrimaryBtn link="/speakers">Explore speakers</PrimaryBtn>
        </div>
      </div>
      <PartnerSection class="mt-40 lg:mt-12" />
      <CurrentPartnersSection class="mt-20" />
    </div>
  </div>
</template>

<script lang="ts" setup>
import { ref, onMounted } from "vue";
import type { Person } from "~/utils/types/person";

import { provide, ref } from 'vue';
import DialogComponent from '@/components/DialogComponent.vue';

const personData = ref({});
const showDialog = ref(false);

const openDialogWithPerson = (data) => {
  personData.value = data;
  showDialog.value = true;
};

provide('openDialogWithPerson', openDialogWithPerson);

const pictures = [
  { url: "/landing_page/slider_1.jpeg", focusPoint: "50% 50%" },
  { url: "/landing_page/slider_2.jpeg", focusPoint: "50% 50%" },
  { url: "/landing_page/slider_3.jpeg", focusPoint: "50% 50%" },
  { url: "/landing_page/slider_4.jpeg", focusPoint: "50% 50%" },
  { url: "/landing_page/slider_5.jpeg", focusPoint: "50% 50%" },
  { url: "/landing_page/slider_6.jpeg", focusPoint: "50% 50%" },
  { url: "/landing_page/slider_7.jpeg", focusPoint: "50% 50%" },
  { url: "/landing_page/slider_8.jpeg", focusPoint: "50% 50%" },
  { url: "/landing_page/slider_9.jpeg", focusPoint: "50% 50%" },
  { url: "/landing_page/slider_10.jpeg", focusPoint: "50% 50%" },
  { url: "/landing_page/slider_11.jpeg", focusPoint: "50% 50%" },
  { url: "/landing_page/slider_12.jpeg", focusPoint: "20% 50%" },
  { url: "/landing_page/slider_13.jpeg", focusPoint: "50% 25%" },
  { url: "/landing_page/slider_14.jpeg", focusPoint: "50% 50%" },
  { url: "/landing_page/slider_15.jpeg", focusPoint: "50% 50%" },
];

const ctas = [
  {
    name: "MEET",
    description:
      "For over 10 years, the two-day code.talks event has been annually bringing together over 3000 developers and top companies from the entire tech industry.",
    icon: "🌍",
    cta: "See more",
  },
  {
    name: "TALK",
    description:
      "More than 130 national and international speakers will provide their professional insights on current and future trends from the tech scene to you on eight stages. Choose your favourite!",
    icon: "👋",
    cta: "See more",
  },
  {
    name: "CODE",
    description:
      "Don't miss out on the legendary after conference party on the first day of the event and try out the latest tech gadgets or play some never-forgotten game classics.",
    icon: "💻",
    cta: "See more",
  },
];

const speakers: Array<Person> = [
  {
    name: "Ivan Notaroš",
    position: "Tech Artist",
    company: "nothke",
    image:
      "https://codetalks.de/storage/images/persons/thumbnails/Ivan_Notaroš-7dae29ae2a9e396ddc8a8038bab1c8d1.png",
    detailedInfos: "temp",
  },
  {
    name: "Philipp Gentz",
    company: "Synatix GmbH",
    position: "Team Lead und Developer",
    image:
      "https://codetalks.de/storage/images/persons/thumbnails/Philipp_Gentz-6f8dd39ab6ed605242bada98754410ad.jpg",
    detailedInfos: "temp",
  },
  {
    name: "Jonas Jaenicke",
    position: "Consultant",
    company: "Netlight Consulting GmbH",
    image:
      "https://codetalks.de/storage/images/persons/thumbnails/Jonas_Jaenicke-0f85e566c5cbca2d77950366854e2a2d.jpg",
    detailedInfos: "temp",
  },
  {
    name: "Rami Ismail",
    position: "Executive Director",
    company: "Rami Ismail",
    image:
      "https://codetalks.de/storage/images/persons/thumbnails/Rami_Ismail-b5c8a6a1481f13506be50cab18d3e66a.png",
    detailedInfos: "temp",
  },
  {
    name: "Anna Nadeina",
    position: "Head of Growth @saas.group",
    company: "saas.group",
    image:
      "https://codetalks.de/storage/images/persons/thumbnails/Anna_Nadeina-c3cf26fc15e3f2218aaad45cf50dbfa3.jpg",
    detailedInfos: "temp",
  },
  {
    name: "Barbara Wittenberg",
    position: "CTO",
    company: "1KOMMA5°",
    image:
      "https://codetalks.de/storage/images/persons/thumbnails/Barbara_Wittenberg-10c929c0881d0c86b859a22161bef757.jpg",
    detailedInfos: "temp",
  },
  {
    name: "Anna Nadeina",
    position: "Head of Growth @saas.group",
    company: "saas.group",
    image:
      "https://codetalks.de/storage/images/persons/thumbnails/Anna_Nadeina-c3cf26fc15e3f2218aaad45cf50dbfa3.jpg",
    detailedInfos: "temp",
  },
  {
    name: "Barbara Wittenberg",
    position: "CTO",
    company: "1KOMMA5°",
    image:
      "https://codetalks.de/storage/images/persons/thumbnails/Barbara_Wittenberg-10c929c0881d0c86b859a22161bef757.jpg",
    detailedInfos: "temp",
  },

  {
    name: "Philipp Gentz",
    company: "Synatix GmbH",
    position: "Team Lead und Developer",
    image:
      "https://codetalks.de/storage/images/persons/thumbnails/Philipp_Gentz-6f8dd39ab6ed605242bada98754410ad.jpg",
    detailedInfos: "temp",
  },
  {
    name: "Ivan Notaroš",
    position: "Tech Artist",
    company: "nothke",
    image:
      "https://codetalks.de/storage/images/persons/thumbnails/Ivan_Notaroš-7dae29ae2a9e396ddc8a8038bab1c8d1.png",
    detailedInfos: "temp",
  },
  {
    name: "Jonas Jaenicke",
    position: "Consultant",
    company: "Netlight Consulting GmbH",
    image:
      "https://codetalks.de/storage/images/persons/thumbnails/Jonas_Jaenicke-0f85e566c5cbca2d77950366854e2a2d.jpg",
    detailedInfos: "temp",
  },
  {
    name: "Rami Ismail",
    position: "Executive Director",
    company: "Rami Ismail",
    image:
      "https://codetalks.de/storage/images/persons/thumbnails/Rami_Ismail-b5c8a6a1481f13506be50cab18d3e66a.png",
    detailedInfos: "temp",
  },
];
</script>

<style></style>
