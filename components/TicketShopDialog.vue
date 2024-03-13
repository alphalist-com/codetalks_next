<template>
  <div>
    <div
      class="fixed inset-0 z-40 flex items-center justify-center px-6 pb-12 pt-6 md:px-20 md:py-12"
    >
      <div class="fixed inset-0 bg-black/50" @click="$emit('close')"></div>
      <div
        class="text-cota-green relative z-50 max-h-full max-w-full overflow-x-auto overflow-y-auto rounded-xl border-2 border-cota-primary bg-cota-background text-sm font-semibold shadow-lg backdrop-blur-md backdrop-filter sm:mx-auto sm:max-w-2xl md:max-w-3xl lg:max-w-4xl"
      >
        <div
          class="viovendi-widget viovendi-booking-widget"
          data-viovendi-locale="en-us"
          data-viovendi-organizer="16339"
          data-viovendi-widget-config-name="booking-16339-54061"
          data-viovendi-event="145839"
        ></div>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
const emits = defineEmits(["close"]);

onMounted(() => {
  const script = document.createElement("script");
  script.src = "https://doo.net/viovendi-embed.js";
  script.type = "text/javascript";
  script.async = true;
  script.setAttribute("data-viovendi-version", "1");
  document.head.appendChild(script);
});
</script>

<style>
.viovendi-widget {
  background-color: #8c0000;
  color: #8c0000;
}
</style>
