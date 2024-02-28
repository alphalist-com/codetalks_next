<template>
  <div class="z-10 bg-transparent sm:py-8">
    <div class="text-center">
      <SectionHeader :center-align="true">
        OUR
        <SectionHeaderHighlightText text="PARTNERS" />
      </SectionHeader>
      <SectionSubHeadline class="mt-4 px-20 sm:mx-16">
        Thank you to our beloved partners in code
      </SectionSubHeadline>
    </div>
    <ul
      role="list"
      class="relative mx-auto mt-12 flex max-w-3xl flex-wrap justify-center gap-8 px-4 sm:gap-20 sm:px-20"
    >
      <li
        v-for="partner in currentPartners"
        :key="partner.name"
        class="relative flex h-32 w-32 flex-col items-center sm:h-40 sm:w-40"
      >
        <div
          class="cota-material relative h-full w-full rounded-3xl px-4 py-8 filter backdrop-blur-md"
        >
          <p class="-mt-5 text-center text-cota-primary">
            {{ partner.type }}
          </p>
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
const config = useRuntimeConfig();

interface BasicPartnerInfos {
  name: string;
  website: string;
  logoUrl: string;
  type: string;
}

const {
  data: currentPartners,
  error,
  pending,
  refresh,
} = useAsyncData<BasicPartnerInfos[]>("currentPartners", () =>
  $fetch("/api/cota/current_partners").then((data) => {
    let partners: BasicPartnerInfos[] = [];
    data.partners.forEach((partnerCategory) => {
      partnerCategory.slots.forEach((partnerSlot) => {
        partners.push({
          name: partnerSlot.company.name,
          website: partnerSlot.website.url,
          logoUrl: partnerSlot.company.logo_url,
          type: partnerCategory.sponsor_category.name_translations[1]
            .translation,
        });
      });
    });
    return partners;
  }),
);
</script>
