<template>
  <div class="py-12">
    <div class="mx-auto max-w-7xl">
      <dl
        class="grid grid-cols-2 gap-x-8 gap-y-16 text-center lg:grid-cols-3 xl:grid-cols-4"
      >
        <div
          v-for="stat in stats"
          :key="stat.id"
          class="mx-auto flex max-w-xs flex-col gap-y-2"
          :class="{ 'sm:col-start-auto': stat.id === stats.length }"
        >
          <dd
            class="order-first text-3xl text-cota-primary md:text-7xl"
          >
            {{ stat.value }}
          </dd>
          <dt class="uppercase text-3xl font-bold text-cota-secondary">
            {{ stat.name }}
          </dt>
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
