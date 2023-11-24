<script setup lang="ts">
import { isFilled, type Content } from "@prismicio/client";
import { Vue3Lottie } from "vue3-lottie";

// The array passed to `getSliceComponentProps` is purely optional.
// Consider it as a visual hint for you when templating your slice.
defineProps(
  getSliceComponentProps<Content.CustomizationSlice>([
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
    :class="[
      slice.variation === 'dark'
        ? 'bg-gradient-to-t from-neutral-900 to-neutral-800 text-fallow-50'
        : 'bg-fallow-50 text-fallow-900',
    ]"
    class="w-full pt-6 pb-12"
  >
    <ClientOny>
      <Vue3Lottie
        animation-link="https://lottie.host/886fbcb9-8581-4fdf-869b-d823e05c978d/FBoHhcLhrh.json"
        :height="100"
        :width="100"
      ></Vue3Lottie>
    </ClientOny>
    <div class="flex justify-between w-full">
      <div
        class="container flex flex-col items-center flex-grow max-w-lg gap-4"
      >
        <h4 class="text-3xl font-bold text-center capitalize">
          {{ slice.primary.title }}
        </h4>
        <p class="max-w-lg text-center">
          <PrismicRichText
            v-if="isFilled.richText(slice.primary.body)"
            :field="slice.primary.body"
          />
        </p>
      </div>
    </div>

    <!-- -->
  </section>
</template>
