<script setup lang="ts">
import { useCartStore } from "~/stores/cart";

const cartStore = useCartStore();
const { drawer } = storeToRefs(cartStore);
const updateCart = async (qty: number, item: any) => {
  console.log("Update Cart", qty, item);
  await cartStore.updateCart([
    {
      quantity: qty,
      id: item.id,
      merchandiseId: item.merchandise.id,
    },
  ]);
};
</script>

<template>
  <div
    v-if="drawer && cartStore.cart.lines?.nodes.length > 0"
    class="fixed bg-sand-100 right-0 p-4 w-full h-screen lg:h-auto lg:w-auto lg:max-w-sm min-w-[25vw] top-0 lg:top-20 font-barlow"
  >
    <div class="flex items-center justify-between h-20">
      <h3 class="flex-grow py-4 text-xl font-bold">Carrello</h3>
      <button
        class="flex items-center justify-center w-12 h-12 bg-neutral-100"
        @click="drawer = false"
      >
        <Icon name="ci:close-md" size="24"></Icon>
      </button>
    </div>
    <ul class="overflow-y-auto cart_item_list lg:max-h-64">
      <li
        v-for="item in cartStore.cart.lines?.nodes"
        :key="item.id"
        class="flex justify-between gap-2 py-1"
      >
        <NuxtImg
          :src="item.merchandise.product.images.nodes[0].thumbnail"
          class="flex-grow-0 object-cover h-20 aspect-square"
        />
        <div class="flex flex-col w-full gap-2 py-2">
          <h6 class="flex-grow font-medium leading-3">
            {{ item.merchandise.product.title }}
          </h6>
          <div class="flex items-center justify-between gap-2">
            <QuantityBuy
              v-model="item.quantity"
              @update:model-value="updateCart($event, item)"
            />

            <div class="inline font-bold">
              {{ formatMoney(item.estimatedCost.totalAmount.amount) }}
            </div>
            <button
              class="flex items-center justify-center w-12 h-12 bg-white"
              @click="cartStore.removeFromCart(item.id)"
            >
              <Icon name="ci:trash-empty" size="16"></Icon>
            </button>
          </div>
        </div>
        <!--  -->
      </li>
      <pre>{{ item }}</pre>
    </ul>
    <div
      v-if="cartStore.cart.lines?.nodes.length > 0"
      class="flex items-baseline pt-4 border-t"
    >
      <strong class="flex-grow">Totale</strong>
      <p class="flex-none text-xl font-bold">
        {{ formatMoney(cartStore.cart.cost.totalAmount.amount) }}
      </p>
    </div>
    <div v-if="cartStore.cart.lines?.nodes.length" class="h-20 py-3">
      <a :href="cartStore.cart.checkoutUrl" class="btn cta">
        Termina e paga <Icon name="ci:chevron-right" size="16" />
      </a>
    </div>
    <div v-else class="mt-6 text-sm">
      Sei ancora indeciso?<br />Sfoglia i nostri
      <NuxtLink to="/products" class="underline">Prodotti</NuxtLink>
    </div>
  </div>
</template>
<style scoped lang="postcss">
.cart_item_list {
  height: calc(
    100vh - theme("spacing.20") - theme("spacing.20") - theme("spacing.12")
  );
}
</style>
