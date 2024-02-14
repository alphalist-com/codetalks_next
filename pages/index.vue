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
  { url: "/landing_page/gallery_01.jpg", focusPoint: "50% 50%" },
  { url: "/landing_page/gallery_02.jpg", focusPoint: "50% 50%" },
  { url: "/landing_page/gallery_03.jpg", focusPoint: "50% 50%" },
  { url: "/landing_page/gallery_04.jpg", focusPoint: "50% 50%" },
  { url: "/landing_page/gallery_05.jpg", focusPoint: "50% 50%" },
  { url: "/landing_page/gallery_06.jpg", focusPoint: "50% 50%" },
  { url: "/landing_page/gallery_07.jpg", focusPoint: "50% 50%" },
  { url: "/landing_page/gallery_08.jpg", focusPoint: "50% 50%" },
  { url: "/landing_page/gallery_09.jpg", focusPoint: "50% 50%" },
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

  useSeoMeta({

    title: "code.talks Tech Conference 2024 | Hamburg | September 19-20 2024",
    description: "Join other developers and CTOs at the leading tech event which is a fixture in the DACH tech scene. Network, learn, and have fun at this tech event. It is more than a developer conference, it is a community.",
    ogTitle: "code.talks Tech Conference| Network & Learn in Hamburg September 19-20 2024",
    ogDescription: "Join the leading tech event for developers and CTOs in the DACH region. Experience unparalleled networking and learning opportunities",
    ogImage: "https://codetalks.com/landing_page/slider_1.jpeg",
    ogType: 'website',
    ogUrl: 'https://codetalks.com',
    ogSiteName: 'code.talks',
    twitterSite: '@codetalkshh',
    ogTitle: 'code.talks Tech Conference| Network & Learn in Hamburg September 19-20 2024',
    ogDescription: 'Join the leading tech event for developers and CTOs in the DACH region. Experience unparalleled networking and learning opportunities',
    twitterCard: 'summary_large_image',
    twitterTitle:'code.talks Tech Conference 2024 | Hamburg | September 19-20 2024', 
    twitterDescription: 'Join the leading tech event for developers and CTOs in the DACH region. Experience unparalleled networking and learning opportunities',
    ogVideo: {
      url: "https://www.youtube.com/watch?v=Kx5N5QK3rOE",
      type: "video/mp4",
      width: "1280",
      height: "720",
  });

  useSchemaOrg([


    defineEvent({
      name: 'code.talks 2024',
      eventStatus: 'EventScheduled',
      eventAttendanceMode: 'OfflineEventAttendanceMode',
      startDate: '"2024-09-19T08:00',
      endDate: '"2024-09-20T23:00',
      location: [
        definePlace({
          name: 'CCH - Congress Center Hamburg',
          address: {
            streetAddress: 'Congresspl. 1',
            addressLocality: 'Hamburg',
            postalCode: '20355',
            addressCountry: 'DE',
          }
        })],
      organizer: {
        name: 'code.talks',
        url: 'https://codetalks.com',
      },
      description: 'Join other developers and CTOs at the leading tech event in the DACH region. code.talks Tech Conference is a two-day event in Hamburg that brings together the brightest minds in technology to network, learn, and innovate together. Organized by code.talks.de and alphalist, its more than a developer conference; its a community.',

    })
  ]);
</script>
