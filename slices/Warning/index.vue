<script setup lang="ts">
import { type Content } from "@prismicio/client";

// The array passed to `getSliceComponentProps` is purely optional.
// Consider it as a visual hint for you when templating your slice.
defineProps(
  getSliceComponentProps<Content.WarningSlice>([
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
    :style="{ backgroundColor: slice.primary.color }"
    class="p-12"
  >
    <div
      class="flex flex-col items-center justify-center max-w-2xl px-24 py-12 mx-auto text-center bg-white shadow-2xl bg-opacity-30 rounded-3xl"
    >
      <PrismicImage
        :field="slice.primary.image"
        class="w-24 h-24 rounded-full"
      />
      <h2
        class="mb-6 text-4xl font-bold brightness-50"
        :style="{ color: slice.primary.color }"
      >
        {{ slice.primary.title }}
      </h2>
      <PrismicRichText :field="slice.primary.body" class="max-w-2xl mx-auto" />
    </div>
  </section>
</template>
