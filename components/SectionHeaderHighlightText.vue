<template>
  <span class="text-cota-primary font-light">{{ text }}</span>
</template>


<script lang="ts">
export default {
  props: {
    text: {
      type: String,
      required: true
    }
  }
};
</script>

<style>

</style>