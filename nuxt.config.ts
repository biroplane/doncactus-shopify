// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  ssr: true,
  nitro: {
    preset: "netlify",
  },
  css: ["~~/assets/css/app.pcss", "~~/assets/css/tailwind.pcss"],
  modules: [
    "@nuxtjs/tailwindcss",
    "nuxt-graphql-client",
    "@pinia/nuxt",
    "@nuxtjs/prismic",
    "nuxt-icon",
    "@nuxt/image",
    "@zadigetvoltaire/nuxt-gtm",
    "@stefanobartoletti/nuxt-social-share",
    "@vueuse/motion/nuxt",
    "@nuxtjs/algolia",
  ],
  experimental: {
    viewTransition: true,
    // ...
  },
  algolia: {
    apiKey: process.env.ALGOLIA_SEARCH_API,
    applicationId: process.env.ALGOLIA_APP_ID,
  },
  image: {
    dir: "assets/img",
    screens: {
      mobile: 600,
      tablet: 800,
      desktop: 1200,
    },
  },

  app: {
    pageTransition: { name: "page", mode: "out-in" },
    head: {
      link: [{ rel: "icon", type: "image/png", href: "/favicon.png" }],
      // script: [
      //   {
      //     src: "https://consent.cookiebot.com/uc.js",
      //     "data-cbid": process.env.COOKIBOT_ID,
      //     "data-blockingmode": "auto",
      //     id: "Cookiebot",
      //   },
      // ],
    },
  },

  pinia: {
    autoImports: [
      // automatically imports `defineStore`
      "defineStore", // import { defineStore } from 'pinia'
      ["defineStore", "definePiniaStore"], // import { defineStore as definePiniaStore } from 'pinia'
    ],
  },

  runtimeConfig: {
    public: {
      GOOGLE_MAPS_API_KEY: process.env.GOOGLE_MAPS_API_KEY,
      GOOGLE_API_KEY: process.env.GOOGLE_API_KEY,
      MAILCHIMP_API_KEY: process.env.MAILCHIMP_API_KEY,
      MAILCHIMP_AUDIENCE_ID: process.env.MAILCHIMP_AUDIENCE_ID,
      MAILCHIMP_API_URL: process.env.MAILCHIMP_API_URL,
      gtm: {
        id: process.env.GOOGLE_TAG_MANAGER as string,
      },

      "graphql-client": {
        clients: {
          default: {
            host: process.env.SHOPIFY_DOMAIN as string,
            token: {
              name: "X-Shopify-Storefront-Access-Token",
              value: process.env.SHOPIFY_ACCESS_TOKEN,
              type: null,
            },
            retainToken: true,
          },
        },
      },
    },
  },

  prismic: {
    endpoint: "doncactus",
    preview: false,
    toolbar: false,
    clientConfig: {
      routes: [
        { type: "homepage", path: "/" },
        { type: "static_page", path: "/:uid" },
        { type: "productcustom", path: "/products/single/:uid" },
        { type: "products", path: "/products" },
        { type: "category", path: "/collections/:uid" },
        { type: "categories", path: "/collections" },
        { type: "landing", path: "/landing/:uid" },
      ],
    },
  },

  router: {
    options: { scrollBehaviorType: "smooth" },
  },
});
