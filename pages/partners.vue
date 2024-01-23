<template>
  <div class="bg-cota-background">
    <div class="-mt-16 h-screen">
      <div class="relative isolate overflow-hidden h-full pt-14" id="hero">
        <div class="absolute inset-0 -z-10">
          <img
            src="https://codetalks.de/img/sections/hero/partnerPage.jpg"
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
                Partners
              </h1>
              <p class="mt-6 text-lg leading-8 text-gray-100">
                Present your company at one of the leading developer
                conferences, network with like-minded people and share your
                experiences with the community.
              </p>

              <div class="mt-10 flex items-center justify-center gap-x-6">
                <NuxtLink
                  href="#"
                  class="rounded-md px-3.5 py-2 text-sm font-semibold text-cota-on-primary bg-cota-primary"
                  >BECOME A PARTNER</NuxtLink
                >
              </div>
            </div>
          </div>
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
    <CtaSection :items="ctas" />
    <GallerySection :image-infos="pictures" />
    <div class="py-32 overflow">
      <div class="mx-auto max-w-7xl px-6 lg:flex lg:px-8">
        <div
          class="mx-auto grid max-w-2xl grid-cols-1 gap-x-12 gap-y-16 lg:mx-0 lg:min-w-full lg:max-w-none lg:flex-none lg:gap-y-8"
        >
          <div class="lg:col-end-1 lg:w-full lg:max-w-lg lg:pb-8">
            <h2
              class="text-3xl font-extrabold tracking-tight text-cota-secondary sm:text-4xl"
            >
              LET’S GET
              <span class="text-cota-primary font-extralight">PARTNER</span> IN
              CODE
            </h2>
            <p class="mt-6 text-xl leading-8 text-cota-secondary">
              In recent years, the code.talks in Hamburg has become one of the
              largest and most popular development conferences in Europe.
              Therefore, we would like to give interested companies the
              opportunity to participate in our conference, to present
              themselves and get in contact with the community in a relaxed
              atmosphere.
            </p>
            <div class="mt-10 flex gap-x-6">
              <NuxtLink
                href="#"
                class="rounded-md px-3.5 py-2 text-sm font-semibold text-cota-on-primary bg-cota-primary"
                >Find our more</NuxtLink
              >
            </div>
          </div>
          <div
            class="flex flex-wrap items-start justify-end gap-6 sm:gap-8 lg:contents"
          >
            <div
              class="w-0 flex-auto lg:ml-auto lg:w-auto lg:flex-none lg:self-end"
            >
              <img
                src="/partner_images/p1.jpg"
                alt=""
                class="aspect-[7/5] w-[37rem] max-w-none rounded-2xl object-cover"
              />
            </div>
            <div
              class="contents lg:col-span-2 lg:col-end-2 lg:ml-auto lg:flex lg:w-[37rem] lg:items-start lg:justify-end lg:gap-x-8"
            >
              <div
                class="order-first flex w-64 flex-none justify-end self-end lg:w-auto"
              >
                <img
                  src="/partner_images/p3.jpg"
                  alt=""
                  class="aspect-[4/3] w-[24rem] max-w-none flex-none rounded-2xl object-cover"
                />
              </div>
              <div
                class="flex w-96 flex-auto justify-end lg:w-auto lg:flex-none"
              >
                <img
                  src="/partner_images/p2.jpg"
                  alt=""
                  class="aspect-[7/5] w-[37rem] max-w-none flex-none rounded-2xl object-cover"
                />
              </div>
              <div
                class="hidden sm:block sm:w-0 sm:flex-auto lg:w-auto lg:flex-none"
              >
                <img
                  src="/partner_images/p4.jpg"
                  alt=""
                  class="aspect-[4/3] w-[24rem] max-w-none rounded-2xl object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">

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
  { url: "/gallery/cota-5.png", focusPoint: "50% 45%" },
];

const ctas = [
  {
    name: "communicate",
    description:
      "Become part of the community and network with developers from many different fields at code.talks.",
    icon: "👥",
  },
  {
    name: "inspire",
    description:
      "Inspire others and share your expertise in lectures and live coding sessions with the developer community.",
    icon: "💡",
  },
  {
    name: "spread your message",
    description:
      "Increase brand awareness and reach your target group and audience in an authentic environment.",
    icon: "📋",
  },
];
</script>

<style scoped></style>
