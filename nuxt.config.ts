// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  runtimeConfig: {
    app: {
      env: process.env.NUXT_APP_ENV || "development",
    },
    mailchimp: {
      apiKey: "",
      listId: "",
    },
    cota: {
      currentEventId: 9,
    },
  },
  pages: true,
  css: ["@/assets/css/tailwind.css"],
  modules: [
    "nuxt-swiper",
    "nuxt-headlessui",
    [
      "@nuxtjs/google-fonts",
      {
        families: {
          Roboto: [100, 300, 400, 500, 700, 900],
          download: true,
          inject: true,
        },
      },
    ],
    "@nuxt/image",
    "nuxt-gtag",
  ],
  headlessui: {
    prefix: "Headless",
  },
  gtag: {
    id: "G-GY9G4VJC9G",
    initialConsent: false,
  },
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
});
