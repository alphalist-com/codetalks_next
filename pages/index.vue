<template>
  <div>
    <LandingHero />

    <div class="px-12">
      <AboutSection class="overflow-hidden" />
      <CtaSection class="mt-12" :items="ctas" />
      <NetworkBrandSection class="mt-12" />
      <GallerySection class="mt-12" :imageInfos="pictures" />
      <FactsSection class="mt-12" />
      <SpeakerSection
        class="mt-20"
        title="OUR"
        titleHighlight="SPEAKERS"
        subtitle="Whether they are legends of the tech scene, authors, or professionals in their field, we curate the most relevant experts for you and your daily work."
        :buttons="[
          { text: 'See all Speakers', link: '#', arrow: true },
          {
            text: 'Become a Speaker',
            link: 'https://www.youtube.com/watch?v=Kx5N5QK3rOE',
            arrow: true,
          },
        ]"
      >
        <PrimaryBtn link="/speakers">Explore speakers</PrimaryBtn>
      </SpeakerSection>
      <PartnerSection class="mt-40 lg:mt-12" />
      <CurrentPartnersSection class="mt-8" />
    </div>
  </div>
</template>

<script lang="ts" setup>
import { ref, onMounted } from "vue";

const codeContent = ref("");
const formattedCode = ref("");

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

onMounted(async () => {
  const response = await fetch("/background_code.html");
  if (response.ok) {
    codeContent.value = await response.text();
    // Workaround: On mobile the text might not be long enough to cover the full height off the screen
    codeContent.value = codeContent.value + "/n" + codeContent.value;
    formattedCode.value = addLineNumbers(codeContent.value);
  } else {
    console.error("Failed to fetch the file");
  }
});

function addLineNumbers(codeString: string): string {
  return codeString
    .split("\n")
    .map((line, index) => `${index + 1}  ${line}`)
    .join("\n");
}
</script>

<style></style>
