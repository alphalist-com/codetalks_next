<template>
  <NuxtLink
    :href="href"
    class="block rounded-lg bg-cota-background p-6 shadow-lg hover:shadow-xl transition-shadow"
    data-toggle="modal"
    data-modal-scroll-top="false"
  >
    <div class="flex items-center space-x-4">
      <img :src="icon" alt="" class="h-12 w-12" />
      <h3 class="text-xl font-bold text-white">{{ title }}</h3>
    </div>
    <p class="mt-4 text-white">
      {{ description }}
    </p>
  </NuxtLink>
</template>

<script setup lang="ts">
defineProps(['title', 'description', 'icon', 'href']);
</script>

<style scoped>
</style>
