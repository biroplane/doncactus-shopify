<script setup lang="ts">
import { isFilled, type Content } from "@prismicio/client";

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
    class="py-6"
  >
    <div class="container flex flex-col items-center max-w-lg gap-4">
      <h4 class="text-3xl font-bold text-center capitalize">
        {{ slice.primary.title }}
      </h4>
      <p class="max-w-lg text-center">
        <PrismicRichText
          v-if="isFilled.richText(slice.primary.body)"
          :field="slice.primary.body"
        />
      </p>
      <!-- <label for="email" class="flex w-full">
        <input
          id="email"
          v-model="email"
          type="email"
          class="w-full p-2 border border-r-0 rounded rounded-r-none focus:outline-none border-primary-600"
          placeholder="mario.rossi@esempio.com"
        />
        <button
          type="submit"
          class="px-4 border border-l-0 rounded-r border-primary-600 bg-primary-600"
        >
          ✉️
        </button>
      </label>
      <p class="max-w-lg text-xs text-center text-neutral-100">
        Compilando questo modulo acconsenti al trattamento dei dati come da
        <NuxtLink to="/privacy" class="underline text-primary-600"
          >Privacy Policy</NuxtLink
        >
      </p> -->
    </div>
  </section>
</template>
