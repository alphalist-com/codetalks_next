<template>
  <div class="bg-cota-background">
    <HeroSection>
      <template v-slot:background>
        <HeroBgImage image-url="/speaker_page/hero.jpeg"></HeroBgImage>
      </template>
      <HeroHeadline> Our speakers </HeroHeadline>
      <HeroSubHeadline class="mt-6 lg:mt-11">
        On our stages, developer heroes, pioneers, and visionaries from the
        field of software development give talks on the latest innovations and
        global trends of the scene.
      </HeroSubHeadline>

      <div class="mt-10 flex items-center justify-center gap-x-6">
        <PrimaryBtn link="#newsletter">Subscribe to Newsletter</PrimaryBtn>
      </div>
    </HeroSection>
    <div class="z-10 mt-12 bg-transparent sm:-mx-0 sm:py-8">
      <div class="text-center">
        <SectionHeader :center-align="true">
          <SectionHeaderHighlightText text="Speaker" /> Gallery
        </SectionHeader>
        <SectionSubHeadline class="mx-auto mt-4 max-w-3xl px-6">
          The following great speakers have already attended code.talks in the
          past. Do you want to share your story, your new project, or your
          revolutionary ideas with the community as well? Sign up as a
          speaker!</SectionSubHeadline
        >
      </div>
      <PersonTileList
        v-if="speakers"
        :fade-out="true"
        :person-array="speakers"
      ></PersonTileList>
      <div class="mx-14 mb-16 flex items-center justify-center gap-x-6">
        <button
          @click="loadMoreSpeakers"
          :disabled="fetchingData"
          class="justify-self-center rounded-md bg-cota-primary px-3.5 py-2 text-sm font-semibold uppercase text-cota-on-primary"
        >
          Load more Speakers
        </button>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">

import type { Person } from "~/utils/types/person";

const { data: speakers } = await useAsyncData<Person[]>("speakers", () =>
  $fetch("/default_speakers.json"),
);

const fetchingData = ref(false);

const loadMoreSpeakers = async () => {
  fetchingData.value = true;
  const currentSpeakerIds = speakers.value?.map(
    (speaker) => speaker.detailedInfos,
  );
  const { newSpeakers } = await $fetch("/api/cota/all_speakers", {
    method: "post",
    body: JSON.stringify({ excludeIds: currentSpeakerIds }),
  });
  console.log(newSpeakers);
  if (newSpeakers) {
    speakers.value = speakers.value?.concat(newSpeakers);
  }
  fetchingData.value = false;
};

  useSeoMeta({
    title: "Speakers | Talk Tech at the code.talks tech conference | Hamburg | September 19-20 2024",
    ogType: 'website',
    ogUrl: 'https://codetalks.com',
    twitterSite: '@codetalkshh',
    ogSiteName: 'code.talks',
    description: "Apply to speak at code.talks 2024. Share your tech insights and solutions with leading developers and CTOs in a collaborative environment",
    ogTitle: "Speakers | Talk Tech at the code.talks tech conference | Hamburg | September 19-20 2024",
    ogDescription: "Apply to speak at code.talks 2024 and share your tech insights with leading developers and CTOs.",
    ogImage: "/landing_page/slider_1.jpeg",
    keywords:"Tech keynote speaker submission, Developer conference speaker application, Developer conference speaking slot, Tech thought leadership opportunity, Call for speakers tech conference, call for papers tech conference",
    twitterCard: 'summary_large_image',
    twitterTitle:'Speakers | Talk Tech at the code.talks tech conference', 
    twitterDescription: 'Apply to speak at code.talks 2024 and share your tech insights with leading developers and CTOs',
    twitterImage: '/landing_page/slider_1.jpeg',
  });
</script>

<style scoped></style>
