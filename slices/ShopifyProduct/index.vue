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
  >
    <!-- <DcProductsList :products="slice.items" /> -->
    <h4 class="text-3xl font-bold text-center">{{ slice.primary.title }}</h4>

    <div class="flex items-stretch gap-8">
      <PrismicProductItem
        v-for="(product, p) in slice.items"
        :key="p"
        :product="product.product as any"
      ></PrismicProductItem>
    </div>
  </section>
</template>
