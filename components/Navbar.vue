<template>
  <header class="sticky top-0 z-20">
    <nav
      :class="[
        'relative mx-auto h-16 overflow-clip bg-cota-background/80 px-6 pt-2 backdrop-blur-md backdrop-filter',
        { 'shadow-md shadow-cota-primary': !isAtTop },
      ]"
      aria-label="Global"
    >
      <div class="mx-auto flex max-w-7xl items-center justify-between">
        <div class="flex lg:flex-1">
          <NuxtLink href="/" class="-mx-3 -my-0">
            <span class="sr-only">code.talks</span>
            <img class="h-12 w-auto" src="/cota_logo.png" />
          </NuxtLink>
        </div>
        <div class="flex lg:hidden">
          <button
            type="button"
            class="inline-flex items-center justify-center rounded-md text-white"
            @click="mobileMenuOpen = true"
          >
            <span class="sr-only">Open main menu</span>
            <Bars3Icon class="h-6 w-6" aria-hidden="true" />
          </button>
        </div>
        <div class="hidden lg:flex lg:gap-x-10">
          <NuxtLink
            v-for="item in navigation"
            :key="item.name"
            :href="item.href"
            class="hover:text-cota text-sm font-semibold leading-6 text-white"
            >{{ item.name }}</NuxtLink
          >
        </div>
        <div class="hidden lg:flex lg:flex-1 lg:justify-end">
          <OutlineBtn :thin-version="true" link="#"
            >Get your tickets</OutlineBtn
          >
        </div>
      </div>
    </nav>
    <HeadlessDialog
      as="div"
      class="lg:hidden"
      @close="mobileMenuOpen = false"
      :open="mobileMenuOpen"
    >
      <div class="fixed inset-0 z-20" />
      <HeadlessDialogPanel
        class="fixed inset-y-0 right-0 z-20 w-full overflow-y-auto bg-cota-background px-5 pt-0.5 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10 lg:pt-3"
      >
        <div class="mb-10 flex items-center justify-between">
          <NuxtLink href="/" class="-mx-2 pt-1.5 lg:-mx-0 lg:-my-2.5">
            <span class="sr-only">code.talks</span>
            <img class="h-12 w-auto lg:pt-0" src="/cota_logo.png" />
          </NuxtLink>
          <button
            type="button"
            class="rounded-md text-white"
            @click="mobileMenuOpen = false"
          >
            <span class="sr-only">Close menu</span>
            <XMarkIcon class="h-6 w-6" aria-hidden="true" />
          </button>
        </div>
        <div class="flow-root px-6">
          <div class="divide-y divide-gray-500/10">
            <div class="space-y-3 py-6">
              <NuxtLink
                v-for="item in navigation"
                :key="item.name"
                :href="item.href"
                @click="closeMobileMenu"
                class="hover:bg-primary -mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-white"
                >{{ item.name }}</NuxtLink
              >
            </div>
            <div class="-ml-3 py-6">
              <OutlineBtn link="#">Get your tickets</OutlineBtn>
            </div>
          </div>
        </div>
      </HeadlessDialogPanel>
    </HeadlessDialog>
  </header>
</template>

<script setup lang="ts">
import { ref, onMounted, onUnmounted } from "vue";
import { Bars3Icon, XMarkIcon } from "@heroicons/vue/24/outline";

const isAtTop = ref(true);

const checkScroll = () => {
  isAtTop.value = window.scrollY <= 0;
};

const closeMobileMenu = () => {
  mobileMenuOpen.value = false;
};

onMounted(() => {
  window.addEventListener("scroll", checkScroll);
  checkScroll(); // Check initial position
});

onUnmounted(() => {
  window.removeEventListener("scroll", checkScroll);
});

const navigation = [
  { name: "Talks", href: "/talks" },
  { name: "Speakers", href: "/speakers" },
  { name: "Partners", href: "/partners" },
  { name: "About Us", href: "/about-us" },
];

const mobileMenuOpen = ref(false);
</script>
