<template>
  <div class="relative isolate overflow-hidden py-6 sm:py-8">
    <div class="mx-auto max-w-7xl px-6 lg:px-8">
      <div
        class="mx-auto flex flex-wrap gap-6 sm:mt-20 lg:gap-8 justify-center"
      >
        <div
          v-for="item in items"
          :key="item.name"
          class=" p-6 cota-material rounded-3xl"
        >

          <div class="z-10 shrink-0 w-72">
            <SubSectionHeader>LET'S <SectionHeaderHighlightText :text="item.name"/></SubSectionHeader>
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
