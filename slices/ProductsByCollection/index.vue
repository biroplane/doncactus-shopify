<script setup lang="ts">
import * as prismic from "@prismicio/client";
import { useProductStore } from "~/stores/products";

// The array passed to `getSliceComponentProps` is purely optional.
// Consider it as a visual hint for you when templating your slice.
const props = defineProps(
  getSliceComponentProps<prismic.Content.ProductsByCollectionSlice>([
    "slice",
    "index",
    "slices",
    "context",
  ])
);
const productStore = useProductStore();
let prods: any;
onMounted(async () => {
  prods = await productStore.getCollectionByHandle(
    props.slice.primary.collection_handle as string,
    20
  );
});
console.log("Prods", prods);
</script>

<template>
  <section
    :data-slice-type="slice.slice_type"
    :data-slice-variation="slice.variation"
    class="container flex flex-col gap-8 py-12"
  >
    <h1 class="text-5xl font-boysand text-primary-500">
      {{ slice.primary.title }}
    </h1>
    <p><PrismicRichText :field="slice.primary.body"></PrismicRichText></p>
    <div class="grid grid-cols-4 gap-8">
      <ProductItem
        v-for="pr in prods?.collection?.products.nodes"
        :key="pr.handle"
        v-motion-roll-visible-right
        :images="pr.images.nodes"
        :title="pr.title"
        :price="pr.priceRange.maxVariantPrice.amount as number"
        :handle="pr.handle"
        :variation-id="pr.variants.nodes[0].id"
      />
    </div>
  </section>
</template>
