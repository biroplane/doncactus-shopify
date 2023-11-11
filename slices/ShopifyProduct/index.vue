<script setup lang="ts">
import * as prismic from "@prismicio/client";
import { useProductStore } from "~/stores/products";

// The array passed to `getSliceComponentProps` is purely optional.
// Consider it as a visual hint for you when templating your slice.
const props = defineProps(
  getSliceComponentProps<prismic.Content.ShopifyProductSlice>([
    "slice",
    "index",
    "slices",
    "context",
  ])
);

const productStore = useProductStore();
await productStore.load(props.slice.primary.items_number || 12);
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

    <div
      class="grid items-stretch gap-4 md:gap-12 md:grid-cols-3 lg:grid-cols-4"
    >
      <ProductItem
        v-for="(product, p) in productStore.products"
        :key="p"
        :handle="product.handle"
        :title="product.title"
        :images="product.images.nodes as any"
        :price="(product.variants.nodes[0] as any).priceV2.amount as number"
        :variation-id="product.variants.nodes[0].id"
      ></ProductItem>
      <NuxtLink to="/products" class="text-center btn cta col-span-full"
        >Visualizza gli altri prodotti</NuxtLink
      >
    </div>
  </section>
</template>
