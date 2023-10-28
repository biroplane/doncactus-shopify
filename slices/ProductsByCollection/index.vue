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
const prods = await productStore.getCollectionByHandle(
  props.slice.primary.collection_handle as string,
  3
);
</script>

<template>
  <section
    :data-slice-type="slice.slice_type"
    :data-slice-variation="slice.variation"
    class="container py-12"
  >
    Ciao
    <h1 class="text-5xl font-boysand text-light-green-500">
      {{ slice.primary.title }}
    </h1>
    <DcProductsList :products="prods?.products.edges" />
    <!-- <pre>{{ slice.primary }}</pre> -->
  </section>
</template>
