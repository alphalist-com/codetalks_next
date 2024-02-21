<template>
  <div class="py-12">
    <div class="mx-auto sm:max-w-3xl lg:max-w-5xl">
      <dl
        class="flex flex-wrap items-center justify-evenly gap-x-20 gap-y-16 text-center"
      >
        <div
          v-for="stat in stats"
          :key="stat.id"
          class="mx-auto max-w-xs shrink-0 gap-y-2"
        >
          <dd class="order-first text-7xl text-cota-primary">
            {{ stat.value }}
          </dd>
          <SectionHeader class="pt-2" :center-align="true">{{
            stat.name
          }}</SectionHeader>
        </div>
      </dl>
    </div>
  </div>
</template>

<script setup lang="ts">
const stats = [
  { id: 1, name: "Visitors", value: "3000" },
  { id: 2, name: "Speakers", value: "130" },
  { id: 3, name: "Talks", value: "120" },
  { id: 4, name: "Popcorn", value: "2T" },
];
</script>
