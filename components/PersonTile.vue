<template>
  <div>
    <div
      :class="[
        'relative flex h-52 w-36 flex-col items-center sm:h-60 sm:w-40',
        person.detailedInfos ? 'cursor-pointer' : '',
      ]"
      @click="handleClick"
    >
      <div
        class="cota-material relative h-full w-full overflow-hidden rounded-lg"
      >
        <img
          class="h-full w-full object-cover"
          :src="props.person.image"
          :alt="person.name"
        />
        <div
          class="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black to-transparent p-2"
        >
          <div class="grid grid-cols-10">
            <p
              class="text-md col-span-10 line-clamp-1 text-clip font-semibold text-white"
            >
              {{ person.name }}
            </p>
            <p
              v-if="person.position"
              class="col-span-10 line-clamp-1 text-ellipsis text-sm text-gray-300"
            >
              {{ person.position }}
            </p>
            <p
              v-if="person.company"
              class="col-span-9 line-clamp-1 h-4 text-clip text-sm text-gray-300"
            >
              {{ person.company }}
            </p>
            <button
              v-if="person.detailedInfos"
              class="cota-material col-span-1 h-4 w-4 items-center justify-center rounded-full"
            >
              <p class="text-xs text-cota-primary">i</p>
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import type { Person } from "@/utils/types/person";
import { inject } from "vue";

type OpenDialogFunction = (details: any) => void;

const props = defineProps({
  person: {
    type: Object as PropType<Person>,
    required: true,
  },
});

const openDialog = inject<OpenDialogFunction>(
  "openDialogWithPersonId",
  (details) => {
    console.log("Undefined openDialogCall with data", details);
  },
);

const handleClick = () => {
  if (props.person.detailedInfos && openDialog) {
    openDialog(props.person.detailedInfos);
  }
};
</script>

<style></style>
