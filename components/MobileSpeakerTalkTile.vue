<template>
  <SpeakerTalkTileBg :talk="talk">
    <div class="mt-4 flex h-8 shrink flex-row gap-2">
      <div
        class="h-min shrink-0 rounded-md bg-cota-primary px-2 py-1 text-xs uppercase text-cota-on-primary"
      >
        {{ talk.event.name }} <span></span>{{ talk.event.slug }}
      </div>
      <div
        class="h-min shrink-0 rounded-md bg-cota-primary px-2 py-1 text-xs uppercase text-cota-on-primary"
      >
        Hall {{ talk.room_id }}
      </div>
    </div>
    <p class="shrink-0 text-xs leading-6">
      {{ talk.starts_at_time }} - {{ talk.ends_at_time }}
    </p>
    <div>
      <h3 class="mb-1 line-clamp-2 text-lg font-semibold leading-5">
        {{ talk.title }}
      </h3>
      <div
        v-for="talk_speaker in talk.speakers"
        :key="talk_speaker.id"
        class="flex flex-row justify-start text-xs"
      >
        <h4 class="basis-1/2 font-light leading-5 text-cota-primary">
          {{ talk_speaker.full_name }}
        </h4>
        <h4 class="ml-6 line-clamp-1 basis-1/2 font-thin leading-5">
          {{ talk_speaker.company.name }}
        </h4>
      </div>
    </div>

    <div class="mt-6 grid flex-shrink-0 grid-cols-2 gap-x-4 gap-y-2">
      <div class="flex flex-col">
        <p class="text-xs uppercase text-cota-primary">Lang</p>
        <p class="font-thin">
          {{ talk.language == "en" ? "English" : "German" }}
        </p>
      </div>

      <div class="flex flex-col">
        <p class="text-xs uppercase text-cota-primary">level</p>
        <p class="font-thin">{{ talk.level }}</p>
      </div>

      <div class="flex flex-col">
        <p class="text-xs uppercase text-cota-primary">track</p>
        <p class="line-clamp-2 font-thin">
          {{ talk.track.label_translations[1].translation }}
        </p>
      </div>

      <div class="flex flex-col">
        <p class="text-xs uppercase text-cota-primary">Tech</p>
        <p class="font-thin">
          {{
            talk.programming_languages.reduce(
              (concatinat, currentLanguage) =>
                `${concatinat}  ${currentLanguage.label_translations[1].translation}`,
              "",
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
