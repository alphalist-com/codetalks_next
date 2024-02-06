<template>
  <SpeakerTalkTileBg class="flex flex-row" :talk="talk">
    <div class="shrink pr-4">
      <div class="h-12"></div>
      <p>{{ talk.starts_at_time }}</p>
      <p>{{ talk.ends_at_time }}</p>
    </div>
    <div class="grow flex flex-col">
      <div class="flex flex-row h-12 gap-2">
        <div
          class="bg-cota-primary text-cota-on-primary h-min rounded-md px-2 py-1 uppercase text-xs shrink-0"
        >
          {{ talk.event.name }} <span></span>{{ talk.event.slug }}
        </div>
        <div
          class="bg-cota-primary text-cota-on-primary h-min rounded-md px-2 py-1 uppercase text-xs shrink-0"
        >
          Hall {{ talk.room_id }}
        </div>
      </div>
      <div>
        <h3 class="text-lg font-semibold line-clamp-1 leading-5">
          {{ talk.title }}
        </h3>
        <div
          v-for="talk_speaker in talk.speakers"
          :key="talk_speaker.id"
          class="flex flex-row text-xs justify-start"
        >
          <h4 class="font-light text-cota-primary leading-5 basis-1/2">
            {{ talk_speaker.full_name }}
          </h4>
          <h4 class="ml-6 leading-5 font-thin line-clamp-1 basis-1/2">
            {{ talk_speaker.company.name }}
          </h4>
        </div>
      </div>
    </div>
    <div class="ml-4 basis-1/4 flex-shrink-0 gap-6 grid grid-cols-2">
      <div class="flex flex-col">
        <p class="text-cota-primary uppercase text-xs">Lang</p>
        <p class="font-thin">
          {{ talk.language == "en" ? "English" : "German" }}
        </p>
      </div>

      <div class="flex flex-col">
        <p class="text-cota-primary uppercase text-xs">level</p>
        <p class="font-thin">{{ talk.level }}</p>
      </div>

      <div class="flex flex-col">
        <p class="text-cota-primary uppercase text-xs">track</p>
        <p class="font-thin line-clamp-2">
          {{ talk.track.label_translations[1].translation }}
        </p>
      </div>

      <div class="flex flex-col">
        <p class="text-cota-primary uppercase text-xs">Tech</p>
        <p class="font-thin">
          {{
            talk.programming_languages.reduce(
              (concatinat, currentLanguage) =>
                `${concatinat}  ${currentLanguage.label_translations[1].translation}`,
              ""
            )
          }}
        </p>
      </div>
    </div>
  </SpeakerTalkTileBg>
</template>

<script lang="ts" setup>
defineProps({
  talk: {
    type: Object,
    required: true,
  },
});
</script>

<style></style>
