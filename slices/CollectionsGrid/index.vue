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
    <h2>{{ slice.primary.title }}</h2>

    <div
      class="container grid grid-cols-2 grid-rows-2 gap-2 mx-auto my-12 aspect-video"
    >
      <div
        v-for="grid in gridCollection"
        :key="grid.node.id"
        class="w-full first:row-span-2 fancy-hover card"
      >
        <NuxtLink :to="`/collections/${grid.node.handle}`" class="relative">
          <img
            v-if="grid.node.image?.src"
            :src="grid.node.image?.src"
            class="object-cover w-full h-full"
          />
          <div class="absolute text-lg md:text-2xl bottom-4 left-4 max-w-[75%]">
            <p class="inline-block p-2 bg-sand-50 font-barlow">
              {{ grid.node.title }}
            </p>
          </div>
        </NuxtLink>
      </div>

      <!-- <div class="row-span-2 border border-red-500"></div>
      <div class="border border-lime-500"></div>
      <div class="border border-indigo-500"></div> -->
    </div>
    <div class="container grid grid-flow-row-dense grid-cols-3 gap-4">
      <div v-for="card in listCollection" :key="card.id" class="card">
        <NuxtLink :to="`/collections/${card.node.handle}`">
          <div class="flex flex-col gap-8">
            <div class="h-48 overflow-hidden">
              <img
                :src="card.node.image.src"
                class="object-cover w-full h-full"
                alt=""
              />
            </div>
            <div class="">
              <h4 class="text-2xl font-medium font-barlow">
                {{ card.node.title }}
              </h4>
              <p class="text-sm" v-html="card.node.descriptionHtml"></p>
            </div>
          </div>
        </NuxtLink>
      </div>
    </div>
  </section>
</template>
