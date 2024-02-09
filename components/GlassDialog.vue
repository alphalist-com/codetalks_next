<template>
  <Dialog
    @close="dialogClosed"
    :open="isOpen"
    class="fixed inset-0 z-20 flex items-center justify-center"
  >
    <div
      class="fixed inset-0 bg-black bg-opacity-50"
      @click="closeDialog"
    ></div>
    <DialogPanel
      class="text-cota-green firefox:bg-opacity-90 bg-frosted-glass-texture/50 relative z-30 mx-auto rounded-md bg-gradient-to-br from-white/30 from-10% to-white/5 to-85% p-1 text-sm font-semibold shadow-lg backdrop-blur-md backdrop-filter"
    >
      <slot></slot>
    </DialogPanel>
  </Dialog>
</template>

<script setup>
import { ref, watch } from "vue";
import { Dialog, DialogPanel } from "@headlessui/vue";

const props = defineProps({
  isOpen: Boolean,
  onClose: Function,
});

const closeDialog = () => {
  if (props.onClose) {
    props.onClose();
  }
};

watch(
  () => props.isOpen,
  (newVal) => {
    // Additional logic if needed when dialog state changes
  },
);
</script>
