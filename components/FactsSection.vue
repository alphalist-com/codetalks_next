<template>
  <div class="py-12">
    <div class="mx-auto max-w-7xl">
      <dl
        class="flex flex-wrap gap-x-20 gap-y-16 text-center justify-evenly items-center"
      >
        <div
          v-for="stat in stats"
          :key="stat.id"
          class="mx-auto max-w-xs gap-y-2 shrink-0"
        >
          <dd
            class="order-first text-cota-primary text-7xl"
          >
            {{ stat.value }}
          </dd>
          <SectionHeader>{{ stat.name }}</SectionHeader>
        </div>
      </dl>
    </div>
  </div>
</template>

<script setup lang="ts">
const stats = [
  { id: 1, name: "Besucher", value: "3000" },
  { id: 2, name: "Speaker", value: "130" },
  { id: 3, name: "Talks", value: "120" },
  { id: 4, name: "Popcorn", value: "2T" },
];
</script>
