// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  pages: true,
  css: ["@/assets/css/tailwind.css"],
  modules: ["nuxt-swiper", "nuxt-headlessui", [
    "@nuxtjs/google-fonts",
    {
      families: {
        Roboto: [100,300,400,500,700, 900],
        download: true,
        inject: true,
      },
    },
  ], "@nuxt/image"],
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