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
const hideWarning = ref(false);
</script>

<template>
  <section
    v-if="!hideWarning"
    :data-slice-type="slice.slice_type"
    :data-slice-variation="slice.variation"
    :style="{
      backgroundColor: slice.primary.color as string,
      backgroundImage: 'url(' + slice.primary.image?.url + ')',
    }"
    class="relative p-4 bg-cover md:p-12"
  >
    <button
      class="absolute w-8 h-8 text-white bg-black border-2 rounded-full right-4 top-4 bg-opacity-20"
      @click="hideWarning = true"
    >
      <Icon name="ci:close-md" size="24" />
    </button>
    <div
      class="flex flex-col items-center justify-center max-w-4xl px-4 py-4 mx-auto text-center bg-white rounded-lg shadow-2xl md:px-24 md:py-12 bg-opacity-70 backdrop-blur-md md:rounded-3xl"
    >
      <h2
        class="mb-6 text-xl font-bold md:text-2xl brightness-50"
        :style="{ color: slice.primary.color as string }"
      >
        {{ slice.primary.title }}
      </h2>
      <PrismicRichText
        :field="slice.primary.body"
        class="mx-auto text-sm md:max-w-2xl md:text-md"
      />
    </div>
  </section>
</template>
