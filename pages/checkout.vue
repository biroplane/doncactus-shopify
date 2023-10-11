<script setup lang="ts">
import { components } from "~/slices";

import { useCartStore } from "~/stores/cart";

const cartStore = useCartStore();

const getCheckout = async () => {
  const mapped = cartStore.cart.lines.edges.map((line: any) => ({
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

const prismic = usePrismic();
const { data: page } = useAsyncData("[checkout]", () =>
  prismic.client.getSingle("checkout")
);

useHead({
  title: page.value?.data.meta_title,
  meta: [
    {
      name: "description",
      content: page.value?.data.meta_description,
    },
  ],
});
</script>

<template>
  <div class="">
    <div class="">{{ page?.data.title }}</div>
    Ciao
    <button @click="getCheckout">Click</button>
    <SliceZone
      wrapper="main"
      :slices="page?.data.slices ?? []"
      :components="components"
    />
  </div>
</template>
