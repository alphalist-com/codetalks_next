<template>
  <div>
    <LandingHero />
    <div class="relative overflow-hidden">
      <div
        class="absolute top-0 left-0 right-0 h-full max-h-[1250vh] md:max-h-[850vh] -z-20 bg-cota-background"
      >
        <SyntaxHighlighter :code="formattedCode" />
      </div>
      <div class="relative z-10 bg-cota-background bg-opacity-40">
        <div class="px-12">
          <AboutSection/>
          <CtaSection :items="ctas" />
          <GallerySection :imageInfos="pictures" />
          <FactsSection />
          <NetworkBrandSection />
          <SpeakerSection
            title="OUR"
            titleHighlight="SPEAKERS"
            subtitle="Just a few the brilliant minds of code.talks"
            :buttons="[
              { text: 'See all Speakers', link: '#', arrow: true },
              {
                text: 'Become a Speaker',
                link: 'https://www.youtube.com/watch?v=Kx5N5QK3rOE',
                arrow: true,
              },
            ]"
          />
          <PartnerSection />
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { ref, onMounted } from "vue";

const codeContent = ref("");
const formattedCode = ref("");

const pictures = [
  {
    url: "/gallery/cota-1.png",
    focusPoint: "50% 30%",
    description: "Image 1 Description",
  },
  {
    url: "/gallery/cota-2.png",
    focusPoint: "80% 20%",
    description: "Image 2 Description",
  },
  { url: "/gallery/cota-3.png", focusPoint: "20% 80%" },
  { url: "/gallery/cota-4.png", focusPoint: "50% 30%" },
  { url: "/gallery/cota-5.png", focusPoint: "50% 45%" }
];

const ctas = [
  {
    name: "MEET",
    description:
      "code.talks offers a varied program with more than 100 talks from 14 subject areas. More than 130 national.",
    icon: "🌍",
    cta: "See more",
  },
  {
    name: "TALK",
    description:
      "code.talks offers a varied program with more than 100 talks from 14 subject areas. More than 130 national.",
    icon: "👋",
    cta: "See more",
  },
  {
    name: "CODE",
    description:
      "code.talks offers a varied program with more than 100 talks from 14 subject areas. More than 130 national.",
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
