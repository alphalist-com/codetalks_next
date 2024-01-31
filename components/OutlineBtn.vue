<template>
  <NuxtLink
    :href="link"
    class="px-3.5 py-2 text-sm font-bold uppercase text-cota-primary cota-material"
    ><slot
  /></NuxtLink>
</template>

<script lang="ts" setup>
defineProps({
  link: {
    type: String,
    required: true,
  },
});
</script>

<style></style>
