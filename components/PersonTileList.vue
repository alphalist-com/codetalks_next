<template>
  <div>
    <ul
      role="list"
      class="relative mx-auto mt-12 grid max-w-fit grid-cols-2 gap-6 px-0 sm:grid-cols-3 sm:px-6 md:grid-cols-4 xl:grid-cols-6"
    >
      <div
        v-if="fadeOut"
        class="absolute bottom-0 left-0 right-0 z-10 h-64 bg-gradient-to-t from-cota-background from-50% to-transparent to-100%"
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
