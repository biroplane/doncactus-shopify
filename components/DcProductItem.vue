<script lang="ts" setup>
import { useCartStore } from "~/stores/cart";

const cartStore = useCartStore();
defineProps({
  product: {
    type: Object,
    default: () => ({}),
  },
});
const addToChart = async (id: string) => {
  console.log("Add to chart", id);
  await cartStore.addToCart(id);
};
</script>

<template>
  <div>
    <h4 class="font-bold text-2xl min-h-[6rem]">{{ product.node.title }}</h4>
    <div class="w-full aspect-square">
      <img
        :src="product.node.images.edges[0].node.src"
        class="w-full h-full object-cover"
      />
    </div>

    <ul>
      <li v-for="(variant, v) in product.node.variants?.edges" :key="v">
        <button
          class="px-8 py-2 border-2 rounded-sm bg-neutral-100 shadow-sm mt-6"
          @click="addToChart(variant.node.id)"
        >
          {{ variant.node.title }} {{ variant.node.priceV2.amount }}
        </button>
      </li>
    </ul>
  </div>
</template>

<style scoped></style>
