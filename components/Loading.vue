<template>
  <div class="grid content-center">
    <h1 class="px-6 py-4 text-center text-3xl animate-text-outline">Loading</h1>
  </div>
</template>

<script lang="ts" setup></script>

<style scoped>
@keyframes textOutline {
  0%,
  100% {
    text-shadow: 0 0 2px #1aba8b;
  }
  25% {
    text-shadow: 0 0 2px #1aba8b, 0 0 4px #1aba8b;
  }
  50% {
    text-shadow: 0 0 2px #1aba8b, 0 0 4px #1aba8b, 0 0 6px #1aba8b;
  }
  75% {
    text-shadow: 0 0 2px #1aba8b, 0 0 4px #1aba8b, 0 0 6px #1aba8b,
      0 0 8px #1aba8b;
  }
}

.animate-text-outline {
  animation: textOutline 1s infinite;
  color: transparent;
}
</style>
