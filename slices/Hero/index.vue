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
    class="py-12"
  >
    <PrismicLayoutHero
      :invert="slice.variation !== 'imageRight'"
      :image="slice.primary.image"
    >
      <template #first>
        <!-- <div class="w-full">
          <PrismicImage
            v-if="isFilled.image(slice.primary.image)"
            :field="slice.primary.image"
            class="object-contain"
          />
        </div> -->
      </template>
      <template #last>
        <div class="flex flex-col justify-center h-full">
          <p
            v-if="isFilled.keyText(slice.primary.eyebrowHeadline)"
            class="text-sm text-neutral-500"
          >
            {{ slice.primary.eyebrowHeadline }}
          </p>
          <div
            v-if="isFilled.richText(slice.primary.title)"
            class="mb-4 text-4xl font-bold text-primary-700"
          >
            <PrismicRichText :field="slice.primary.title" />
          </div>
          <div v-if="isFilled.richText(slice.primary.description)" class="">
            <PrismicRichText :field="slice.primary.description" />
          </div>
          <div class="flex text-center">
            <PrismicLink
              v-if="isFilled.link(slice.primary.callToActionLink)"
              class="items-start min-w-[8rem] px-4 py-6 text-sm text-white transition-colors duration-100 rounded bg-primary-600 hover:bg-primary-700 cursor-pointer"
              :field="slice.primary.callToActionLink"
            >
              {{ slice.primary.callToActionLabel || "Scopri" }}
            </PrismicLink>
            <pre>{{ slice.primary.callToActionLink }}</pre>
          </div>
        </div>
      </template>
    </PrismicLayoutHero>
  </section>
</template>

<style></style>
