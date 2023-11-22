<script setup lang="ts">
import { useCartStore } from "~/stores/cart";

defineProps<{
  variantId: string;
  flat?: boolean;
}>();
const cs = useCartStore();
const isLoading = ref(false);
const addToCart = async (id: string) => {
  console.log("Adding to cart", id);
  try {
    isLoading.value = true;
    await cs.addToCart(id);
    await cs.loadCart();
  } catch (error) {
    console.log("Errore add to cart", error);
  } finally {
    isLoading.value = false;
  }
};
</script>

<template>
  <button
    class="relative flex items-center justify-center text-white shadow-lg btn cta"
    v-bind="$attrs"
    @click="addToCart(variantId)"
  >
    <span :class="{ invisible: isLoading }" class=""
      >Aggiungi <span class="hidden md:inline">al carrello</span></span
    >
    <Icon
      v-show="isLoading"
      name="line-md:loading-twotone-loop"
      size="24"
      class="absolute mx-auto"
    />
  </button>
</template>
