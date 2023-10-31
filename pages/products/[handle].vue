<script setup lang="ts">
import { useProductStore } from "~/stores/products";

const ps = useProductStore();
const route = useRoute();
await ps.one(route.params.handle.toString());
const recommended = ref(await ps.loadRecommended(ps.product.id));
const shortRecommended = computed(() => recommended.value?.splice(0, 5));
// import { components } from "~/slices";

// const prismic = usePrismic();
// const { data: page } = useAsyncData("[product]", () =>
//   prismic.client.getSingle("product")
// );

// useHead({
//   title: page.value?.data.meta_title,
//   meta: [
//     {
//       name: "description",
//       content: page.value?.data.meta_description,
//     },
//   ],
// });
</script>

<template>
  <div class="">
    <div class="w-full">
      <div class="w-full">
        <img :src="ps.product.images.edges[0].node.src" alt="" />
      </div>
      <div class="flex items-baseline justify-between min-h-24">
        <div class="px-6">
          <h2 class="text-2xl">{{ ps.product.title }}</h2>
          <button>Aggiungi al carrello</button>
        </div>
        <div
          class="h-full py-2 px-4 aspect-[4/3] bg-primary-500 flex items-center justify-center font-barlow font-bold text-2xl"
        >
          {{ formatMoney(ps.product.priceRange.maxVariantPrice.amount) }}
        </div>
      </div>
      <div class="p-6">{{ ps.product.description }}</div>
      <div class="p-6">
        <!-- <h4>Variants</h4> -->
        <ul>
          <li
            v-for="variant in ps.product.variants.edges"
            :key="variant"
            class="chips"
          >
            {{ variant.node.title }}
          </li>
        </ul>
      </div>
      <div class="p-6 mx-6 border-t border-primary-500">
        <ul class="grid gap-4 py-12 mt-6 border-t md:grid-cols-3">
          <li
            v-for="recommend in shortRecommended"
            :key="recommend.id"
            class="shadow-xl"
          >
            <NuxtLink
              :to="`/products/${recommend.handle}`"
              class="hover:underline"
            >
              <div class="flex h-24">
                <div class="h-full overflow-hidden bg-primary-500 rounded-l-md">
                  <img
                    :src="(recommend.images.edges[0].node as any).src"
                    alt=""
                    class="object-cover w-full h-full"
                  />
                </div>

                <div
                  class="w-full px-4 py-1 bg-white text-primary-700 rounded-r-md flex flex-col justify-center"
                >
                  <h5 class="font-bold">{{ recommend.title }}</h5>
                  <p class="">
                    {{
                      formatMoney(
                        (recommend.priceRange.maxVariantPrice as any).amount
                      )
                    }}
                  </p>
                </div>
              </div>
            </NuxtLink>
          </li>
        </ul>
      </div>
    </div>

    <!-- <SliceZone
      wrapper="main"
      :slices="page?.data.slices ?? []"
      :components="components"
    /> -->
  </div>
</template>
<style>
img {
  view-transition-name: product-image;
}
</style>
