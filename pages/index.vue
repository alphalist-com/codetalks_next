<template>
  <div>
    <LandingHero />
    <div class="relative overflow-hidden">
      <div
        class="absolute top-0 left-0 right-0 h-full max-h-[650vh] -z-20 bg-cota-background"
      >
        <SyntaxHighlighter :code="formattedCode" />
      </div>
      <div class="relative z-10 bg-cota-background bg-opacity-60">
        <div class="px-12">
          <AboutSection />
          <CtaSection />
          <GallerySection />
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

onMounted(async () => {
  const response = await fetch("/background_code.html");
  if (response.ok) {
    codeContent.value = await response.text();
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
