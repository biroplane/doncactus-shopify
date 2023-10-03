<script setup lang="ts">
import { useCartStore } from "./stores/cart";
import { useShopStore } from "./stores/shop";

const cartStore = useCartStore();
const shopStore = useShopStore();
try {
  if (typeof window !== "undefined") {
    const cart = await cartStore.initializeCart();
    console.log("Cart initialized", cart);
  }
  await shopStore.load();
} catch (error) {
  console.log("Error while loading", error);
}
</script>
<template>
  <NuxtLayout>
    <NuxtPage />
  </NuxtLayout>
</template>

<style lang="postcss">
body {
  @apply font-body bg-light-green-50;
}
</style>
