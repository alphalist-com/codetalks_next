<template>
  <SpeakerTalkTileBg :talk="talk">
    <div class="mt-4 shrink flex flex-row h-8 gap-2">
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
    <p class="text-xs shrink-0 leading-6">
      {{ talk.starts_at_time }} - {{ talk.ends_at_time }}
    </p>
    <div>
      <h3 class="text-lg font-semibold line-clamp-2 leading-5 mb-1">
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

    <div class="mt-6 flex-shrink-0 gap-x-4 gap-y-2 grid grid-cols-2">
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
