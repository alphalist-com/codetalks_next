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

    <p>
      {{ currentPartners?.length }}
    </p>

    <GallerySection class="px-12" :image-infos="pictures" />
    <div class="py-12" id="shout-out">
      <div class="text-center">
        <SectionHeader
          >Big <SectionHeaderHighlightText text="shout-out"
        /></SectionHeader>
        <SectionSubHeadline class="px-6 sm:px-12"
          >This year we like to say thank you to our beloved partners in
          code.</SectionSubHeadline
        >
      </div>
      <div class="mx-auto mt-12 max-w-7xl px-6 sm:px-12">
        <div
          :class="[
            'transition[height] cota-material mt-12 items-center rounded-3xl bg-white/10 px-6 py-12 text-center shadow-[inset_0_0_15px_1px_rgba(0,0,0,1.0)] filter backdrop-blur-md duration-300 ease-in-out sm:px-12',
            currentPartners ? 'h-96' : 'h-72',
          ]"
        >
          <div v-if="!currentPartners">
            <Loading />
          </div>
          <div v-else>
            <PartnerClassText>{{
              currentPartners[0].sponsor_category.name_translations[1]
                .translation
            }}</PartnerClassText>
            <div
              class="grid grid-cols-1 place-items-center gap-x-20 gap-y-16 px-6 py-8 sm:grid-cols-2"
            >
              <NuxtLink
                :href="topPartner.website.url"
                v-for="topPartner in currentPartners[0].slots"
              >
                <img
                  class="h-56 object-contain"
                  :src="`https://codetalks.de${topPartner.company.thumbnail_url}`"
                  :alt="topPartner.company.name"
                />
              </NuxtLink>
            </div>
          </div>
        </div>

        <div
          class="cota-material mt-12 items-center rounded-3xl bg-white/10 px-6 py-12 text-center shadow-[inset_0_0_15px_1px_rgba(0,0,0,1.0)] filter backdrop-blur-md sm:px-12"
        >
          <div v-if="!currentPartners">
            <Loading />
          </div>
          <div v-else>
            <PartnerClassText>{{
              currentPartners[1].sponsor_category.name_translations[1]
                .translation
            }}</PartnerClassText>
            <div
              class="grid grid-cols-1 place-items-center gap-y-16 py-12 sm:grid-cols-2 md:grid-cols-3 lg:md:grid-cols-4"
            >
              <NuxtLink
                :href="topPartner.website.url"
                v-for="topPartner in currentPartners[1].slots"
              >
                <img
                  class="h-40 object-contain"
                  :src="`https://codetalks.de${topPartner.company.thumbnail_url}`"
                  :alt="topPartner.company.name"
                />
              </NuxtLink>
            </div>
          </div>
        </div>

        <div
          class="cota-material mt-12 items-center rounded-3xl bg-white/10 px-6 py-12 text-center shadow-[inset_0_0_15px_1px_rgba(0,0,0,1.0)] filter backdrop-blur-md sm:px-12"
        >
          <div v-if="!currentPartners">
            <Loading />
          </div>
          <div v-else>
            <PartnerClassText>{{
              currentPartners[2].sponsor_category.name_translations[1]
                .translation
            }}</PartnerClassText>
            <div
              class="grid grid-cols-1 place-items-center gap-y-16 py-12 sm:grid-cols-2 md:grid-cols-3 lg:md:grid-cols-4"
            >
              <NuxtLink
                :href="topPartner.website.url"
                v-for="topPartner in currentPartners[2].slots"
              >
                <img
                  class="h-20 object-contain"
                  :src="`https://codetalks.de${topPartner.company.thumbnail_url}`"
                  :alt="topPartner.company.name"
                />
              </NuxtLink>
            </div>
          </div>
        </div>

        <div
          class="cota-material mt-12 items-center rounded-3xl bg-white/10 px-6 py-12 text-center shadow-[inset_0_0_15px_1px_rgba(0,0,0,1.0)] filter backdrop-blur-md sm:px-12"
        >
          <div v-if="!currentPartners">
            <Loading />
          </div>
          <div v-else>
            <PartnerClassText>{{
              currentPartners[3].sponsor_category.name_translations[1]
                .translation
            }}</PartnerClassText>
            <div
              class="grid grid-cols-1 place-items-center gap-y-16 py-12 sm:grid-cols-2 md:grid-cols-3 lg:md:grid-cols-4"
            >
              <NuxtLink
                :href="topPartner.website.url"
                v-for="topPartner in currentPartners[3].slots"
              >
                <img
                  class="h-28 object-contain"
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
const currentPartners = ref<Array<Object> | null>(null);

onMounted(async () => {
  const { partners } = await $fetch("/api/cota/current_partners", {
    method: "get",
  });
  if (partners) {
    currentPartners.value = partners;
  }
});

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
    name: "adjoe",
    logo: "/company_logos/adjoe.png",
    link: "https://adjoe.io/",
  },
  {
    name: "About You",
    logo: "/company_logos/about_you.png",
    link: "https://en.aboutyou.de/",
  },
];

const premiumPartner = [
  {
    name: "Techniker Krankenkasse",
    logo: "/company_logos/tk.png",
    link: "https://www.tk.de/",
  },
  {
    name: "Apple",
    logo: "/company_logos/Apple_white.png",
    link: "https://www.apple.com",
  },
  {
    name: "Apple",
    logo: "/company_logos/Apple_white.png",
    link: "https://www.apple.com",
  },
  {
    name: "Apple",
    logo: "/company_logos/Apple_white.png",
    link: "https://www.apple.com",
  },
];

const trailblazersPartner = [
  {
    name: "Apple",
    logo: "/company_logos/Apple_white.png",
    link: "https://www.apple.com",
  },
  {
    name: "Apple",
    logo: "/company_logos/Apple_white.png",
    link: "https://www.apple.com",
  },
  {
    name: "Apple",
    logo: "/company_logos/Apple_white.png",
    link: "https://www.apple.com",
  },
  {
    name: "Apple",
    logo: "/company_logos/Apple_white.png",
    link: "https://www.apple.com",
  },
];

const feelgoodPartner = [
  {
    name: "Apple",
    logo: "/company_logos/Apple_white.png",
    link: "https://www.apple.com",
  },
  {
    name: "Apple",
    logo: "/company_logos/Apple_white.png",
    link: "https://www.apple.com",
  },
  {
    name: "Apple",
    logo: "/company_logos/Apple_white.png",
    link: "https://www.apple.com",
  },
  {
    name: "Apple",
    logo: "/company_logos/Apple_white.png",
    link: "https://www.apple.com",
  },
];
</script>

<style scoped></style>
