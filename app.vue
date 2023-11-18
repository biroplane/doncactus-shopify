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
  await shopStore.loadPlace();
} catch (error) {
  console.log("Error while loading", error);
}

const nuxtApp = useNuxtApp();

nuxtApp.hook("page:finish", () => {
  setTimeout(() => {
    window.scrollTo(0, 0);
  }, 100);
});
</script>
<template>
  <div class="h-screen">
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
  @apply h-screen w-screen overflow-x-hidden;
}
</style>
