<script setup lang="ts">
import { isFilled, type Content } from "@prismicio/client";

// The array passed to `getSliceComponentProps` is purely optional.
// Consider it as a visual hint for you when templating your slice.
defineProps(
  getSliceComponentProps<Content.CollectionStripeSlice>([
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
    :style="{ backgroundColor: slice.primary.bg_color || '#48512E' }"
  >
    <h2 class="text-4xl font-bold capitalize text-swamp-100 text-center py-6">
      {{ slice.primary.title }}
    </h2>
    <div
      v-for="(stripe, s) in slice.items"
      :key="s"
      class="max-w-4xl p-8 mx-auto my-12 md:pb-12 md:p-0"
    >
      <div class="grid w-full grid-cols-9 grid-rows-6 md:h-96">
        <div
          v-if="isFilled.image(stripe.image)"
          class="bg-cover bg-center border bg-light-green-100 rounded-xl lmnt aspect-square md:aspect-auto"
          :class="[s % 2 == 0 ? 'odd' : 'even']"
          :style="{ backgroundImage: `url(${stripe.image.url})` }"
        ></div>
        <div
          class="z-10 p-6 border shadow-2xl bg-light-green-100 rounded-xl lmnt"
          :class="[s % 2 == 0 ? 'even' : 'odd']"
        >
          <PrismicRichText
            :field="stripe.title"
            class="text-2xl font-bold md:text-4xl text-fallow-500 font-boysand filter drop-shadow-md"
          >
          </PrismicRichText>
          <PrismicRichText :field="stripe.body"></PrismicRichText>
          <PrismicLink
            v-if="isFilled.link(stripe.cta_link)"
            :field="stripe.cta_link"
            class="btn cta mt-8"
          >
            {{ stripe.cta_label }}
          </PrismicLink>
        </div>
      </div>
    </div>
  </section>
</template>
<style lang="postcss" scoped>
.lmnt.odd {
  grid-column-start: 1;
  grid-column-end: 6;
  grid-row-start: 1;
  grid-row-end: 5;
}
.lmnt.even {
  grid-column-start: 4;
  grid-column-end: 10;
  grid-row-start: 3;
  grid-row-end: 7;
}
</style>
