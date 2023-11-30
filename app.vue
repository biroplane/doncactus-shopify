<script setup lang="ts">
import { useCartStore } from "./stores/cart";
import { useShopStore } from "./stores/shop";

const cartStore = useCartStore();
const shopStore = useShopStore();
try {
  if (typeof window !== "undefined") {
    //   if (!cartStore.cart.id) {
    const cart = await cartStore.initializeCart();
    console.log("Cart initialized", cart);
    //   }
  }
  await shopStore.load();
  await shopStore.loadPlace();
} catch (error) {
  console.log("Error while loading", error);
}
</script>
<template>
  <div class="h-screenz">
    <NuxtLayout>
      <NuxtPage />
    </NuxtLayout>
  </div>
</template>

<style lang="postcss">
body {
  @apply font-body bg-light-green-50;
}
html,
body {
  @apply w-screen overflow-x-hidden;
}
</style>
