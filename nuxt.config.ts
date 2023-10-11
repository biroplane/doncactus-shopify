// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  ssr: true,
  nitro: {
    preset: "netlify",
  },
  css: ["~~/assets/css/app.pcss"],
  modules: [
    "@nuxtjs/tailwindcss",
    "nuxt-graphql-client",
    "@pinia/nuxt",
    "@nuxtjs/prismic",
  ],
  experimental: {
    viewTransition: true,
    // ...
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
    clientConfig: {
      routes: [
        {
          type: "homepage",
          path: "/",
        },
        { type: "product", path: "/products/:uid" },
        { type: "products", path: "/products" },
        { type: "category", path: "/category/:uid" },
        { type: "categories", path: "/category" },
      ],
    },
  },
});
