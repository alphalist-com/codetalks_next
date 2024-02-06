<template>
  <Dialog
    :open="talkDialogOpen"
    class="fixed inset-0 flex items-center justify-center z-40"
  >
    <div
      class="fixed inset-0 bg-black bg-opacity-50"
      @click="$emit('close')"
    ></div>
    <DialogPanel
      class="mx-2 sm:max-w-2xl md:max-w-3xl relative sm:mx-auto rounded-2xl text-sm font-semibold text-cota-green shadow-lg backdrop-filter backdrop-blur-md border-2 border-cota-primary bg-cota-background z-50"
    >
      <div class="text-white">
        <div class="overflow-scroll max-h-[500px] rounded-lg p-3 sm:py-5 sm:px-8">
          <div class="mt-1 sm:mt-4 shrink flex flex-row h-8 gap-2">
            <div
              class="bg-cota-primary text-cota-on-primary h-min rounded-md px-2 py-1 uppercase text-xs shrink-0"
            >
              {{ talkData.event.name }} <span></span>{{ talkData.event.slug }}
            </div>
            <div
              class="bg-cota-primary text-cota-on-primary h-min rounded-md px-2 py-1 uppercase text-xs shrink-0"
            >
              Hall {{ talkData.room_id }}
            </div>
          </div>
          <div class="row-span-2 pt-2 pb-2">
            <p class="text-xl sm:text-3xl font-semibold">
              {{ talkData.title }}
            </p>
          </div>

          <div class="mt-2 flex-shrink-0 gap-x-4 gap-y-2 grid grid-cols-2 sm:grid-cols-5">
            <div class="flex flex-col">
              <p class="text-cota-primary uppercase text-xs">
                {{ talkData.starts_at_day == "Do" ? "Thur" : "Fri" }}
              </p>
              <p class="font-thin">
                {{ talkData.starts_at_time }}
              </p>
              <p class="font-thin">
                {{ talkData.ends_at_time }}
              </p>
            </div>

            <div class="flex flex-col">
              <p class="text-cota-primary uppercase text-xs">Lang</p>
              <p class="font-thin">
                {{ talkData.language == "en" ? "English" : "German" }}
              </p>
            </div>

            <div class="flex flex-col">
              <p class="text-cota-primary uppercase text-xs">level</p>
              <p class="font-thin">{{ talkData.level }}</p>
            </div>

            <div class="flex flex-col">
              <p class="text-cota-primary uppercase text-xs">track</p>
              <p class="font-thin line-clamp-2">
                {{ talkData.track.label_translations[1].translation }}
              </p>
            </div>

            <div class="flex flex-col">
              <p class="text-cota-primary uppercase text-xs">Tech</p>
              <p class="font-thin">
                {{
                  talkData.programming_languages.reduce(
                    (concatinat, currentLanguage) =>
                      `${concatinat}  ${currentLanguage.label_translations[1].translation}`,
                    ""
                  )
                }}
              </p>
            </div>
          </div>
          <p class="mt-5 font-normal">
            {{ talkData.abstract }}
          </p>
          <div
            class="py-4 flex justify-center"
            v-if="talkData.video_link || talkData.slides_url"
          >
            <PrimaryBtn v-if="talkData.video_link" :link="talkData.video_link"
              >Watch Talk</PrimaryBtn
            >
            <OutlineBtn v-if="talkData.slides_url" :link="`https://codetalks.de${talkData.slides_url}`"
              >Download Slides</OutlineBtn
            >
          </div>
          <div class="">
            <ul class="flex flex-col gap-2 sm:gap-4">
              <li
                v-for="speaker in talkData.speakers"
                :key="speaker.user_id"
                class="bg-[#1ABA8B]/15 hover:bg-[#1ABA8B]/30 rounded-xl p-2 sm:p-2 cursor-pointer"
                @click="handleSpeakerClick(speaker.user_id)"
                >
                <div class="flex flex-row ">
              <img
                :src="`https://codetalks.de/${speaker.photo_url}`"
                class="h-24 sm:h-36 sm:w-36 w-24 object-cover rounded-lg col-span-1 border-cota-primary border-2 ml-2 my-2"
              />
              <div class="ml-4 sm:ml-8 flex flex-col py-2 sm:py-4 justify-center">
                <h3 class="text-md sm:text-lg">{{ speaker.full_name }}</h3>
                <h4 > <span class="mt-1 text-cota-primary font-normal"> {{ speaker.position }} </span> @ {{ speaker.company.name }}</h4>
                <div class="flex mt-auto mb-1 space-x-2">
                  <NuxtLink
                    v-if="speaker.linkedin_profile"
                    :href="speaker.linkedin_profile"
                    class="text-cota-primary hover:text-gray-400"
                  >
                    <span class="sr-only">linkedIn_profile</span>
                    <img src="/social_icons/linkedin.svg" class="h-6 w-6" />
                  </NuxtLink>
                  <NuxtLink
                    v-if="speaker.twitter_profile"
                    :href="speaker.twitter_profile"
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
                    v-if="speaker.github_profile"
                    :href="speaker.github_profile"
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
                    v-if="speaker.gitlab_profile"
                    :href="speaker.gitlab_profile"
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
                    v-if="speaker.medium_profile"
                    :href="speaker.medium_profile"
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
                    v-if="speaker.blog"
                    :href="speaker.blog"
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
            </li>
            </ul>
          </div>
        </div>
      </div>
    </DialogPanel>
  </Dialog>
</template>

<script lang="ts" setup>
import { Dialog, DialogPanel, DialogOverlay } from "@headlessui/vue";

const smallScreen: Boolean = computed(() => window.innerWidth < 640);

type OpenDialogFunction = (details: any) => void;

const openDialog = inject<OpenDialogFunction>(
  "openDialogWithPersonId",
  (details) => {
    console.log("Undefined openDialogCall with data", details);
  }
);

const handleSpeakerClick = (speakerId: String) => {
  console.log(speakerId);
  if (speakerId) {
    openDialog(speakerId);
  }
};

const props = defineProps({
  talkDialogOpen: {
    type: Boolean,
    default: false,
  },
  talkData: {
    type: Object,
  },
});

const emits = defineEmits(["close"]);
</script>

<style scoped></style>
