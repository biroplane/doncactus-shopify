<script setup lang="ts">
import { useProductStore } from "@/stores/products";

const productStore = useProductStore();

await productStore.load(4);
await productStore.loadCollections(3);
const addToChart = (prod: any) => {
  console.log("Add to cart", prod);
};
</script>
<template>
  <div class="">
    <AppHero />
    <CollectionStripe
      v-for="(collection, c) in productStore.collections"
      :key="c"
      :image="collection.node.image?.src"
      :odd="c % 2 === 0"
    >
      <h2
        class="text-2xl font-bold md:text-4xl text-fallow-500 font-boysand filter drop-shadow-md"
      >
        {{ collection.node.title }}
      </h2>
      <p class="py-6 truncate max-h-64">
        {{ collection.node.description }}
      </p>
      <NuxtLink :to="`/c/${collection.node.handle}`" class="cta"
        >Scopri</NuxtLink
      >
    </CollectionStripe>
    <PageWrap class="text-slate-700 bg-brown-900" container>
      <div class="text-center text-slate-100">
        <h2 class="pt-12 text-3xl font-bold">Top Selling</h2>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum ipsum
          similique voluptas,
        </p>
      </div>
      <div class="grid grid-cols-2 gap-12 mt-12 md:grid-cols-4">
        <card
          v-for="(product, p) in productStore.products"
          :key="p"
          class="bg-sand-500"
        >
          <template #image>
            <NuxtImg
              :src="product.node.images.edges[0].node.src"
              class="object-cover object-center w-full aspect-square"
            />
          </template>
          <div class="flex w-full">
            <div class="flex-grow">
              <h3 class="mt-4 text-sm">
                {{ product.node.title }}
              </h3>
              <p class="mt-1 text-lg font-medium">
                {{
                  formatMoney(
                    product.node.variants?.edges[0].node.priceV2.amount
                  )
                }}
              </p>
              <p class="text-sm text-slate-400">
                {{ product.node.description }}
              </p>
            </div>
            <div class="flex items-center justify-center flex-none bg-sand-500">
              <button
                class="w-12 h-full aspect-square"
                @click="addToChart(product.node.variants?.edges[0].node.id)"
              >
                Buy
              </button>
            </div>
          </div>
        </card>
      </div>
    </PageWrap>
    <!-- 

    <DcProductsList
      class="px-12"
      :products="productStore.products"
      >{{
    }}</DcProductsList> -->
  </div>
</template>
