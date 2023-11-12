<script setup lang="ts">
import { type Content } from "@prismicio/client";

// The array passed to `getSliceComponentProps` is purely optional.
// Consider it as a visual hint for you when templating your slice.
defineProps(
  getSliceComponentProps<Content.BodyTextSlice>([
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
    class="max-w-3xl mx-auto"
  >
    <h1 class="my-6 text-4xl font-bold">{{ slice.primary.title }}</h1>
    <PrismicRichText :field="slice.primary.body"></PrismicRichText>
  </section>
</template>
