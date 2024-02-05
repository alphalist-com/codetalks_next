<template>
  <div class="bg-cota-background">
    <HeroSection>
      <template v-slot:background>
        <HeroBgImage image-url="/partner_page/hero.jpeg"></HeroBgImage>
      </template>
      <HeroHeadline> Partners </HeroHeadline>
      <HeroSubHeadline class="lg:mt-11 mt-6">
        Present your company at one of the leading developer conferences,
        network with like-minded people and share your experiences with the
        community.
      </HeroSubHeadline>
      <div class="mt-10 flex items-center justify-center gap-x-6">
        <PrimaryBtn link="#">BECOME A PARTNER</PrimaryBtn>
      </div>
    </HeroSection>
    <CtaSection class="mt-12" :items="ctas" />
    <div class="mx-auto mt-12 max-w-6xl text-center">
      <SectionHeader class="px-12"
        >WHAT <SectionHeaderHighlightText text="PARTNERSHIP" /> MEANS TO
        US</SectionHeader
      >
      <NormalTextBlock class="mx-auto px-12">
        At code.talks, a partnership means embarking on a journey of
        collaboration and innovation, where we work hand-in-hand to create
        meaningful experiences and drive the tech community forward. It's about
        building relationships that not only showcase your brand's strengths but
        also contribute to the growth and enrichment of the entire tech
        ecosystem.
      </NormalTextBlock>
    </div>

    <GallerySection class="px-12" :image-infos="pictures" />
    <div class="py-12">
      <div class="text-center">
        <SectionHeader
          >Big <SectionHeaderHighlightText text="shout-out"
        /></SectionHeader>
        <SectionSubHeadline class="px-6 sm:px-12"
          >This year we like to say thank you to our beloved partners in
          code.</SectionSubHeadline
        >
      </div>
      <div class="mt-12 px-6 sm:px-12 max-w-7xl mx-auto">
        <div
          class="mt-12 py-12 text-center items-center cota-material rounded-3xl px-6 sm:px-12 backdrop-blur-md filter bg-white/10 shadow-[inset_0_0_15px_1px_rgba(0,0,0,1.0)]"
        >
          <PartnerClassText>Headliner</PartnerClassText>
          <div
            class="py-12 grid grid-cols-1 sm:grid-cols-2 gap-y-16 place-items-center"
          >
            <NuxtLink
              :href="headliner.link"
              v-for="headliner in headlinerPartner"
            >
              <img class="h-56" :src="headliner.logo" :alt="headliner.name" />
            </NuxtLink>
          </div>
        </div>

        <div
          class="mt-12 py-12 text-center items-center cota-material rounded-3xl px-6 sm:px-12 backdrop-blur-md filter bg-white/10 shadow-[inset_0_0_15px_1px_rgba(0,0,0,1.0)]"
        >
          <PartnerClassText>PRemium</PartnerClassText>
          <div
            class="py-12 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:md:grid-cols-4 gap-y-16 place-items-center"
          >
            <NuxtLink
              :href="headliner.link"
              v-for="headliner in premiumPartner"
            >
              <img class="h-40" :src="headliner.logo" :alt="headliner.name" />
            </NuxtLink>
          </div>
        </div>

        <div
          class="mt-12 py-12 text-center items-center cota-material rounded-3xl px-6 sm:px-12 backdrop-blur-md filter bg-white/10 shadow-[inset_0_0_15px_1px_rgba(0,0,0,1.0)]"
        >
          <PartnerClassText>TRAILBLAZERS</PartnerClassText>
          <div
            class="py-12 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:md:grid-cols-4 gap-y-16 place-items-center"
          >
            <NuxtLink
              :href="headliner.link"
              v-for="headliner in trailblazersPartner"
            >
              <img class="h-28" :src="headliner.logo" :alt="headliner.name" />
            </NuxtLink>
          </div>
        </div>

        <div
          class="mt-12 py-12 text-center items-center cota-material rounded-3xl px-6 sm:px-12 backdrop-blur-md filter bg-white/10 shadow-[inset_0_0_15px_1px_rgba(0,0,0,1.0)]"
        >
          <PartnerClassText>FEELGOOD</PartnerClassText>
          <div
            class="py-12 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:md:grid-cols-4 gap-y-16 place-items-center"
          >
            <NuxtLink
              :href="headliner.link"
              v-for="headliner in feelgoodPartner"
            >
              <img class="h-28" :src="headliner.logo" :alt="headliner.name" />
            </NuxtLink>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
const pictures = [
  {
    url: "/partner_page/slider_1.jpeg",
    focusPoint: "50% 30%",
  },
  {
    url: "/partner_page/slider_2.jpeg",
    focusPoint: "80% 20%",
  },
  { url: "/partner_page/slider_3.jpeg", focusPoint: "20% 80%" },
  { url: "/partner_page/slider_4.jpeg", focusPoint: "50% 30%" },
  { url: "/partner_page/slider_5.jpeg", focusPoint: "50% 50%" },
  { url: "/partner_page/slider_6.jpeg", focusPoint: "50% 50%" },
  { url: "/partner_page/slider_7.jpeg", focusPoint: "50% 50%" },
  { url: "/partner_page/slider_8.jpeg", focusPoint: "50% 50%" },
  { url: "/partner_page/slider_9.jpeg", focusPoint: "50% 50%" },
  { url: "/partner_page/slider_10.jpeg", focusPoint: "50% 50%" },
  { url: "/partner_page/slider_11.jpeg", focusPoint: "50% 50%" },
  { url: "/partner_page/slider_12.jpeg", focusPoint: "50% 50%" },
  { url: "/partner_page/slider_13.jpeg", focusPoint: "50% 50%" },
  { url: "/partner_page/slider_14.jpeg", focusPoint: "50% 50%" },
];

const ctas = [
  {
    name: "INSPIRE",
    description:
      "Inspire others and share your expertise in lectures and live coding sessions with the developer community.",
    icon: "👥",
  },
  {
    name: "CONNECT",
    description:
      "Become part of the community and network with developers from many different fields at code.talks.",
    icon: "💡",
  },
  {
    name: "BRAND",
    description:
      "Increase brand awareness and reach your target group and audience in an authentic environment.",
    icon: "📋",
  },
];

const headlinerPartner = [
  {
    name: "Apple",
    logo: "/network_logos/Apple_white.png",
    link: "https://www.apple.com",
  },
  {
    name: "Apple",
    logo: "/network_logos/Apple_white.png",
    link: "https://www.apple.com",
  },
];

const premiumPartner = [
  {
    name: "Apple",
    logo: "/network_logos/Apple_white.png",
    link: "https://www.apple.com",
  },
  {
    name: "Apple",
    logo: "/network_logos/Apple_white.png",
    link: "https://www.apple.com",
  },
  {
    name: "Apple",
    logo: "/network_logos/Apple_white.png",
    link: "https://www.apple.com",
  },
  {
    name: "Apple",
    logo: "/network_logos/Apple_white.png",
    link: "https://www.apple.com",
  },
];

const trailblazersPartner = [
  {
    name: "Apple",
    logo: "/network_logos/Apple_white.png",
    link: "https://www.apple.com",
  },
  {
    name: "Apple",
    logo: "/network_logos/Apple_white.png",
    link: "https://www.apple.com",
  },
  {
    name: "Apple",
    logo: "/network_logos/Apple_white.png",
    link: "https://www.apple.com",
  },
  {
    name: "Apple",
    logo: "/network_logos/Apple_white.png",
    link: "https://www.apple.com",
  },
];

const feelgoodPartner = [
  {
    name: "Apple",
    logo: "/network_logos/Apple_white.png",
    link: "https://www.apple.com",
  },
  {
    name: "Apple",
    logo: "/network_logos/Apple_white.png",
    link: "https://www.apple.com",
  },
  {
    name: "Apple",
    logo: "/network_logos/Apple_white.png",
    link: "https://www.apple.com",
  },
  {
    name: "Apple",
    logo: "/network_logos/Apple_white.png",
    link: "https://www.apple.com",
  },
];
</script>

<style scoped></style>
