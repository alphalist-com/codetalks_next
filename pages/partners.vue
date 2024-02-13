<template>
  <div class="bg-cota-background">
    <HeroSection>
      <template v-slot:background>
        <HeroBgImage image-url="/partner_page/hero.jpeg"></HeroBgImage>
      </template>
      <HeroHeadline> Partners </HeroHeadline>
      <HeroSubHeadline class="mt-6 lg:mt-11">
        Present your company at one of the leading developer conferences,
        network with like-minded people and share your experiences with the
        community.
      </HeroSubHeadline>
      <div class="mt-10 flex items-center justify-center gap-x-6">
        <PrimaryBtn
          link="https://airtable.com/app5zJT3rof6XVh3u/pagsqf59XbfPofkRI/form"
          >BECOME A PARTNER</PrimaryBtn
        >
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

    <p>
      {{ currentPartners?.length }}
    </p>

    <GallerySection class="px-12" :image-infos="pictures" />
    <div class="py-12" id="shout-out">
      <div class="text-center">
        <SectionHeader :center-align="true" element-id="shout-out"
          >Big <SectionHeaderHighlightText text="shout-out"
        /></SectionHeader>
        <SectionSubHeadline class="px-6 sm:px-12"
          >This year we like to say thank you to our beloved partners in
          code.</SectionSubHeadline
        >
      </div>
      <div class="mx-auto mt-12 max-w-7xl px-6 sm:px-12">
        <div
          class="cota-material mt-12 h-auto items-center rounded-3xl px-6 py-12 text-center filter backdrop-blur-md duration-300 ease-in-out sm:px-12"
        >
          <div v-if="pending || !currentPartners.partners[0]">
            <Loading />
          </div>
          <div v-else>
            <PartnerClassText>{{
              currentPartners.partners[0].sponsor_category.name_translations[1]
                .translation
            }}</PartnerClassText>

            <div class="gap-y- mt-6 flex flex-wrap justify-center gap-x-12">
              <NuxtLink
                :href="topPartner.website.url"
                v-for="topPartner in currentPartners.partners[0].slots"
              >
                <img
                  class="h-64 w-64 object-contain"
                  :src="`https://codetalks.de${topPartner.company.thumbnail_url}`"
                  :alt="topPartner.company.name"
                />
              </NuxtLink>
            </div>
          </div>
        </div>

        <div
          class="cota-material mt-12 items-center rounded-3xl px-6 py-12 text-center filter backdrop-blur-md sm:px-12"
        >
          <div v-if="pending || !currentPartners.partners[1]">
            <Loading />
          </div>
          <div v-else>
            <PartnerClassText>{{
              currentPartners.partners[1].sponsor_category.name_translations[1]
                .translation
            }}</PartnerClassText>
            <div class="mt-6 flex flex-wrap justify-center gap-12">
              <NuxtLink
                :href="topPartner.website.url"
                v-for="topPartner in currentPartners.partners[1].slots"
              >
                <img
                  class="h-40 w-40 object-contain"
                  :src="`https://codetalks.de${topPartner.company.thumbnail_url}`"
                  :alt="topPartner.company.name"
                />
              </NuxtLink>
            </div>
          </div>
        </div>

        <div
          class="cota-material mt-12 items-center rounded-3xl px-6 py-12 text-center filter backdrop-blur-md sm:px-12"
        >
          <div v-if="pending || !currentPartners.partners[2]">
            <Loading />
          </div>
          <div v-else>
            <PartnerClassText>{{
              currentPartners.partners[2].sponsor_category.name_translations[1]
                .translation
            }}</PartnerClassText>

            <div class="mt-6 flex flex-wrap justify-center gap-12">
              <NuxtLink
                :href="topPartner.website.url"
                v-for="topPartner in currentPartners.partners[2].slots"
              >
                <img
                  class="h-20 w-36 object-contain"
                  :src="`https://codetalks.de${topPartner.company.thumbnail_url}`"
                  :alt="topPartner.company.name"
                />
              </NuxtLink>
            </div>
          </div>
        </div>

        <div
          class="cota-material mt-12 items-center rounded-3xl px-6 py-12 text-center filter backdrop-blur-md sm:px-12"
        >
          <div v-if="pending || !currentPartners.partners[3]">
            <Loading />
          </div>
          <div v-else>
            <PartnerClassText>{{
              currentPartners.partners[3].sponsor_category.name_translations[1]
                .translation
            }}</PartnerClassText>

            <div class="mt-6 flex flex-wrap justify-center gap-12">
              <NuxtLink
                :href="topPartner.website.url"
                v-for="topPartner in currentPartners.partners[3].slots"
              >
                <img
                  class="h-20 w-36 object-contain"
                  :src="`https://codetalks.de${topPartner.company.thumbnail_url}`"
                  :alt="topPartner.company.name"
                />
              </NuxtLink>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
const {
  data: currentPartners,
  error,
  pending,
  refresh,
} = useAsyncData("currentPartners", () => $fetch("/api/cota/current_partners"));

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
  useSeoMeta({
    title: "Partner with Us |  code.talks tech conference",
    description: "Reach devs and CTOs in the DACH region at code.talks. Whether you want to connect with tech leaders,  market to decision makers in technology or you just showcase products to developers - code.talks is the place to go for DACH tech market exposure",
    keywords: "Sponsorship opportunities tech event,Tech event sponsorship, tech recruiting event",
    ogTitle: "Partnership Opportunities |  code.talks tech conference",
    ogDescription: "Reach devs and CTOs in one place at the premiere tech conference of the DACH region. ",
    ogImage: "/partner_page/slider_1.jpeg",
  });
</script>

<style scoped></style>
