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
      "More than 130 national and international speakers will provide their professional insights on current and future trends from the tech scene to you on eight stages. Choose your favorite!",
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

  useSeoMeta({
    title: 'code.talks Tech Conference 2024 | Hamburg | September 19-20 2024',
    ogType: 'website',
    ogUrl: 'https://codetalks.com',
    ogSiteName: 'code.talks',
    twitterSite: '@codetalkshh',
    description: 'Join other developers and CTOs at the leading tech event which is a fixture in the DACH tech scene. Network, learn, and have fun at this tech event. It is more than a developer conference, it is a community.',
    ogTitle: 'code.talks Tech Conference| Network & Learn in Hamburg September 19-20 2024',
    ogDescription: 'Join the leading tech event for developers and CTOs in the DACH region. Experience unparalleled networking and learning opportunities',
    ogImage: '/landing_page/slider_1.jpeg',
    twitterCard: 'summary_large_image',
    twitterTitle:'code.talks Tech Conference 2024 | Hamburg | September 19-20 2024', 
    twitterDescription: 'Join the leading tech event for developers and CTOs in the DACH region. Experience unparalleled networking and learning opportunities',
    ogVideo: {
      url: "https://www.youtube.com/watch?v=Kx5N5QK3rOE",
      type: "video/mp4",
      width: "1280",
      height: "720",
  },
  });
</script>
