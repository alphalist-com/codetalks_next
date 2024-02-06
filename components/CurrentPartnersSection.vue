<template>
  <div class="bg-transparent sm:py-8 z-10 ">
    <div class="text-center">
      <SectionHeader>
        OUR
        <SectionHeaderHighlightText text="PARTNERS" />
      </SectionHeader>
      <SectionSubHeadline class="mt-4 px-20 sm:mx-16">
        Each of our partners gets a unique stage! Anything less would not be fitting
      </SectionSubHeadline>
    </div>
    <ul
      role="list"
      class="mx-auto max-w-fit mt-12 grid grid-cols-2 gap-8 sm:gap-20 px-4 sm:grid-cols-3 sm:px-20 md:grid-cols-4 xl:grid-cols-5 relative"
    >
      <li
        v-for="partner in partners"
        :key="partner.name"
        class="relative flex flex-col items-center w-32 h-32 sm:w-40 sm:h-40"
      >
        <div
          class="relative w-full h-full cota-material rounded-3xl px-4 py-8 backdrop-blur-md filter bg-white/10 shadow-[inset_0_0_15px_1px_rgba(0,0,0,1.0)]"
        >
          <NuxtLink :href="partner.website">
            <img
              class="w-full h-full object-contain"
              :src="partner.logoUrl"
              :alt="partner.name"
            />
          </NuxtLink>
        </div>
      </li>
    </ul>
    <div
      class="flex flex-col sm:flex-row items-center justify-center gap-x-6 pt-12 pb-28"
    >
      <PrimaryBtn link="/partners">Show more</PrimaryBtn>
    </div>
  </div>
</template>

<script setup lang="ts">
interface BasicPartnerInfos {
  name: string;
  website: string;
  logoUrl: string;
}

const partners: BasicPartnerInfos[] = [
  {
    name: "Schufa",
    website: "https://www.schufa.de",
    logoUrl: "/network_logos/Apple_white.png",
  },
  {
    name: "Schufa1",
    website: "https://www.schufa.de",
    logoUrl: "/network_logos/Apple_white.png",
  },
  {
    name: "Schufa2",
    website: "https://www.schufa.de",
    logoUrl: "/network_logos/Apple_white.png",
  },
  {
    name: "Schufa3",
    website: "https://www.schufa.de",
    logoUrl: "/network_logos/Apple_white.png",
  },
  {
    name: "Schufa4",
    website: "https://www.schufa.de",
    logoUrl: "/network_logos/Apple_white.png",
  },
  {
    name: "Schufa5",
    website: "https://www.schufa.de",
    logoUrl: "/network_logos/Apple_white.png",
  },
  {
    name: "Schufa6",
    website: "https://www.schufa.de",
    logoUrl: "/network_logos/Apple_white.png",
  },
  {
    name: "Schufa7",
    website: "https://www.schufa.de",
    logoUrl: "/network_logos/Apple_white.png",
  },
  {
    name: "Schufa6",
    website: "https://www.schufa.de",
    logoUrl: "/network_logos/Apple_white.png",
  },
  {
    name: "Schufa7",
    website: "https://www.schufa.de",
    logoUrl: "/network_logos/Apple_white.png",
  },
];
</script>
