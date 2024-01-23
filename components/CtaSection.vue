<template>
  <div class="relative isolate overflow-hidden py-6 sm:py-8">
    <div class="mx-auto max-w-7xl px-6 lg:px-8">
      <div
        class="mx-auto mt-16 grid max-w-2xl grid-cols-1 sm:grid-cols-2 gap-6 sm:mt-20 lg:mx-0 lg:max-w-none lg:grid-cols-3 lg:gap-8 justify-center"
      >
        <div
          v-for="item in items"
          :key="item.name"
          class="rounded-xl overflow-hidden shadow-frosted-edge p-6 backdrop-filter backdrop-blur-sm bg-frosted-glass-texture bg-gradient-custom"
        >
          <div class="absolute -top-4 -right-4 -z-10">
            <h3 class="text-right text-9xl opacity-15">{{ item.icon }}</h3>
          </div>
          <div class="z-10">
            <h3 class="text-cota-on-dark-material font-extrabold">
              LET'S
              <span class="font-thin text-cota-primary">{{ item.name }}</span>
            </h3>
            <p class="mt-2 text-cota-on-dark-material">
              {{ item.description }}
            </p>
            <div v-if="item.cta" class="mt-4">
              <a
                class="text-sm font-semibold text-cota-primary"
                @click="dialogOpen = true"
                >{{ item.cta }} <span aria-hidden="true">→</span></a
              >
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>

const props = defineProps({
  items: {
    type: Array,
    default: () => []
  }
});

</script>
