<script setup lang="ts">
import * as prismic from "@prismicio/client";
import { useProductStore } from "~/stores/products";
// The array passed to `getSliceComponentProps` is purely optional.
// Consider it as a visual hint for you when templating your slice.
defineProps(
  getSliceComponentProps<prismic.Content.CollectionsGridSlice>([
    "slice",
    "index",
    "slices",
    "context",
  ])
);

const prouctStore = useProductStore();
await prouctStore.loadCollections(8);

const gridCollection = computed(() => prouctStore.collections.slice(0, 3));
const listCollection = computed(() => prouctStore.collections.slice(3));
</script>

<template>
  <section
    :data-slice-type="slice.slice_type"
    :data-slice-variation="slice.variation"
  >
    <!-- {{ listCollection }} -->
    <div
      class="container grid gap-2 mx-auto my-12 md:grid-cols-2 md:grid-rows-2 aspect-video"
    >
      <h2
        class="pr-12 text-3xl font-bold text-primary-700 md:text-5xl lg:text-7xl font-boysand place-self-center"
      >
        {{ slice.primary.title || "Le collezioni 🌵" }}
      </h2>
      <div
        v-for="grid in gridCollection"
        :key="grid.id"
        class="w-full fancy-hover card"
      >
        <NuxtLink
          v-if="grid.image"
          :to="`/collections/${grid.handle}`"
          class="relative"
        >
          <NuxtImg
            v-if="grid.image?.src"
            :src="grid.image?.src"
            class="object-cover w-full h-full"
          />
          <div class="absolute text-lg md:text-2xl bottom-4 left-4 max-w-[75%]">
            <p class="inline-block p-2 highlight bg-sand-50 font-barlow">
              {{ grid.title }}
            </p>
          </div>
        </NuxtLink>
      </div>
    </div>
    <div
      class="container grid grid-flow-row-dense grid-cols-2 gap-4 md:grid-cols-3"
    >
      <div v-for="card in listCollection" :key="card.id" class="card">
        <NuxtLink :to="`/collections/${card.handle}`">
          <div class="flex flex-col gap-8">
            <div class="h-32 overflow-hidden md:h-48">
              <NuxtImg
                v-if="card.image?.src"
                :src="card.image.src"
                class="object-cover w-full h-full"
                alt=""
              />
            </div>
            <div class="">
              <h4 class="font-medium md:text-2xl font-barlow">
                {{ card.title }}
              </h4>
              <p
                class="text-xs md:text-sm"
                v-html="card.descriptionHtml || card.description"
              ></p>
            </div>
          </div>
        </NuxtLink>
      </div>
    </div>
  </section>
</template>
