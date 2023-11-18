<script setup lang="ts">
import { isFilled, type Content } from "@prismicio/client";

defineProps(
  getSliceComponentProps<Content.HeroSlice>([
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
    <div class="overflow-hidden md:grid md:grid-cols-2">
      <div
        v-if="isFilled.image(slice.primary.image)"
        class="w-full h-[50vh] lg:h-[70vh]"
      >
        <PrismicImage
          :field="slice.primary.image"
          class="object-cover object-center w-full h-full"
        />
      </div>
      <div class="flex items-center col-start-2 p-12">
        <div class="flex flex-col justify-center">
          <p
            v-if="isFilled.keyText(slice.primary.eyebrowHeadline)"
            v-motion-slide-visible-top
            class="text-sm lg:text-base text-neutral-500"
          >
            {{ slice.primary.eyebrowHeadline }}
          </p>
          <div
            v-if="isFilled.richText(slice.primary.title)"
            class="mb-4 text-3xl font-bold md:text-4xl lg:text-7xl text-primary-400"
          >
            <PrismicRichText
              v-motion-slide-visible-top
              :field="slice.primary.title"
              :delay="200"
            />
          </div>
          <div
            v-if="isFilled.richText(slice.primary.description)"
            class="text-base text-neutral-500 lg:text-2xl"
          >
            <PrismicRichText
              v-motion-slide-visible-top
              :field="slice.primary.description"
              :delay="400"
            />
          </div>
          <div class="flex mt-6 text-center md:mt-12">
            <PrismicLink
              v-if="isFilled.link(slice.primary.callToActionLink)"
              v-motion-slide-visible-top
              :delay="600"
              class="btn cta"
              :field="slice.primary.callToActionLink"
            >
              {{ slice.primary.callToActionLabel || "Scopri" }}
            </PrismicLink>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style></style>
