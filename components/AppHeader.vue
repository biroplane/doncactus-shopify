<script lang="ts" setup>
import { useCartStore } from "~/stores/cart";
import { useShopStore } from "~/stores/shop";
const shopStore = useShopStore();
const cartStore = useCartStore();
</script>

<template>
  <div
    class="bg-light-green-300 h-24 fixed w-full flex justify-center items-center"
  >
    <header class="container flex justify-between">
      <div class="h-24 py-4">
        <img
          :src="shopStore.shop.brand.logo.image.url"
          class="w-full h-full object-contain"
          :height="shopStore.shop.brand.logo.image.height"
        />
      </div>
      <NuxtLink to="/cart"
        >Cart ({{ cartStore.cart?.lines?.edges?.length }})</NuxtLink
      >
    </header>
  </div>
</template>

<style scoped></style>
