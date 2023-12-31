<script setup lang="ts">
import * as prismic from "@prismicio/client";
import { useShopStore } from "~/stores/shop";

// The array passed to `getSliceComponentProps` is purely optional.
// Consider it as a visual hint for you when templating your slice.
defineProps(
  getSliceComponentProps<prismic.Content.GoogleReviewsSlice>([
    "slice",
    "index",
    "slices",
    "context",
  ])
);
const ss = useShopStore();
if (ss.place.status !== "OK") {
  await ss.loadPlace();
}
</script>

<template>
  <section
    :data-slice-type="slice.slice_type"
    :data-slice-variation="slice.variation"
  >
    <div class="relative min-h-[50vh] py-16">
      <div class="absolute inset-0 h-full bg-red-500 -z-10">
        <PrismicImage
          :field="slice.primary.background_image"
          class="object-cover object-center w-full h-full"
        />
      </div>
      <div
        class="w-full h-full max-w-4xl px-12 py-12 mx-auto bg-white bg-opacity-70 backdrop-blur-lg"
      >
        <h5 class="text-2xl font-bold text-center">
          {{ slice.primary.title }}
        </h5>
        <p class="max-w-lg mx-auto text-sm text-center text-neutral-700">
          <PrismicRichText :field="slice.primary.description" />
        </p>
        <ClientOnly>
          <div
            class="grid gap-8 py-2 mt-12 overflow-y-auto md:flex md:flex-nowrap no-scrollbar"
          >
            <div
              v-for="(review, r) in ss.reviews"
              :key="r"
              class="flex-grow-0 flex-shrink-0 bg-white card basis-[35%]"
            >
              <div class="flex items-center gap-4">
                <h6
                  class="w-full py-2 text-lg font-bold text-center capitalize"
                >
                  {{ review.author_name.toLowerCase() }}
                </h6>
              </div>
              <div class="flex items-center justify-center gap-2 mb-4">
                <Icon
                  v-for="rate in review.rating"
                  :key="rate"
                  name="bxs:star"
                  size="16"
                  class="text-yellow-500"
                />
              </div>
              <p class="text-xs italic leading-6 text-neutral-500">
                {{ review.text }}
              </p>
            </div>
          </div>
          <div class="mt-6 text-center">
            <h6 class="mb-4 text-3xl font-medium font-raleway">Dicci la tua</h6>
            <p>
              <a
                href="https://www.google.com/search?q=don+cactus&rlz=1C5CHFA_enIT1044IT1044&oq=don+cac&gs_lcrp=EgZjaHJvbWUqCQgAECMYJxiKBTIJCAAQIxgnGIoFMg0IARAuGK8BGMcBGIAEMgYIAhBFGDkyBwgDEAAYgAQyBggEEEUYPDIGCAUQRRg8MgYIBhBFGDwyBggHEEUYQdIBCDE5NjlqMGoxqAIAsAIA&sourceid=chrome&ie=UTF-8#lrd=0x1347f9f63a5f97fb:0x8e40f9058d0764af,1,,,,:~:text=21%2C%20Terlizzi%20BA-,Scrivi%20una%20recensione,-4%2C9"
                class="font-medium underline"
                >Scrivi la tua recensione</a
              >
              e condividila con tutti! ♥️
            </p>
          </div>
        </ClientOnly>
      </div>
    </div>
  </section>
</template>
<style lang="postcss"></style>
