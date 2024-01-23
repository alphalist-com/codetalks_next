<template>
  <Dialog
    @close="dialogClosed"
    :open="isOpen"
    class="fixed inset-0 flex items-center justify-center z-20"
  >
    <div
      class="fixed inset-0 bg-black bg-opacity-50"
      @click="closeDialog"
    ></div>
    <DialogPanel
      class="relative mx-auto p-1 rounded-md text-sm font-semibold text-cota-green shadow-lg backdrop-filter backdrop-blur-md bg-gradient-to-br firefox:bg-opacity-90 from-10% from-white/30 to-85% to-white/5 bg-frosted-glass-texture/50 z-30"
    >

      <slot></slot>
    </DialogPanel>
  </Dialog>
</template>

<script setup>
import { ref, watch } from 'vue';
import { Dialog, DialogPanel } from '@headlessui/vue';

const props = defineProps({
  isOpen: Boolean,
  onClose: Function
});

const closeDialog = () => {
  if (props.onClose) {
    props.onClose();
  }
};

watch(() => props.isOpen, (newVal) => {
  // Additional logic if needed when dialog state changes
});
</script>
