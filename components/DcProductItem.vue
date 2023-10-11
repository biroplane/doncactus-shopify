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
  <article to="#" class="group">
    <div
      class="w-full overflow-hidden bg-gray-200 rounded-lg aspect-square xl:aspect-h-8 xl:aspect-w-7"
    >
      <img
        :src="product.images[0].src"
        alt="Tall slender porcelain bottle with natural clay textured body and cork stopper."
        class="object-cover object-center w-full h-full group-hover:opacity-75"
      />
    </div>
    <div class="flex w-full">
      <div class="flex-grow">
        <h3 class="mt-4 text-sm text-gray-700">{{ product.title }}</h3>
        <p class="mt-1 text-lg font-medium text-gray-900">
          {{ formatMoney(product.variants[0].price) }}
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
  </article>
</template>

<style scoped>
article {
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
}
</style>
