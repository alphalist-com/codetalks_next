<template>
  <div class="py-12">
    <div class="mx-auto max-w-7xl">
      <dl class="grid grid-cols-2 gap-x-8 gap-y-16 text-center lg:grid-cols-3 xl:grid-cols-4">
        <div 
          v-for="stat in stats" 
          :key="stat.id" 
          class="mx-auto flex max-w-xs flex-col gap-y-4"
          :class="{'sm:col-start-auto': stat.id === stats.length}"
        >
          <dt class="font-extrabold md:text-4xl text-3xl text-cota-secondary">{{ stat.name }}</dt>
          <dd class="order-first text-4xl font-extrabold tracking-tight text-cota-primary md:text-7xl">{{ stat.value }}</dd>
        </div>
      </dl>
    </div>
  </div>
</template>

<script setup lang="ts">
const stats = [
  { id: 1, name: 'Visitor', value: '3000+' },
  { id: 2, name: 'Speaker', value: '140+' },
  { id: 3, name: 'Talks', value: '120' },
  { id: 4, name: 'Popcorn', value: '2 Tons' },
]
</script>
