<script setup lang="ts">
import * as prismic from "@prismicio/client";

// The array passed to `getSliceComponentProps` is purely optional.
// Consider it as a visual hint for you when templating your slice.
defineProps(
  getSliceComponentProps<prismic.Content.ShopifyProductSlice>([
    "slice",
    "index",
    "slices",
    "context",
  ])
);
</script>

<template>
  <section
    :data-slice-type="slice.slice_type"
    :data-slice-variation="slice.variation"
    class="container py-24"
  >
    <!-- <DcProductsList :products="slice.items" /> -->
    <h4 class="mb-12 text-3xl font-bold text-center text-primary-500">
      {{ slice.primary.title }}
    </h4>

    <div class="flex flex-col items-stretch gap-12 md:flex-row">
      <PrismicProductItem
        v-for="(product, p) in slice.items"
        :key="p"
        :product="product.product as any"
      ></PrismicProductItem>
    </div>
  </section>
</template>
