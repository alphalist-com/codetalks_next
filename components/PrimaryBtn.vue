<template>
  <NuxtLink
    :href="link"
    class="rounded-md px-3.5 py-2 text-sm font-semibold text-cota-on-primary bg-cota-primary"
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
