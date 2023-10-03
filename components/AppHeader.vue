<script lang="ts" setup>
import { useCartStore } from "~/stores/cart";
const cartStore = useCartStore();
const opacity = ref(1);

onMounted(() => {
  window.addEventListener("scroll", () => {
    opacity.value = window.scrollY > 200 ? 1 : 0;
  });
});
// const { collections } = await $fetch("/api/collections");
</script>

<template>
  <div
    class="fixed z-50 flex items-center justify-center w-full h-24 transition-all duration-1000 bg-white bg-opacity-20 filter backdrop-blur-md"
    :style="` --tw-bg-opacity:${opacity * 0.4}`"
  >
    <div class="flex items-center justify-between w-full gap-8 px-8">
      <div class=""><Logo /></div>
      <div class="hidden w-full md:flex"><MainMenu /></div>
      <div class="items-center justify-center flex-none hidden md:flex">
        <NuxtLink to="/cart"
          >🛒 ({{ cartStore.cart?.lines?.edges?.length }})</NuxtLink
        >
      </div>
      <div
        class="flex items-center justify-center h-full md:hidden aspect-square"
      >
        Burg
      </div>
    </div>
  </div>
</template>

<style scoped></style>
