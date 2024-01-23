<template>
  <section class="isolate overflow-hidden -mx-12">
    <div class="relative mx-auto max-w-3xl my-28 lg:max-w-4xl">
      <Swiper
        :slidesPerView="1"
        :spaceBetween="30"
        :loop="true"
        :pagination="{
          clickable: true,
        }"
        :modules="[SwiperPagination, SwiperNavigation, SwiperEffectCoverflow]"
        class="mySwiper"
      >
        <SwiperSlide v-for="(imageInfo, index) in imageInfos" :key="index">
          <div class="relative">
            <img
              class="rounded-xl w-full aspect-square md:aspect-video object-cover"
              :src="imageInfo.url"
              :alt="`Image ${index + 1}`"
              :style="{ objectPosition: imageInfo.focusPoint }"
            />
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  </section>
</template>

<script setup lang="ts">

const props = defineProps({
  imageInfos: {
    type: Array,
    default: () => []
  }
});

</script>

<style>
.swiper-pagination-bullet {
  background-color: aliceblue;
}

.swiper-pagination-bullet-active {
  background-color: antiquewhite;
}
</style>
