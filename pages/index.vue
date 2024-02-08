<template>
  <div>
    <LandingHero />
      <AboutSection class="overflow-hidden" />
      <CtaSection class="mt-12 px-6 sm:px-12" :items="ctas" />
      <NetworkBrandSection class="mt-12 px-6 sm:px-12" />
      <GallerySection class="mt-12 px-6 sm:px-12" :imageInfos="pictures" />
      <FactsSection class="mt-12 px-6 sm:px-12" />
      <div class="bg-transparent sm:py-8 z-10">
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
    <PartnerSection class="mt-32 lg:mt-12" />
    <CurrentPartnersSection class="mt-20" />
  </div>
</template>

<script lang="ts" setup>


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


const speakers = [
  {
    name: "John Romero",
    position: "Managing Director",
    company: "Romero Games",
    image: "https://codetalks.de/storage/images/persons/thumbnails/John_Romero-04090320358a7126b152c5173b478309.jpeg",
    detailedInfos: "601",
  },
  {
    name: "Barbara Wittenberg",
    position: "CTO",
    company: "1KOMMA5°",
    image:
      "https://codetalks.de/storage/images/persons/thumbnails/Barbara_Wittenberg-10c929c0881d0c86b859a22161bef757.jpg",
    detailedInfos: "1346",
  },
  {
    name: "David Catuhe",
    position: "Principal Software Developer Lead",
    company: "Microsoft",
    image: "https://codetalks.de/storage/images/persons/thumbnails/David_Catuhe-157a58c5cfc11dd6f25f19a55457b1e8.jpeg",
    detailedInfos: "698",
  }, 
  {
    name: "Ryan Singer",
    position: "Founder",
    company: "Felt Presence LLC",
    image: "https://codetalks.de/storage/images/persons/thumbnails/Ryan_Singer-f783ef3518af41e48fc8b82565f427d6.jpg",
    detailedInfos: "1227",
  },
  {
    name: "Katerina Trajchevska",
    position: "CEO",
    company: "Adeva",
    image: "https://codetalks.de/storage/images/persons/hh-2018/thumbnails/katerina_trajchevska-df8256e4af8446abe84e0018d75b3a9e.jpeg",
    detailedInfos: "210",
  },
  {
    name: "Krystal Campioni",
    position: "Senior Frontend Developer",
    company: "Oberlo - Shopify",
    image: "https://codetalks.de/storage/images/persons/thumbnails/Krystal_Campioni-5e432be9932ef2f3d2a4a86d5494833d.jpeg",
    detailedInfos: "6",
  },
  {
    name: "Jenny Shen",
    position: "Senior UX/Product Designer",
    company: "Jenny Shen",
    image: "https://codetalks.de/storage/images/persons/hh-2018/thumbnails/Jenny_Shen-aa81557f868ffdc117252f37425eb205.jpeg",
    detailedInfos: "234",
  },
  {
    name: "Billy Ellis",
    position: "Security Researcher",
    company: "ZygoSec",
    image: "https://codetalks.de/storage/images/persons/hh-2018/thumbnails/billy_ellis-1f8b79d6d59e3fe0d5c11fe88eb6d566.jpeg",
    detailedInfos: "76",
  },
  {
    name: "Anna Nadeina",
    position: "Head of Growth @saas.group",
    company: "saas.group",
    image:
      "https://codetalks.de/storage/images/persons/thumbnails/Anna_Nadeina-c3cf26fc15e3f2218aaad45cf50dbfa3.jpg",
    detailedInfos: "1253",
  },
  {
    name: "Nico Lumma",
    position: "Managing Partner",
    company: "next media accelerator GmbH",
    image: "https://codetalks.de/storage/images/persons/hh-2018/thumbnails/Nico_Lumma-4328190538068c08fd5b557aac45d1ed.png",
    detailedInfos: "249",
  },
  {
    name: "Jonas Jaenicke",
    position: "Consultant",
    company: "Netlight Consulting GmbH",
    image:
      "https://codetalks.de/storage/images/persons/thumbnails/Jonas_Jaenicke-0f85e566c5cbca2d77950366854e2a2d.jpg",
    detailedInfos: "1357",
  },
  {
    name: "Rami Ismail",
    position: "Executive Director",
    company: "Rami Ismail",
    image:
      "https://codetalks.de/storage/images/persons/thumbnails/Rami_Ismail-b5c8a6a1481f13506be50cab18d3e66a.png",
    detailedInfos: "1335",
  },
];

</script>

<style></style>
