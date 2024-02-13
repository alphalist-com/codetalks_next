<template>
  <div>
    <LandingHero />
    <AboutSection class="overflow-hidden" />
    <CtaSection class="mt-12 px-6 sm:px-12" :items="ctas" />
    <NetworkBrandSection class="px-6 sm:px-12" />
    <GallerySection class="mt-12 px-6 sm:px-12" :imageInfos="pictures" />
    <FactsSection class="mt-12 px-6 sm:px-12" />
    <div class="z-10 bg-transparent sm:py-8">
      <div class="text-center">
        <SectionHeader :center-align="true" element-id="our-speakers">
          OUR
          <SectionHeaderHighlightText text="SPEAKERS!" />
        </SectionHeader>
        <SectionSubHeadline class="mt-4 px-16 sm:mx-10">
          Whether they are legends of the tech scene, authors, or professionals
          in their field, we curate the most relevant experts for you and your
          daily work.
        </SectionSubHeadline>
      </div>
      <PersonTileList
        v-if="speakers"
        :fade-out="true"
        :person-array="speakers"
      ></PersonTileList>
      <div class="mx-14 flex items-center justify-center gap-x-6">
        <PrimaryBtn link="/speakers">Explore speakers</PrimaryBtn>
      </div>
    </div>
    <PartnerSection class="mt-32 lg:mt-12" />
    <CurrentPartnersSection class="mt-20" />
  </div>
</template>

<script lang="ts" setup>
import type { Person } from "~/utils/types/person";

const { data: speakers } = await useAsyncData<Person[]>("speakers", () =>
  $fetch("/default_speakers.json"),
);

const pictures = [
  { url: "/landing_page/gallery_1.jpg", focusPoint: "50% 50%" },
  { url: "/landing_page/gallery_2.jpg", focusPoint: "50% 50%" },
  { url: "/landing_page/gallery_3.jpg", focusPoint: "50% 50%" },
  { url: "/landing_page/gallery_4.jpg", focusPoint: "50% 50%" },
  { url: "/landing_page/gallery_5.jpg", focusPoint: "50% 50%" },
  { url: "/landing_page/gallery_6.jpg", focusPoint: "50% 50%" },
  { url: "/landing_page/gallery_7.jpg", focusPoint: "50% 50%" },
  { url: "/landing_page/gallery_8.jpg", focusPoint: "50% 50%" },
  { url: "/landing_page/gallery_9.jpg", focusPoint: "50% 50%" },
  { url: "/landing_page/gallery_10.jpg", focusPoint: "50% 50%" },
  { url: "/landing_page/gallery_11.jpg", focusPoint: "50% 50%" },
  { url: "/landing_page/gallery_12.jpg", focusPoint: "20% 50%" },
  { url: "/landing_page/gallery_13.jpg", focusPoint: "50% 25%" },
  { url: "/landing_page/gallery_14.jpg", focusPoint: "50% 50%" },
  { url: "/landing_page/gallery_15.jpg", focusPoint: "50% 50%" },
  { url: "/landing_page/gallery_16.jpg", focusPoint: "50% 50%" },
  { url: "/landing_page/gallery_17.jpg", focusPoint: "50% 50%" },
  { url: "/landing_page/gallery_18.jpg", focusPoint: "50% 50%" },
  { url: "/landing_page/gallery_19.jpg", focusPoint: "50% 50%" },
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
      "More than 130 national and international speakers will provide their professional insights on current and future trends from the tech scene to you on eight stages. Choose your favorite!",
    icon: "👋",
    cta: "See more",
  },
  {
    name: "PARTY",
    description:
      "Don't miss out on the legendary after conference party on the first day of the event and try out the latest tech gadgets or play some never-forgotten game classics.",
    icon: "💻",
    cta: "See more",
  },
];
</script>
