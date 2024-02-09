<template>
  <div
    class="cursor-pointer rounded-xl bg-[#1ABA8B]/15 p-5 hover:bg-[#1ABA8B]/30 sm:p-8"
    :key="talk.id"
    @click="handleClick"
  >
    <slot />
  </div>
</template>

<script lang="ts" setup>
const props = defineProps({
  talk: {
    type: Object,
    required: true,
  },
});

type OpenDialogFunction = (details: any) => void;

const openDialog = inject<OpenDialogFunction>(
  "openDialogWithTalkData",
  (details) => {
    console.log("Undefined openDialogCall with data", details);
  },
);

const handleClick = () => {
  if (props) {
    openDialog(props.talk);
  }
};
</script>

<style></style>
