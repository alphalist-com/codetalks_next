<template>
  <div class="z-10 bg-transparent sm:py-8">
    <div class="text-center">
      <SectionHeader>
        OUR
        <SectionHeaderHighlightText text="PARTNERS" />
      </SectionHeader>
      <SectionSubHeadline class="mt-4 px-20 sm:mx-16">
        Each of our partners gets a unique stage! Anything less would not be
        fitting
      </SectionSubHeadline>
    </div>
    <ul
      role="list"
      class="relative mx-auto mt-12 grid max-w-fit grid-cols-2 gap-8 px-4 sm:grid-cols-3 sm:gap-20 sm:px-20 md:grid-cols-4 xl:grid-cols-5"
    >
      <li
        v-for="partner in partners"
        :key="partner.name"
        class="relative flex h-32 w-32 flex-col items-center sm:h-40 sm:w-40"
      >
        <div
          class="cota-material relative h-full w-full rounded-3xl bg-white/10 px-4 py-8 shadow-[inset_0_0_15px_1px_rgba(0,0,0,1.0)] filter backdrop-blur-md"
        >
          <NuxtLink :href="partner.website">
            <img
              class="h-full w-full object-contain"
              :src="partner.logoUrl"
              :alt="partner.name"
            />
          </NuxtLink>
        </div>
      </li>
    </ul>
    <div
      class="flex flex-col items-center justify-center gap-x-6 pb-28 pt-12 sm:flex-row"
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
    logoUrl: "/company_logos/Apple_white.png",
  },
  {
    name: "Schufa1",
    website: "https://www.schufa.de",
    logoUrl: "/company_logos/Apple_white.png",
  },
  {
    name: "Schufa2",
    website: "https://www.schufa.de",
    logoUrl: "/company_logos/Apple_white.png",
  },
  {
    name: "Schufa3",
    website: "https://www.schufa.de",
    logoUrl: "/company_logos/Apple_white.png",
  },
  {
    name: "Schufa4",
    website: "https://www.schufa.de",
    logoUrl: "/company_logos/Apple_white.png",
  },
  {
    name: "Schufa5",
    website: "https://www.schufa.de",
    logoUrl: "/company_logos/Apple_white.png",
  },
  {
    name: "Schufa6",
    website: "https://www.schufa.de",
    logoUrl: "/company_logos/Apple_white.png",
  },
  {
    name: "Schufa7",
    website: "https://www.schufa.de",
    logoUrl: "/company_logos/Apple_white.png",
  },
  {
    name: "Schufa6",
    website: "https://www.schufa.de",
    logoUrl: "/company_logos/Apple_white.png",
  },
  {
    name: "Schufa7",
    website: "https://www.schufa.de",
    logoUrl: "/company_logos/Apple_white.png",
  },
];
</script>
