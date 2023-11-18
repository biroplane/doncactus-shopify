<script setup lang="ts">
import { type Content } from "@prismicio/client";
// // The array passed to `getSliceComponentProps` is purely optional.
// // Consider it as a visual hint for you when templating your slice.
defineProps(
  getSliceComponentProps<Content.SearchSlice>([
    "slice",
    "index",
    "slices",
    "context",
  ])
);

// const { result, search } = useSearch("shopify_products");
// const hits = ref<any[]>([]);

// const fetchSearchResult = async (e: HTMLInput) => {
//   await search({ query: e.target.value });
//   hits.value = result.value.hits;
// };
</script>

<template>
  <section
    :data-slice-type="slice.slice_type"
    :data-slice-variation="slice.variation"
    class="bg-indigo-500"
  >
    <!-- <label for="search">
      <input type="search" name="search" @input="fetchSearchResult" />
    </label>
    <div v-if="hits.length" class="">
      <ul>
        <li v-for="(hit, h) in hits" :key="h" @click="hits = []">
          <NuxtLink :to="`/products/${hit.Handle}`">
            {{ hit.Title }}
          </NuxtLink>
        </li>
      </ul>
    </div> -->
  </section>
</template>
