// Code generated by Slice Machine. DO NOT EDIT.

import { defineAsyncComponent } from "vue";
import { defineSliceZoneComponents } from "@prismicio/vue";

export const components = defineSliceZoneComponents({
  alternate_grid: defineAsyncComponent(
    () => import("./AlternateGrid/index.vue")
  ),
  call_to_action: defineAsyncComponent(
    () => import("./CallToAction/index.vue")
  ),
  contact_form: defineAsyncComponent(() => import("./ContactForm/index.vue")),
  customer_logos: defineAsyncComponent(
    () => import("./CustomerLogos/index.vue")
  ),
  google_reviews: defineAsyncComponent(
    () => import("./GoogleReviews/index.vue")
  ),
  hero: defineAsyncComponent(() => import("./Hero/index.vue")),
  newsletter: defineAsyncComponent(() => import("./Newsletter/index.vue")),
  shopify_product: defineAsyncComponent(
    () => import("./ShopifyProduct/index.vue")
  ),
});
