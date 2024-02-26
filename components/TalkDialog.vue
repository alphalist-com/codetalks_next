<template>
  <Dialog
    :open="talkDialogOpen"
    class="fixed inset-0 z-40 flex items-center justify-center"
  >
    <div
      class="fixed inset-0 bg-black bg-opacity-50"
      @click="$emit('close')"
    ></div>
    <DialogPanel
      class="text-cota-green relative z-50 mx-2 rounded-2xl border-2 border-cota-primary bg-cota-background text-sm font-semibold shadow-lg backdrop-blur-md backdrop-filter sm:mx-auto sm:max-w-2xl md:max-w-3xl"
    >
      <div class="text-white">
        <div
          class="max-h-[500px] overflow-scroll rounded-lg p-3 sm:px-8 sm:py-5"
        >
          <div class="mt-1 flex h-8 shrink flex-row gap-2 sm:mt-4">
            <div
              class="h-min shrink-0 rounded-md bg-cota-primary px-2 py-1 text-xs uppercase text-cota-on-primary"
            >
              {{ talkData.event.name }} <span></span>{{ talkData.event.slug }}
            </div>
            <div
              class="h-min shrink-0 rounded-md bg-cota-primary px-2 py-1 text-xs uppercase text-cota-on-primary"
            >
              Hall {{ talkData.room_id }}
            </div>
          </div>
          <div class="row-span-2 pb-2 pt-2">
            <p class="text-xl font-semibold sm:text-3xl">
              {{ talkData.title }}
            </p>
          </div>

          <div
            class="mt-2 grid flex-shrink-0 grid-cols-2 gap-x-4 gap-y-2 sm:grid-cols-5"
          >
            <div class="flex flex-col">
              <p class="text-xs uppercase text-cota-primary">
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
              <p class="text-xs uppercase text-cota-primary">Lang</p>
              <p class="font-thin">
                {{ talkData.language == "en" ? "English" : "German" }}
              </p>
            </div>

            <div class="flex flex-col">
              <p class="text-xs uppercase text-cota-primary">level</p>
              <p class="font-thin">{{ talkData.level }}</p>
            </div>

            <div class="flex flex-col">
              <p class="text-xs uppercase text-cota-primary">track</p>
              <p class="line-clamp-2 font-thin">
                {{ talkData.track.label_translations[1].translation }}
              </p>
            </div>

            <div class="flex flex-col">
              <p class="text-xs uppercase text-cota-primary">Tech</p>
              <p class="font-thin">
                {{
                  talkData.programming_languages.reduce(
                    (concatinat, currentLanguage) =>
                      `${concatinat}  ${currentLanguage.label_translations[1].translation}`,
                    "",
                  )
                }}
              </p>
            </div>
          </div>
          <p class="mt-5 font-normal">
            {{ talkData.abstract }}
          </p>
          <div
            class="flex justify-center gap-4 py-4"
            v-if="talkData.video_link || talkData.slides_url"
          >
            <PrimaryBtn
              v-if="talkData.video_link && talkData.video_link_approved"
              :link="talkData.video_link"
              >Watch Talk</PrimaryBtn
            >
            <OutlineBtn
              v-if="talkData.slides_url"
              :link="`https://app.codetalks.com${talkData.slides_url}`"
              >Download Slides</OutlineBtn
            >
          </div>
          <div class="mt-4">
            <ul class="flex flex-col gap-2 sm:gap-4">
              <li
                v-for="speaker in talkData.speakers"
                :key="speaker.user_id"
                class="cursor-pointer rounded-xl bg-[#1ABA8B]/15 p-2 hover:bg-[#1ABA8B]/30 sm:p-2"
                @click="handleSpeakerClick(speaker.user_id)"
              >
                <div class="flex flex-row">
                  <img
                    :src="`https://cota.fra1.cdn.digitaloceanspaces.com/${speaker.photo_url}`"
                    class="col-span-1 my-2 ml-2 h-24 w-24 rounded-lg border-2 border-cota-primary object-cover sm:h-36 sm:w-36"
                  />
                  <div
                    class="ml-4 flex flex-col justify-center py-2 sm:ml-8 sm:py-4"
                  >
                    <h3 class="text-md sm:text-lg">{{ speaker.full_name }}</h3>
                    <h4>
                      <span class="mt-1 font-normal text-cota-primary">
                        {{ speaker.position }}
                      </span>
                      @ {{ speaker.company.name }}
                    </h4>
                    <div class="mb-1 mt-auto flex space-x-2">
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
  },
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
