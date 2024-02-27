<template>
  <NuxtLink
    :href="link"
    class="cursor-pointer justify-self-center rounded-md bg-cota-primary px-3.5 py-2 text-sm font-semibold uppercase text-cota-on-primary"
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
