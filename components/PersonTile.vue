<template>
  <div class="relative flex flex-col items-center w-36 h-56 sm:w-40 sm:h-64 cursor-pointer">
    <div
      class="relative w-full h-full cota-material rounded-lg overflow-hidden"
    >
      <img
        class="w-full h-full object-cover"
        :src="props.person.image"
        :alt="person.name"
      />
      <div
        class="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black to-transparent p-2"
      >
        <div class="grid grid-cols-10">
          <p
            class="col-span-10 text-md text-clip line-clamp-1 font-semibold text-white"
          >
            {{ person.name }}
          </p>
          <p
            v-if="person.position"
            class="col-span-10 text-sm text-ellipsis line-clamp-1 text-gray-300"
          >
            {{ person.position }}
          </p>
          <p
            v-if="person.company"
            class="col-span-9 text-sm text-clip h-4 line-clamp-1 text-gray-300"
          >
            {{ person.company }}
          </p>
          <button
            v-if="person.detailedInfos"
            class="col-span-1 items-center justify-center w-4 h-4 cota-material rounded-full"
          >
            <p class="text-cota-primary text-xs">i</p>
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import type { Person } from "@/utils/types/person";

const props = defineProps({
  person: {
    type: Object as PropType<Person>,
    required: true,
  },
});
</script>

<style></style>
