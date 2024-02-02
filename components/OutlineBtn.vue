<template>
  <NuxtLink
    :href="link"
    :class="['uppercase text-cota-primary cota-material', 
            thinVersion ? 'font-semibold px-3.5 py-2 text-xs' : 'font-bold px-3.5 py-2 text-sm']"
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
  thinVersion: Boolean
});
</script>

<style></style>
