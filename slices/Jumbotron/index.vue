<script setup lang="ts">
import { isFilled, type Content } from "@prismicio/client";
// The array passed to `getSliceComponentProps` is purely optional.
// Consider it as a visual hint for you when templating your slice.
defineProps(
  getSliceComponentProps<Content.JumbotronSlice>([
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
  >
    <div
      class="relative w-full app_hero"
      :style="{ backgroundImage: 'url(' + slice.primary.image.url + ')' }"
    >
      <div
        class="absolute bottom-0 w-full h-64 px-8 py-12 md:p-16 lg:shadow-xl box bg-brown-500 md:w-96 md:bottom-24 lg:left-24 lg:rounded-md"
      >
        <div
          class="absolute w-32 duration-1000 -right-8 md:-right-16 top-10 lg:-left-16 float"
        >
          <NuxtImg src="/cactus_4.png" class="object-contain w-full h-full" />
        </div>
        <h1 class="mb-4 text-5xl font-bold text-white font-boysand lg:text-4xl">
          {{ slice.primary.title }}
        </h1>
        <p class="mb-6">{{ slice.primary.eyebrow }}</p>
        <PrismicLink
          v-if="isFilled.link(slice.primary.cta_link)"
          :field="slice.primary.cta_link"
          class="px-8 py-2 mt-8 text-white rounded bg-brown-800"
          >{{ slice.primary.cta_label }}</PrismicLink
        >
      </div>
    </div>
  </section>
</template>
<style scoped lang="postcss">
.app_hero {
  /* background-image: url(/piante_grasse_2.jpg); */
  background-size: cover;
  height: calc(100vh - theme("space.24"));
  overflow: hidden;
}
</style>
