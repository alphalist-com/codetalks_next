// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  pages: true,
  css: ["~/assets/css/tailwind.css"],
  modules: [
    "nuxt-swiper",
    "nuxt-headlessui",
    [
      "@nuxtjs/google-fonts",
      {
        families: {
          Roboto: true,
          "Roboto Mono": true,
          download: true,
          inject: true,
        },
      },
    ],
  ],
  // Optionally change the default prefix.
  headlessui: {
    prefix: "Headless",
  },
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
});
