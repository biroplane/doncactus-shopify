// Code generated by Slice Machine. DO NOT EDIT.

import { defineSliceZoneComponents } from "@prismicio/vue";
import { defineAsyncComponent } from "vue";

export const components = defineSliceZoneComponents({
  alternate_grid: defineAsyncComponent(
    () => import("./AlternateGrid/index.vue")
  ),
  body_text: defineAsyncComponent(() => import("./BodyText/index.vue")),
  call_to_action: defineAsyncComponent(
    () => import("./CallToAction/index.vue")
  ),
  cart: defineAsyncComponent(() => import("./Cart/index.vue")),
  collection_stripe: defineAsyncComponent(
    () => import("./CollectionStripe/index.vue")
  ),
  collections_grid: defineAsyncComponent(
    () => import("./CollectionsGrid/index.vue")
  ),
  contact_form: defineAsyncComponent(() => import("./ContactForm/index.vue")),
  customer_logos: defineAsyncComponent(
    () => import("./CustomerLogos/index.vue")
  ),
  customization: defineAsyncComponent(
    () => import("./Customization/index.vue")
  ),
  google_map: defineAsyncComponent(() => import("./GoogleMap/index.vue")),
  google_reviews: defineAsyncComponent(
    () => import("./GoogleReviews/index.vue")
  ),
  hero: defineAsyncComponent(() => import("./Hero/index.vue")),
  jumbotron: defineAsyncComponent(() => import("./Jumbotron/index.vue")),
  newsletter: defineAsyncComponent(() => import("./Newsletter/index.vue")),

  products_by_collection: defineAsyncComponent(
    () => import("./ProductsByCollection/index.vue")
  ),
  shopify_product: defineAsyncComponent(
    () => import("./ShopifyProduct/index.vue")
  ),
  single_collection: defineAsyncComponent(
    () => import("./SingleCollection/index.vue")
  ),
  warning: defineAsyncComponent(() => import("./Warning/index.vue")),
});
