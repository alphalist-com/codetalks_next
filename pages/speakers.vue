<template>
  <div class="bg-cota-background">
    <div class="-mt-16 h-screen">
      <div class="relative isolate overflow-hidden h-full pt-14" id="hero">
        <div class="absolute inset-0 -z-10">
          <img
            src="https://codetalks.de/img/sections/hero/speakerPage.jpg"
            alt=""
            class="h-full w-full object-cover brightness-50 bg-gradient-to-t from-black to-transparent"
          />
        </div>
        <div
          class="content-around flex flex-col items-center justify-center w-full h-full px-6 -mt-6"
        >
          <div class="max-w-4xl w-full text-center">
            <div class="text-center">
              <h1
                class="text-5xl font-extrabold tracking-tight uppercase text-cota-secondary"
              >
                Speaker
              </h1>
              <p class="mt-6 text-lg leading-8 text-gray-100">
                On our stages, developer heroes, pioneers, and visionaries from
                the field of software development give talks on the latest
                innovations and global trends of the scene.
              </p>
              <p class="mt-6 text-lg font-extrabold leading-6 text-gray-100">
                The call for papers opens on 29 February 2024.
              </p>

              <div class="mt-10 flex items-center justify-center gap-x-6">
                <NuxtLink
                  href="#newsletter"
                  class="rounded-md px-3.5 py-2 text-sm font-semibold text-cota-on-primary bg-cota-primary"
                  >Subscribe to Newsletter</NuxtLink
                >
              </div>
            </div>
          </div>
          <NuxtLink
            class="absolute bottom-10 left-1/2 transform -translate-x-1/2 text-sm font-semibold text-white"
            href="#speakerSection"
            >Speakers of code.talks <span aria-hidden="true">→</span></NuxtLink
          >
        </div>
        <div
          class="absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]"
          aria-hidden="true"
        >
          <div
            class="relative left-[calc(50%+3rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-20 sm:left-[calc(50%+36rem)] sm:w-[72.1875rem]"
            style="
              clip-path: polygon(
                74.1% 44.1%,
                100% 61.6%,
                97.5% 26.9%,
                85.5% 0.1%,
                80.7% 2%,
                72.5% 32.5%,
                60.2% 62.4%,
                52.4% 68.1%,
                47.5% 58.3%,
                45.2% 34.5%,
                27.5% 76.7%,
                0.1% 64.9%,
                17.9% 100%,
                27.6% 76.8%,
                76.1% 97.7%,
                74.1% 44.1%
              );
            "
          />
        </div>
      </div>
    </div>
    <div id="speakerSection" class="py-20">
      <SpeakerSection
        title="Speaker Gallery"
        subtitle="The following great speakers have already attended code.talks in the past. Do you want to share your story, your new project, or your revolutionary ideas with the community as well?
Sign up as a speaker!"
        :buttons="[
          // { text: 'Load more Speakers', link: '#' },
          {
            text: 'Newsletter',
            link: '#newsletter',
            arrow: true,
          },
        ]"
        :speaker-list="speakers"
      />
    </div>
  </div>
</template>

<script setup lang="ts">
const dialogClosed = () => {};

const dialogOpen = ref(false);

const speakers = [
  {
    name: "John Romero",
    position: "Managing Director",
    company: "Romero Games",
    imageUrl:
      "https://codetalks.de/storage/images/persons/thumbnails/John_Romero-04090320358a7126b152c5173b478309.jpeg",
  },
  {
    name: "David Catuhe",
    position: "Principal Software Developer Lead",
    company: "Microsoft",
    imageUrl:
      "https://codetalks.de/storage/images/persons/thumbnails/David_Catuhe-157a58c5cfc11dd6f25f19a55457b1e8.jpeg",
  },
  {
    name: "Ryan Singer",
    position: "Founder",
    company: "Felt Presence LLC",
    imageUrl:
      "https://codetalks.de/storage/images/persons/thumbnails/Ryan_Singer-f783ef3518af41e48fc8b82565f427d6.jpg",
  },
  {
    name: "Katerina Trajchevska",
    position: "CEO",
    company: "Adeva",
    imageUrl:
      "https://codetalks.de/storage/images/persons/hh-2018/thumbnails/katerina_trajchevska-df8256e4af8446abe84e0018d75b3a9e.jpeg",
  },
  {
    name: "Krystal Campioni",
    position: "Senior Frontend Developer",
    company: "Oberlo - Shopify",
    imageUrl:
      "https://codetalks.de/storage/images/persons/thumbnails/Krystal_Campioni-5e432be9932ef2f3d2a4a86d5494833d.jpeg",
  },
  {
    name: "Jenny Shen",
    position: "Senior UX/Product Designer",
    company: "Jenny Shen",
    imageUrl:
      "https://codetalks.de/storage/images/persons/hh-2018/thumbnails/Jenny_Shen-aa81557f868ffdc117252f37425eb205.jpeg",
  },
  {
    name: "Billy Ellis",
    position: "Security Researcher",
    company: "ZygoSec",
    imageUrl:
      "https://codetalks.de/storage/images/persons/hh-2018/thumbnails/billy_ellis-1f8b79d6d59e3fe0d5c11fe88eb6d566.jpeg",
  },
  {
    name: "Nico Lumma",
    position: "Managing Partner",
    company: "next media accelerator GmbH",
    imageUrl:
      "https://codetalks.de/storage/images/persons/hh-2018/thumbnails/Nico_Lumma-4328190538068c08fd5b557aac45d1ed.png",
  },
];
</script>

<style scoped></style>
