<script setup lang="ts">
import { useCartStore } from "~/stores/cart";

defineProps<{
  variantId: string;
  flat?: boolean;
  icon?: boolean;
}>();
const cs = useCartStore();
const isLoading = ref(false);
const addToCart = async (id: string) => {
  console.log("Adding to cart", id);

  try {
    isLoading.value = true;
    await cs.addToCart(id);
    console.log("Add to cart button", cs.cart);
    cs.drawer = true;
    await cs.loadCart();
  } catch (error) {
    console.error("Errore add to cart", error);
  } finally {
    isLoading.value = false;
  }
};
</script>

<template>
  <button
    class="relative flex items-center justify-center py-2 text-sm text-white shadow-lg bg-primary-300 add_to_cart"
    :class="{ 'px-6': !icon }"
    v-bind="$attrs"
    @click="addToCart(variantId)"
  >
    <Icon
      v-if="icon"
      :name="isLoading ? 'line-md:loading-twotone-loop' : 'ci:shopping-cart-02'"
      size="18"
    />
    <span v-else :class="{ invisible: isLoading }" class="">Aggiungi </span>
    <Icon
      v-show="isLoading"
      name="line-md:loading-twotone-loop"
      size="24"
      class="absolute mx-auto"
    />
  </button>
</template>
