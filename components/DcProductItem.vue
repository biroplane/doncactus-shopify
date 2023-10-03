<script lang="ts" setup>
import { useCartStore } from "~/stores/cart";
import { formatMoney } from "~/utils/format";
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
  <div to="#" class="group">
    <div
      class="aspect-square w-full overflow-hidden rounded-lg bg-gray-200 xl:aspect-h-8 xl:aspect-w-7"
    >
      <img
        :src="product.node.images.edges[0].node.src"
        alt="Tall slender porcelain bottle with natural clay textured body and cork stopper."
        class="h-full w-full object-cover object-center group-hover:opacity-75"
      />
    </div>
    <div class="flex w-full">
      <div class="flex-grow">
        <h3 class="mt-4 text-sm text-gray-700">{{ product.node.title }}</h3>
        <p class="mt-1 text-lg font-medium text-gray-900">
          {{ formatMoney(product.node.variants?.edges[0].node.priceV2.amount) }}
        </p>
      </div>
      <div class="flex-none bg-sand-500 flex items-center justify-center">
        <button
          class="aspect-square w-12 h-full"
          @click="addToChart(product.node.variants?.edges[0].node.id)"
        >
          Buy
        </button>
      </div>
    </div>
  </div>
</template>

<style scoped></style>
