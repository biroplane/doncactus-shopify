<script setup lang="ts">
import { useCartStore } from "~/stores/cart";

const cartStore = useCartStore();

const updateQty = (event: Event) => {
  const qty = (event.target as HTMLInputElement).value;
  console.log("Event", qty);
};
</script>
<template>
  <main>
    <h1>Cart</h1>
    <ul>
      <li v-for="(item, i) in cartStore.cart.lines?.edges" :key="i">
        {{ item.node.merchandise.title }} x
        <input type="number" :value="item.node.quantity" @change="updateQty" />
      </li>
    </ul>
    <div class="mt-12">
      <NuxtLink to="/checkout" class="underline">Go to checkout</NuxtLink>
    </div>
  </main>
</template>
