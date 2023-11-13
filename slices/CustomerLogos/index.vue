<script setup lang="ts">
import { isFilled, type Content } from "@prismicio/client";
defineProps(
  getSliceComponentProps<Content.CustomerLogosSlice>([
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
    class="bg-[#f4f0ec]"
  >
    <div
      class="container flex flex-col items-center w-full gap-12 py-16 md:px-6 lg:px-48"
    >
      <div
        v-if="isFilled.richText(slice.primary.eyebrowHeadline)"
        class="text-3xl font-boysand text-primary"
      >
        <PrismicRichText :field="slice.primary.eyebrowHeadline" />
      </div>
      <ul
        v-if="slice.items.length > 0"
        class="grid items-center gap-12 p-4 overflow-x-auto md:flex"
        :class="[!slice.primary.small ? 'grid-cols-1' : 'grid-cols-3']"
      >
        <li
          v-for="(item, i) in slice.items"
          :key="i"
          :class="[
            slice.variation == 'noBorders'
              ? ''
              : 'card md:h-96 aspect-square flex items-center justify-center outline outline-sand-600 bg-white flex-shrink-0 flex-grow-0 md:flex-basis-[35%]',
            {
              'h-12 transition-transform hover:scale-110': slice.primary.small,
            },
          ]"
        >
          <PrismicLink :field="item.link">
            <PrismicImage
              :field="item.image"
              class="w-full h-full"
              :class="[slice.primary.small ? 'object-contain' : 'object-cover']"
            />
          </PrismicLink>
        </li>
      </ul>
      <PrismicLink
        v-if="isFilled.link(slice.primary.callToActionLink)"
        :field="slice.primary.callToActionLink"
      >
        {{ slice.primary.callToActionLabel }}
      </PrismicLink>
    </div>
  </section>
</template>
