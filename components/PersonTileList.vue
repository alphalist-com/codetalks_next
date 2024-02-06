<template>
  <div>
    <ul
      role="list"
      class="mx-auto max-w-fit mt-12 grid grid-cols-2 gap-6 px-0 sm:grid-cols-3 sm:px-6 md:grid-cols-4 xl:grid-cols-6 relative"
    >
      <div
        v-if="fadeOut"
        class="z-10 absolute bottom-0 left-0 right-0 h-1/4 bg-gradient-to-t from-cota-background from-15% to-transparent to-100%"
      ></div>

      <li v-for="person in personArray" :key="person.name">
        <PersonTile :person="person" />
      </li>
    </ul>
  </div>
</template>

<script lang="ts" setup>
import type { Person } from "~/utils/types/person";

const props = defineProps({
  personArray: {
    type: Array as PropType<Person[]>,
    required: true,
  },
  fadeOut: { type: Boolean, default: false },
});
</script>

<style></style>
