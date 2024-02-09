<template>
  <div
    :class="[
      'flex flex-row pt-12',
      centerAlign ? 'justify-center' : 'justify-start',
    ]"
    :id="elementId"
  >
    <div class="relative">
      <h3
        class="text-2xl font-bold uppercase tracking-tight text-cota-secondary sm:text-4xl"
      >
        <slot />
      </h3>
      <button
        v-if="elementId"
        @click="copyToClipboard(elementId)"
        class="absolute bottom-0 right-0 z-10 -mr-10 mb-0.5 p-2 text-cota-primary sm:-mr-12 sm:mb-1.5"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 16 16"
          fill="currentColor"
          class="h-4 w-4"
        >
          <path
            fill-rule="evenodd"
            d="M8.914 6.025a.75.75 0 0 1 1.06 0 3.5 3.5 0 0 1 0 4.95l-2 2a3.5 3.5 0 0 1-5.396-4.402.75.75 0 0 1 1.251.827 2 2 0 0 0 3.085 2.514l2-2a2 2 0 0 0 0-2.828.75.75 0 0 1 0-1.06Z"
            clip-rule="evenodd"
          />
          <path
            fill-rule="evenodd"
            d="M7.086 9.975a.75.75 0 0 1-1.06 0 3.5 3.5 0 0 1 0-4.95l2-2a3.5 3.5 0 0 1 5.396 4.402.75.75 0 0 1-1.251-.827 2 2 0 0 0-3.085-2.514l-2 2a2 2 0 0 0 0 2.828.75.75 0 0 1 0 1.06Z"
            clip-rule="evenodd"
          />
        </svg>
      </button>
    </div>
  </div>
</template>

<script lang="ts" setup>
const props = defineProps({
  elementId: String,
  centerAlign: {
    type: Boolean,
    default: false,
  },
});

const copyToClipboard = (elementId: String) => {
  const url = `${window.location.origin}${window.location.pathname}#${elementId}`;
  navigator.clipboard
    .writeText(url)
    .then(() => console.log(`Copied to clipboard: ${url}`))
    .catch((err) => console.error("Failed to copy: ", err));
};
</script>

<style scoped></style>
