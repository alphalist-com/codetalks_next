<template>
  <span class="font-light uppercase text-cota-primary">{{ text }}</span>
</template>

<script lang="ts">
export default {
  props: {
    text: {
      type: String,
      required: true,
    },
  },
};
</script>

<style></style>
