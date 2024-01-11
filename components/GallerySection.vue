<template>
  <section class="isolate overflow-hidden ">
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
        <SwiperSlide v-for="(picture, index) in pictures" :key="index">
          <div class="relative">
            <img
              class="rounded-xl w-full aspect-video object-cover"
              :src="picture.url"
              :alt="`Image ${index + 1}`"
              :style="{ objectPosition: picture.focusPoint }"
            />
            <div 
              v-if="picture.description"
              class="absolute bottom-0 left-0 right-0 rounded-b-xl bg-gradient-to-t from-black to-transparent p-4"
            >
              <p class="text-white text-sm">{{ picture.description }}</p>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  </section>
</template>

<script lang="ts">
export default {
  data() {
    return {
      pictures: [
        { url: "/cota-1.png", focusPoint: "50% 30%", description: "Image 1 Description" },
        { url: "/cota-2.png", focusPoint: "80% 20%", description: "Image 2 Description" },
        { url: "/cota-3.png", focusPoint: "20% 80%" }, 
        { url: "/cota-4.png", focusPoint: "50% 30%" },
        { url: "/cota-5.png", focusPoint: "50% 45%" },
      ],
    };
  },
};
</script>

<style>
.swiper-pagination-bullet {
  background-color: aliceblue;
}

.swiper-pagination-bullet-active {
  background-color: antiquewhite;
}
</style>
