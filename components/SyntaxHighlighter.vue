<template>
  <pre class="p-4">
    <code class="text-cota-primary/20 text-xs leading-4">{{code }}</code>
  </pre>
</template>

<script lang="ts">
export default {
  props: {
    code: {
      type: String,
      required: true
    }
  }
};
</script>

<style>
/* Define your primary color class in Tailwind configuration */
</style>
