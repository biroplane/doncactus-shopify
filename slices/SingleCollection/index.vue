<script setup lang="ts">
import * as prismic from "@prismicio/client";
import { useProductStore } from "~/stores/products";

// The array passed to `getSliceComponentProps` is purely optional.
// Consider it as a visual hint for you when templating your slice.
const props = defineProps(
  getSliceComponentProps<prismic.Content.SingleCollectionSlice>([
    "slice",
    "index",
    "slices",
    "context",
  ])
);
const route = useRoute();
const ps = useProductStore();
const data = await ps.getCollectionByHandle(
  (props.slice.primary.collection_id
    ? props.slice.primary.collection_id
    : route.params.uid) as string,
  20
);
console.log("Handle", data);
</script>

<template>
  <section
    :data-slice-type="slice.slice_type"
    :data-slice-variation="slice.variation"
  >
    <div v-if="data" class="w-full">
      <div class="h-[35vh] relative">
        <img
          :src="(data.collection?.image as any).src"
          alt=""
          class="w-full h-full object-cover object-center"
        />
        <div class="absolute bottom-4 left-4 max-w-xs">
          <h2 class="text-3xl filter drop-shadow-sm">
            {{ data.collection?.title }}
          </h2>
          <p class="text-xs">{{ data.collection?.description }}</p>
        </div>
      </div>
      <div class="grid md:grid-cols-2 lg:grid-cols-4 gap-4 mt-12 container">
        <ProductItem
          v-for="product in data.collection?.products.edges"
          :key="product.node.id"
          :title="product.node.title"
          :images="product.node.images.edges"
          :handle="product.node.handle"
          :price="parseFloat(product.node.priceRange.maxVariantPrice.amount)"
          :variation="product.node.variants.edges"
        />
        <!-- <img
          v-for="product in data.collection?.products.edges"
          :key="product.node.id"
          :src="product.node.images.edges[0].node.src"
          alt=""
          class="break-inside-avoid"
        /> -->
      </div>
    </div>
  </section>
</template>
<style lang="postcss"></style>
