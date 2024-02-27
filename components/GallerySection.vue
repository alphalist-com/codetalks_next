<template>
  <section class="isolate overflow-hidden">
    <div class="relative mx-auto my-10 px-4 sm:px-8">
      <Swiper
        :slidesPerView="1"
        :spaceBetween="30"
        :loop="true"
        :pagination="{
          clickable: true,
        }"
        :navigation="{
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
        }"
        :autoplay="{
          delay: 5000,
          disableOnInteraction: false,
        }"
        :modules="[
          SwiperPagination,
          SwiperNavigation,
          SwiperEffectCoverflow,
          SwiperAutoplay,
        ]"
        class="mySwiper"
      >
        <SwiperSlide v-for="(imageInfo, index) in imageInfos" :key="index">
          <div class="relative">
            <img
              class="aspect-square w-full rounded-xl object-cover md:aspect-video"
              :src="imageInfo.url"
              :alt="`Image ${index + 1}`"
              :style="{ objectPosition: imageInfo.focusPoint }"
            />
          </div>
        </SwiperSlide>

        <div class="swiper-button-prev invisible h-full pl-8 md:visible"></div>
        <div class="swiper-button-next invisible h-full pr-8 md:visible"></div>
      </Swiper>
    </div>
  </section>
</template>

<script setup lang="ts">
const props = defineProps({
  imageInfos: {
    type: Array,
    default: () => [],
  },
});
</script>

<style>
.swiper-button-next,
.swiper-button-prev {
  color: #1aba8b;
}

.swiper-pagination-bullet {
  background-color: aliceblue;
}

.swiper-pagination-bullet-active {
  background-color: antiquewhite;
}
</style>
