<template>
  <img
    :src="imageUrl"
    style="objectposition: {focusX}% {focusY}%"
    alt=""
    class="h-full w-full bg-gradient-to-t from-black to-transparent object-cover brightness-[0.25]"
  />
</template>

<script lang="ts" setup>
defineProps({
  imageUrl: {
    type: String,
    required: true,
  },
  focusX: {
    type: Number,
    default: 50,
  },
  focusY: {
    type: Number,
    default: 50,
  },
});
</script>

<style></style>
