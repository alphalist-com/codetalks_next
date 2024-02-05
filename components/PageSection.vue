<template>
  <div :class="['mt-12', withPadding ? 'px-6 sm:px-12' : '']">
    <slot class="max-w-4xl px-8" name="headlines" />
    <slot />
  </div>
</template>

<script lang="ts" setup>
defineProps({
  withPadding: {
    type: Boolean,
    default: true,
  },
});
</script>

<style></style>
