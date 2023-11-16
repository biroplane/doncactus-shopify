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
      <div class="h-[35vh] relative overflow-hidden">
        <img
          v-if="data.collection?.image"
          :src="(data.collection?.image as any).src"
          alt=""
          class="object-cover object-center w-full h-full"
        />
        <PrismicImage
          v-else-if="prismic.isFilled.image(slice.primary.image)"
          :field="slice.primary.image"
          class="object-cover object-center w-full h-full"
        />
        <div class="absolute max-w-xs bottom-4 left-4">
          <h2 class="text-3xl filter drop-shadow-sm">
            {{ data.collection?.title }}
          </h2>
          <p class="text-xs">{{ data.collection?.description }}</p>
        </div>
      </div>
      <div
        class="container grid gap-4 pb-12 mt-12 md:grid-cols-2 lg:grid-cols-4"
      >
        <ProductItem
          v-for="product in data.collection?.products.nodes"
          :key="product.id"
          :title="product.title"
          :images="product.images.nodes"
          :handle="product.handle"
          :price="product.priceRange.maxVariantPrice.amount as number"
          :variation-id="product.variants.nodes[0].id"
        />
      </div>
    </div>
  </section>
</template>
<style lang="postcss"></style>
