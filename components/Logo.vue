<script setup>
import { useShopStore } from "~/stores/shop";

const shopStore = useShopStore();
</script>

<template>
  <NuxtLink to="/">
    <div class="h-12 aspect-square">
      <img
        :src="shopStore.shop.brand.logo.image.url"
        class="object-contain w-full h-full"
        :height="shopStore.shop.brand.logo.image.height"
      />
    </div>
  </NuxtLink>
</template>
