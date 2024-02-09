<template>
  <Dialog
    :open="speakerDialogOpen"
    class="fixed inset-0 z-40 flex items-center justify-center"
  >
    <div
      class="fixed inset-0 bg-black bg-opacity-50"
      @click="$emit('close')"
    ></div>
    <DialogPanel
      class="text-cota-green relative z-50 max-w-full rounded-2xl border-2 border-cota-primary bg-cota-background text-sm font-semibold shadow-lg backdrop-blur-md backdrop-filter sm:mx-auto sm:max-w-2xl md:max-w-3xl lg:max-w-4xl"
    >
      <div class="text-white">
        <div
          class="flex h-full items-center justify-center"
          v-if="fetchingData"
        >
          <Loading />
        </div>
        <div class="p-3 sm:p-6" v-else>
          <div class="">
            <div class="flex flex-row pb-4">
              <img
                :src="`https://codetalks.de/${speakerData.photo_url}`"
                class="col-span-1 h-36 w-36 rounded-lg border-2 border-cota-primary object-cover sm:h-40 sm:w-40"
              />
              <div
                class="ml-4 flex flex-col justify-between py-1 sm:ml-8 sm:py-4"
              >
                <h3 class="text-md sm:text-lg">{{ speakerData.full_name }}</h3>
                <h4>
                  <span class="font-normal text-cota-primary">
                    {{ speakerData.attendee.position }}
                  </span>
                  @ {{ speakerData.attendee.company.name }}
                </h4>
                <div class="mt-auto flex space-x-4 md:order-2">
                  <NuxtLink
                    v-if="speakerData?.attendee?.linkedin_profile"
                    :href="speakerData?.attendee?.linkedin_profile"
                    class="text-cota-primary hover:text-gray-400"
                  >
                    <span class="sr-only">linkedIn_profile</span>
                    <img src="/social_icons/linkedin.svg" class="h-6 w-6" />
                  </NuxtLink>
                  <NuxtLink
                    v-if="speakerData?.attendee?.twitter_profile"
                    :href="speakerData?.attendee?.twitter_profile"
                    class="text-cota-primary hover:text-gray-400"
                  >
                    <span class="sr-only">twitter_profile</span>
                    <img
                      src="/social_icons/twitterx.svg"
                      class="h-6 w-6"
                      aria-hidden="true"
                    />
                  </NuxtLink>
                  <NuxtLink
                    v-if="speakerData?.attendee?.github_profile"
                    :href="speakerData?.attendee?.github_profile"
                    class="text-cota-primary hover:text-gray-400"
                  >
                    <span class="sr-only">github_profile</span>
                    <img
                      src="/social_icons/github.svg"
                      class="h-6 w-6"
                      aria-hidden="true"
                    />
                  </NuxtLink>
                  <NuxtLink
                    v-if="speakerData?.attendee?.gitlab_profile"
                    :href="speakerData?.attendee?.gitlab_profile"
                    class="text-cota-primary hover:text-gray-400"
                  >
                    <span class="sr-only">gitlab_profile</span>
                    <img
                      src="/social_icons/gitlab.svg"
                      class="h-6 w-6"
                      aria-hidden="true"
                    />
                  </NuxtLink>
                  <NuxtLink
                    v-if="speakerData?.attendee?.medium_profile"
                    :href="speakerData?.attendee?.medium_profile"
                    class="text-cota-primary hover:text-gray-400"
                  >
                    <span class="sr-only">medium_profile</span>
                    <img
                      src="/social_icons/medium.svg"
                      class="h-6 w-6"
                      aria-hidden="true"
                    />
                  </NuxtLink>
                  <NuxtLink
                    v-if="speakerData?.attendee?.blog"
                    :href="speakerData?.attendee?.blog"
                    class="text-cota-primary hover:text-gray-400"
                  >
                    <span class="sr-only">blog</span>
                    <img
                      src="/social_icons/website.svg"
                      class="h-6 w-6"
                      aria-hidden="true"
                    />
                  </NuxtLink>
                </div>
              </div>
            </div>
            <div class="max-h-96 overflow-y-auto overflow-x-hidden rounded-lg">
              <div class="row-span-2 pb-4 pt-2">
                <p class="text-sm font-light">
                  {{ speakerData.attendee.biography }}
                </p>
              </div>
              <div class="">
                <ul class="flex flex-col gap-2 sm:gap-4">
                  <li class="m-1" v-for="talk in speakerData.attendee.talks">
                    <MobileSpeakerTalkTile v-if="smallScreen" :talk="talk" />
                    <NormalSpeakerTalkTile v-else :talk="talk" />
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </DialogPanel>
  </Dialog>
</template>

<script lang="ts" setup>
import { Dialog, DialogPanel, DialogOverlay } from "@headlessui/vue";

export interface SpeakerDetails {
  id: String;
}

const smallScreen: Boolean = computed(() => window.innerWidth < 640);

const props = defineProps({
  speakerDialogOpen: {
    type: Boolean,
    default: false,
  },
  speakerId: {
    type: String,
    required: true,
  },
});

const emits = defineEmits(["close"]);

const fetchingData = ref(false);
const speakerData = ref<Object | null>(null);
// const smallScreen = ref<Boolean>(false);

// watch(
//   () => window.innerWidth,
//   async (newWidth) => {
//     if(newWidth) {
//       smallScreen.value = window.innerWidth < 640;
//     }
//   },
//   {
//     immediate: true,
//   }
// );

watch(
  () => props.speakerId,
  async (newSpeakerId) => {
    if (newSpeakerId) {
      try {
        fetchingData.value = true;
        const { speakerDetails } = await $fetch("/api/cota/speaker_details", {
          method: "post",
          body: JSON.stringify({ speakerId: newSpeakerId }),
        });
        console.log(speakerDetails);
        if (speakerDetails) {
          speakerData.value = speakerDetails;
        }
        fetchingData.value = false;
      } catch (error) {
        console.error("Failed to fetch speaker data:", error);
      }
    }
  },
  {
    immediate: true,
  },
);
</script>

<style></style>
