<template>
  <h3
    class="outline-text text-3xl font-bold uppercase tracking-tight text-transparent sm:text-5xl"
  >
    <slot />
  </h3>
</template>

<script lang="ts" setup></script>

<style>
.outline-text {
  -webkit-text-stroke: 1px #1aba8b;
  color: transparent;
}
</style>
