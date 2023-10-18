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

const { cookiesEnabledIds } = useCookieControl();

// example: react to a cookie being accepted
watch(
  () => cookiesEnabledIds.value,
  (current, previous) => {
    if (
      !previous?.includes("google-analytics") &&
      current?.includes("google-analytics")
    ) {
      // cookie with id `google-analytics` got added
      window.location.reload(); // placeholder for your custom change handler
    }
  },
  { deep: true }
);
</script>
<template>
  <div class="h-screen">
    <NuxtLayout>
      <NuxtPage />
    </NuxtLayout>
    <!-- <CookieControl locale="it" /> -->
  </div>
</template>

<style lang="postcss">
body {
  @apply font-body bg-light-green-50;
}
html,
body {
  @apply h-screen;
}
</style>
