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
  <div class="bg-white rounded-lg shadow-lg">
    <div
      class="w-full overflow-hidden bg-gray-200 rounded-t-lg aspect-square xl:aspect-h-8 xl:aspect-w-7"
    >
      <NuxtLink :to="`/products/${product.handle}`">
        <img
          :src="product.images[0].src"
          class="object-cover object-center w-full h-full group-hover:opacity-75"
        />
      </NuxtLink>
    </div>
    <div class="flex w-full">
      <div class="flex-grow px-6 py-2">
        <h3 class="mt-4 text-xl font-medium text-gray-700">
          {{ product.title }}
        </h3>
        <p class="mt-1 text-lg font-bold text-primary-600">
          {{ formatMoney(product.variants[0].price) }}
        </p>
      </div>

      <div
        class="flex items-center justify-center flex-none px-6 transition-colors border-l rounded-br-lg text-primary-600 border-sand-500 hover:bg-primary-600 hover:text-primary-100"
      >
        <button
          class="w-full h-full aspect-square"
          @click="addToChart(product.variants[0].id)"
        >
          <Icon name="ci:shopping-cart-02" size="32" />
        </button>
      </div>
    </div>
  </div>
</template>

<style scoped>
/* article {
  img {
    view-transition-name: article-thumb;
  }

  .article-title {
    view-transition-name: article-title;
  }

  .author-info {
    view-transition-name: author;
  }

  .price {
    view-transition-name: price;
  }
} */
</style>
