<script setup lang="ts">
import { useCartStore } from "~/stores/cart";

import { components } from "~/slices";
const cartStore = useCartStore();

const updateQty = (event: Event) => {
  const qty = (event.target as HTMLInputElement).value;
  console.log("Event", qty);
};

const prismic = usePrismic();
const { data: page } = useAsyncData("[cart]", () =>
  prismic.client.getSingle("cart")
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
    <SliceZone
      wrapper="main"
      :slices="page?.data.slices ?? []"
      :components="components"
    />
    <div class="container">
      <ul>
        <li v-for="(item, i) in cartStore.cart.lines?.edges" :key="i">
          {{ item.node.merchandise.title }} x
          <input
            type="number"
            :value="item.node.quantity"
            @change="updateQty"
          />
        </li>
      </ul>
      <div class="mt-12">
        <NuxtLink to="/checkout" class="underline">Go to checkout</NuxtLink>
      </div>
    </div>
  </div>
</template>
