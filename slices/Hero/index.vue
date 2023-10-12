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
    class="py-24 bg-light-green-200"
  >
    <div class="grid grid-cols-2 gap-x-8">
      <div
        :class="[
          slice.variation != 'imageRight' ? 'order-first' : '-order-first',
        ]"
        class="overflow-hidden"
      >
        <div
          v-if="isFilled.image(slice.primary.image)"
          class="w-full h-full overflow-hidden bg-red-500 max-h-[50vh]"
        >
          <PrismicImage
            :field="slice.primary.image"
            class="object-cover object-center w-full h-full"
          />
        </div>
      </div>
      <div
        :class="[
          slice.variation == 'imageRight' ? 'order-first' : '-order-first',
        ]"
        class="flex items-center"
      >
        <div class="flex flex-col">
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
              class="px-12 py-3 capitalize rounded-full bg-light-green text-sand md:mt-12"
              :field="slice.primary.callToActionLink"
            >
              {{ slice.primary.callToActionLabel || "Scopri" }}
            </PrismicLink>
          </div>
        </div>
      </div>
    </div>
    <!-- <PrismicLayoutHero
      :invert="slice.variation !== 'imageRight'"
      :image="slice.primary.image"
    >
      <template #first> </template>
      <template #last>
        <div class="flex flex-col justify-center h-full px-6">
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
              class="px-12 py-3 capitalize rounded-full bg-light-green text-sand md:mt-12"
              :field="slice.primary.callToActionLink"
            >
              {{ slice.primary.callToActionLabel || "Scopri" }}
            </PrismicLink>
          </div>
        </div>
      </template>
    </PrismicLayoutHero> -->
  </section>
</template>

<style></style>
