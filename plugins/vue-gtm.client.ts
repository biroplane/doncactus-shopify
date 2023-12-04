import { createGtm } from "@gtm-support/vue-gtm";
export default defineNuxtPlugin((nuxtApp) => {
  const _id: string = nuxtApp.$config.public.GOOGLE_TAG_MANAGER;
  nuxtApp.vueApp.use(
    createGtm({
      id: _id,
      defer: false,
      enabled: true,
      debug: process.env.NODE_ENV === "development",
      vueRouter: useRouter(),
      trackOnNextTick: true,
    })
  );
});
