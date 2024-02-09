<template>
  <NuxtLink
    :href="link"
    :class="[
      'cota-material uppercase text-cota-primary',
      thinVersion
        ? 'px-3.5 py-2 text-xs font-semibold'
        : 'px-3.5 py-2 text-sm font-bold',
    ]"
  >
    <slot />
  </NuxtLink>
</template>

<script lang="ts" setup>
defineProps({
  link: {
    type: String,
    required: true,
  },
  thinVersion: Boolean,
});
</script>

<style></style>
