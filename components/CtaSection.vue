<template>
  <div class="relative isolate overflow-hidden py-6 sm:py-8">
    <div class="mx-auto max-w-7xl px-6 lg:px-8">
      <div
        class="mx-auto flex flex-wrap justify-center gap-6 sm:mt-20 lg:gap-8"
      >
        <div
          v-for="item in items"
          :key="item.name"
          class="cota-material rounded-3xl p-6"
        >
          <div class="z-10 flex-initial sm:w-72">
            <SubSectionHeader
              >LET'S <SectionHeaderHighlightText :text="item.name"
            /></SubSectionHeader>
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
