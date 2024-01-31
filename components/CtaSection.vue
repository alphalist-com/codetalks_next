<template>
  <div class="relative isolate overflow-hidden py-6 sm:py-8">
    <div class="mx-auto max-w-7xl px-6 lg:px-8">
      <div
        class="mx-auto grid max-w-2xl grid-cols-1 sm:grid-cols-2 gap-6 sm:mt-20 lg:mx-0 lg:max-w-none lg:grid-cols-3 lg:gap-8 justify-center"
      >
        <div
          v-for="item in items"
          :key="item.name"
          class=" p-6 cota-material rounded-3xl"
        >

          <div class="z-10">
            <SectionHeader>LET'S <SectionHeaderHighlightText :text="item.name"/> </SectionHeader>
            <p class="mt-2 text-cota-on-dark-material">
              {{ item.description }}
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
const props = defineProps({
  items: {
    type: Array,
    default: () => [],
  },
});
</script>
