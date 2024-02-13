// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  site: {
    url: 'https://codetalks.com',
    name: 'code.talks',
    description: 'Join other developers and CTOs at the leading tech event in the DACH tech scene. Network, learn, and have fun at this tech event. It is more than a developer conference, it is a community!',
    defaultLocale: 'en', 
  },
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
    '@nuxtjs/seo',
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
  schemaOrg: {
    identity: {
      type: 'Organization',
      name: 'code.talks',
      url: 'https://codetalks.de',
      logo: 'https://codetalks.com/cota_logo.png',
    }
  },
  sitemap: {
    exclude: ['imprint', 'privacy', 'tc', '404', '500', '500.html', '404.html', 'imprint.html', 'privacy.html', 'tc.html'],
  }
});
