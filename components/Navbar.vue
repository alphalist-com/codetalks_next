<template>
    <header class="sticky top-0 z-20">
    <nav
      :class="[
        'mx-auto h-16 px-8 lg:px-6 pt-2 lg:pt-3 relative overflow-clip bg-cota-background/80 backdrop-filter backdrop-blur-md',
        { 'shadow-md shadow-cota-primary': !isAtTop }
      ]"
      aria-label="Global"
    >
      <div class="max-w-7xl flex items-center justify-between mx-auto">
        <div class="flex lg:flex-1">
          <a href="/" class="lg:-my-2.5 lg:-mx-0 -my-0 -mx-3">
            <span class="sr-only">code.talks</span>
            <img class="h-10 lg:h-12 w-auto pt-1 lg:pt-0" src="/cota_logo.png"/>
          </a>
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
          <a
            v-for="item in navigation"
            :key="item.name"
            :href="item.href"
            class="text-sm font-semibold leading-6 text-white hover:text-cota"
            >{{ item.name }}</a
          >
        </div>
        <div class="hidden lg:flex lg:flex-1 lg:justify-end">
          <a
            href="#"
            class="rounded-md bg-white outline-3 outline-cota-primary px-3.5 py-2 text-sm font-semibold text-cota-on-secondary shadow-sm  transition-shadow duration-500 hover:shadow-2xl shadow-cota-primary"
            >Tickets</a
          >
        </div>
      </div>
    </nav>
    <HeadlessDialog as="div" class="lg:hidden" @close="mobileMenuOpen = false" :open="mobileMenuOpen">
      <div class="fixed inset-0 z-20" />
      <HeadlessDialogPanel
        class="fixed inset-y-0 right-0 z-20 w-full overflow-y-auto bg-cota-background px-8 lg:px-6 pt-2 lg:pt-3  sm:max-w-sm sm:ring-1 sm:ring-gray-900/10"
      >
        <div class="flex items-center justify-between mb-10">
          <a href="/" class="lg:-my-2.5 lg:-mx-0 -my-0 -mx-3">
            <span class="sr-only">code.talks</span>
            <img class="h-10 lg:h-12 w-auto pt-1 lg:pt-0" src="/cota_logo.png"/>
          </a>
          <button
            type="button"
            class="rounded-md text-white"
            @click="mobileMenuOpen = false"
          >
            <span class="sr-only">Close menu</span>
            <XMarkIcon class="h-6 w-6" aria-hidden="true" />
          </button>
        </div>
        <div class="flow-root px-3">
          <div class="-my-6 divide-y divide-gray-500/10">
            <div class="space-y-3 py-6">
              <a
                v-for="item in navigation"
                :key="item.name"
                :href="item.href"
                class="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-white hover:bg-primary"
                >{{ item.name }}</a
              >
            </div>
            <div class="py-6 -ml-3">
              <a
                href="#"
                class="rounded-md bg-white outline-2 outline-cota-primary px-3.5 py-2 text-sm font-semibold text-cota-on-secondary shadow-sm hover:shadow-lg shadow-cota-primary"
                >Tickets</a
              >
            </div>
          </div>
        </div>
      </HeadlessDialogPanel>
    </HeadlessDialog>
  </header>
</template>

<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue'
import { Bars3Icon, XMarkIcon } from '@heroicons/vue/24/outline'

const isAtTop = ref(true)

const checkScroll = () => {
  isAtTop.value = window.scrollY <= 0
}

onMounted(() => {
  window.addEventListener('scroll', checkScroll)
  checkScroll() // Check initial position
})

onUnmounted(() => {
  window.removeEventListener('scroll', checkScroll)
})

const navigation = [
  { name: 'Talks', href: '/talks' },
  { name: 'Speaker', href: '/speaker' },
  { name: 'Partner', href: '/partner' },
  { name: 'Curators', href: '/curators' },
  { name: 'About Us', href: '/about-us' }
]

const mobileMenuOpen = ref(false)
</script>
