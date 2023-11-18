<script setup lang="ts">
import { onClickOutside } from "@vueuse/core";
const { result, search } = useAlgoliaSearch("shopify_products");

const fetchSearchResult = async (e: Event) => {
  const query = (e.target as HTMLInputElement).value;
  if (query) isOpen.value = true;
  await search({ query });
};
const isOpen = ref(true);
const searchBar = ref();
onClickOutside(searchBar, () => (isOpen.value = false));
</script>
<template>
  <div ref="searchBar" class="relative transition-all">
    <div
      class="flex gap-2 py-1 rounded-md px-4 transition-all duration-1000 items-center justify-center border border-primary focus-within:shadow-lg"
    >
      <button class="p-1" @click="isOpen = !isOpen">
        <Icon
          name="ci:search-magnifying-glass"
          class="text-primary"
          size="24"
        />
      </button>
      <input
        type="search"
        name="search"
        class="bg-transparent py-1 text-primary w-full focus:outline-none"
        autocomplete="off"
        @input="fetchSearchResult"
      />
    </div>
    <Transition name="slide" mode="out-in">
      <div
        v-if="result?.hits.length && isOpen"
        class="absolute right-0 bg-white max-w-full lg:min-w-[60ch] max-h-96 overflow-y-auto py-4 rounded-md shadow-xl"
      >
        <ul class="flex flex-col">
          <li
            v-for="(hit, h) in result.hits"
            :key="h"
            class="px-4 py-2 hover:bg-primary-100"
            @click="result.hits = []"
          >
            <NuxtLink
              :to="`/products/${hit.handle}`"
              class="flex gap-4 items-center"
            >
              <NuxtImg
                :src="hit.product_image"
                loading="lazy"
                class="w-16 h-16"
              />
              <div class="flex-grow">
                <h4 class="font-bold">{{ hit.title }}</h4>
                <p>{{ formatMoney(hit.variants_min_price) }}</p>
              </div>
              <div class="">
                <Icon name="ci:chevron-right" size="24" />
              </div>
            </NuxtLink>
          </li>
        </ul>
      </div>
    </Transition>
  </div>
</template>
