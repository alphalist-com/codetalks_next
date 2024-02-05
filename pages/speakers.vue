<template>
  <div class="bg-cota-background">
    <HeroSection>
      <template v-slot:background>
        <HeroBgImage image-url="/speaker_page/hero.jpeg"></HeroBgImage>
      </template>
      <HeroHeadline> Our speakers </HeroHeadline>
      <HeroSubHeadline class="lg:mt-11 mt-6">
        On our stages, developer heroes, pioneers, and visionaries from the
        field of software development give talks on the latest innovations and
        global trends of the scene.
      </HeroSubHeadline>

      <div class="mt-10 flex items-center justify-center gap-x-6">
        <PrimaryBtn link="#newsletter">Subscribe to Newsletter</PrimaryBtn>
      </div>
    </HeroSection>
    <div class="bg-transparent sm:py-8 z-10 mt-12 -mx-10 sm:-mx-0">
      <div class="text-center">
        <SectionHeader> Speaker Gallery </SectionHeader>
        <SectionSubHeadline class="mt-4 px-16 sm:mx-10">
          The following great speakers have already attended code.talks in the
          past. Do you want to share your story, your new project, or your
          revolutionary ideas with the community as well? Sign up as a
          speaker!</SectionSubHeadline
        >
      </div>
      <PersonTileList
        :fade-out="true"
        :person-array="speakers"
      ></PersonTileList>
      <div class="flex items-center justify-center gap-x-6 mx-14">
        <PrimaryBtn link="#">more speakers</PrimaryBtn>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
const dialogClosed = () => {};

const dialogOpen = ref(false);


const speakers: Array<Person> = [
  {
    name: "Ivan Notaroš",
    position: "Tech Artist",
    company: "nothke",
    image:
      "https://codetalks.de/storage/images/persons/thumbnails/Ivan_Notaroš-7dae29ae2a9e396ddc8a8038bab1c8d1.png",
    detailedInfos: "temp",
  },
  {
    name: "Philipp Gentz",
    company: "Synatix GmbH",
    position: "Team Lead und Developer",
    image:
      "https://codetalks.de/storage/images/persons/thumbnails/Philipp_Gentz-6f8dd39ab6ed605242bada98754410ad.jpg",
    detailedInfos: "temp",
  },
  {
    name: "Jonas Jaenicke",
    position: "Consultant",
    company: "Netlight Consulting GmbH",
    image:
      "https://codetalks.de/storage/images/persons/thumbnails/Jonas_Jaenicke-0f85e566c5cbca2d77950366854e2a2d.jpg",
    detailedInfos: "temp",
  },
  {
    name: "Rami Ismail",
    position: "Executive Director",
    company: "Rami Ismail",
    image:
      "https://codetalks.de/storage/images/persons/thumbnails/Rami_Ismail-b5c8a6a1481f13506be50cab18d3e66a.png",
    detailedInfos: "temp",
  },
  {
    name: "Anna Nadeina",
    position: "Head of Growth @saas.group",
    company: "saas.group",
    image:
      "https://codetalks.de/storage/images/persons/thumbnails/Anna_Nadeina-c3cf26fc15e3f2218aaad45cf50dbfa3.jpg",
    detailedInfos: "temp",
  },
  {
    name: "Barbara Wittenberg",
    position: "CTO",
    company: "1KOMMA5°",
    image:
      "https://codetalks.de/storage/images/persons/thumbnails/Barbara_Wittenberg-10c929c0881d0c86b859a22161bef757.jpg",
    detailedInfos: "temp",
  },
  {
    name: "Anna Nadeina",
    position: "Head of Growth @saas.group",
    company: "saas.group",
    image:
      "https://codetalks.de/storage/images/persons/thumbnails/Anna_Nadeina-c3cf26fc15e3f2218aaad45cf50dbfa3.jpg",
    detailedInfos: "temp",
  },
  {
    name: "Barbara Wittenberg",
    position: "CTO",
    company: "1KOMMA5°",
    image:
      "https://codetalks.de/storage/images/persons/thumbnails/Barbara_Wittenberg-10c929c0881d0c86b859a22161bef757.jpg",
    detailedInfos: "temp",
  },

  {
    name: "Philipp Gentz",
    company: "Synatix GmbH",
    position: "Team Lead und Developer",
    image:
      "https://codetalks.de/storage/images/persons/thumbnails/Philipp_Gentz-6f8dd39ab6ed605242bada98754410ad.jpg",
    detailedInfos: "temp",
  },
  {
    name: "Ivan Notaroš",
    position: "Tech Artist",
    company: "nothke",
    image:
      "https://codetalks.de/storage/images/persons/thumbnails/Ivan_Notaroš-7dae29ae2a9e396ddc8a8038bab1c8d1.png",
    detailedInfos: "temp",
  },
  {
    name: "Jonas Jaenicke",
    position: "Consultant",
    company: "Netlight Consulting GmbH",
    image:
      "https://codetalks.de/storage/images/persons/thumbnails/Jonas_Jaenicke-0f85e566c5cbca2d77950366854e2a2d.jpg",
    detailedInfos: "temp",
  },
  {
    name: "Rami Ismail",
    position: "Executive Director",
    company: "Rami Ismail",
    image:
      "https://codetalks.de/storage/images/persons/thumbnails/Rami_Ismail-b5c8a6a1481f13506be50cab18d3e66a.png",
    detailedInfos: "temp",
  },
  {
    name: "John Romero",
    position: "Managing Director",
    company: "Romero Games",
    image:
      "https://codetalks.de/storage/images/persons/thumbnails/John_Romero-04090320358a7126b152c5173b478309.jpeg",
  },
  {
    name: "David Catuhe",
    position: "Principal Software Developer Lead",
    company: "Microsoft",
    image:
      "https://codetalks.de/storage/images/persons/thumbnails/David_Catuhe-157a58c5cfc11dd6f25f19a55457b1e8.jpeg",
  },
  {
    name: "Ryan Singer",
    position: "Founder",
    company: "Felt Presence LLC",
    image:
      "https://codetalks.de/storage/images/persons/thumbnails/Ryan_Singer-f783ef3518af41e48fc8b82565f427d6.jpg",
  },
  {
    name: "Katerina Trajchevska",
    position: "CEO",
    company: "Adeva",
    image:
      "https://codetalks.de/storage/images/persons/hh-2018/thumbnails/katerina_trajchevska-df8256e4af8446abe84e0018d75b3a9e.jpeg",
  },
  {
    name: "Krystal Campioni",
    position: "Senior Frontend Developer",
    company: "Oberlo - Shopify",
    image:
      "https://codetalks.de/storage/images/persons/thumbnails/Krystal_Campioni-5e432be9932ef2f3d2a4a86d5494833d.jpeg",
  },
  {
    name: "Jenny Shen",
    position: "Senior UX/Product Designer",
    company: "Jenny Shen",
    image:
      "https://codetalks.de/storage/images/persons/hh-2018/thumbnails/Jenny_Shen-aa81557f868ffdc117252f37425eb205.jpeg",
  },
  {
    name: "Billy Ellis",
    position: "Security Researcher",
    company: "ZygoSec",
    image:
      "https://codetalks.de/storage/images/persons/hh-2018/thumbnails/billy_ellis-1f8b79d6d59e3fe0d5c11fe88eb6d566.jpeg",
  },
  {
    name: "Nico Lumma",
    position: "Managing Partner",
    company: "next media accelerator GmbH",
    image:
      "https://codetalks.de/storage/images/persons/hh-2018/thumbnails/Nico_Lumma-4328190538068c08fd5b557aac45d1ed.png",
  },
  {
    name: "Krystal Campioni",
    position: "Senior Frontend Developer",
    company: "Oberlo - Shopify",
    image:
      "https://codetalks.de/storage/images/persons/thumbnails/Krystal_Campioni-5e432be9932ef2f3d2a4a86d5494833d.jpeg",
  },
  {
    name: "Jenny Shen",
    position: "Senior UX/Product Designer",
    company: "Jenny Shen",
    image:
      "https://codetalks.de/storage/images/persons/hh-2018/thumbnails/Jenny_Shen-aa81557f868ffdc117252f37425eb205.jpeg",
  },
  {
    name: "Billy Ellis",
    position: "Security Researcher",
    company: "ZygoSec",
    image:
      "https://codetalks.de/storage/images/persons/hh-2018/thumbnails/billy_ellis-1f8b79d6d59e3fe0d5c11fe88eb6d566.jpeg",
  },
  {
    name: "Nico Lumma",
    position: "Managing Partner",
    company: "next media accelerator GmbH",
    image:
      "https://codetalks.de/storage/images/persons/hh-2018/thumbnails/Nico_Lumma-4328190538068c08fd5b557aac45d1ed.png",
  },
];
</script>

<style scoped></style>
