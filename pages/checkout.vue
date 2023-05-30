<script setup>
import { useCartStore } from "~/stores/cart";

const cartStore = useCartStore();

const getCheckout = async () => {
  const mapped = cartStore.cart.lines.edges.map((line) => ({
    variantId: line.node.merchandise.id,
    quantity: line.node.quantity,
  }));
  console.log("Mapping lines", mapped);

  const checkout = await $fetch("/api/checkout", {
    method: "POST",
    body: {
      pippo: "Ciao",
      lineItems: mapped,
    },
  });
  console.log("Checkout ready", checkout, cartStore.cart);
};
</script>

<template>
  <div class="">
    <div class="">Checkout</div>
    <button @click="getCheckout">Click</button>
  </div>
</template>
