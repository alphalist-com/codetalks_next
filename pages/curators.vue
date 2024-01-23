<template>
  <div class="bg-cota-background">
    <div class="-mt-16 h-screen">
      <div class="relative isolate overflow-hidden h-full pt-14" id="hero">
        <div class="absolute inset-0 -z-10">
          <img

            src="https://codetalks.de/img/sections/hero/headerImage.jpg"
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
              Curators
              </h1>
              <p class="mt-6 text-lg leading-8 text-gray-100">
                It is time to integrate the community in designing the program.
              </p>


              <div class="mt-10 flex items-center justify-center gap-x-6">
                <NuxtLink
                  href="#"
                  class="rounded-md px-3.5 py-2 text-sm font-semibold text-cota-on-primary bg-cota-primary"
                  >Subscribe to Newsletter</NuxtLink
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
    <div class="py-32 overflow sm:mt-40">
    <div class="mx-auto max-w-7xl px-6 lg:flex lg:px-8">
      <div
        class="mx-auto grid max-w-2xl grid-cols-1 gap-x-12 gap-y-16 lg:mx-0 lg:min-w-full lg:max-w-none lg:flex-none lg:gap-y-8"
      >
        <div class="lg:col-end-1 lg:w-full lg:max-w-lg lg:pb-8">
          <h2
            class="text-3xl font-extrabold tracking-tight text-cota-secondary sm:text-4xl"
          >
            By
            <span class="text-cota-primary font-extralight">Developers</span> 4
            <span class="text-cota-primary font-extralight">Developers</span>
          </h2>
          <p class="mt-6 text-xl leading-8 text-cota-secondary">
            As every year we strive to have people from the community build the program for the community. We will announce this years Curators Beginning of March. 
          </p>
          <div class="mt-10 flex gap-x-6">
            <NuxtLink
              href="#newsletter"
              class="rounded-md px-3.5 py-2 text-sm font-semibold text-cota-on-primary bg-cota-primary"
              >Stay tuned!</NuxtLink
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
              src="/gallery/cota-2.png"
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
              src="/gallery/cota-1.png"
                alt=""
                class="aspect-[4/3] w-[24rem] max-w-none flex-none rounded-2xl object-cover"
              />
            </div>
            <div class="flex w-96 flex-auto justify-end lg:w-auto lg:flex-none">
              <img
              src="/gallery/cota-3.png"
                alt=""
                class="aspect-[7/5] w-[37rem] max-w-none flex-none rounded-2xl object-cover"
              />
            </div>
            <div
              class="hidden sm:block sm:w-0 sm:flex-auto lg:w-auto lg:flex-none"
            >
              <img
              src="/gallery/cota-5.png"
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



</script>

<style scoped>
</style>
