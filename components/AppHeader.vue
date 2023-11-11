<script lang="ts" setup>
import { onClickOutside } from "@vueuse/core";
import { useCartStore } from "~/stores/cart";
const cartStore = useCartStore();

const opacity = ref(1);
const showCart = ref(false);
onMounted(() => {
  window.addEventListener("scroll", () => {
    opacity.value = window.scrollY > 200 ? 1 : 0;
  });
});
const cartList = ref();
onClickOutside(cartList, () => {
  showCart.value = false;
});

// const { collections } = await $fetch("/api/collections");
</script>

<template>
  <div
    class="sticky top-0 z-50 flex items-center justify-center w-full h-24 px-4 transition-all duration-1000 bg-white bg-opacity-70 filter backdrop-blur-md"
    :style="` --tw-bg-opacity:${opacity * 0.4}`"
  >
    <div class="flex items-center justify-between w-full gap-8">
      <div
        ref="cartList"
        class="flex items-center justify-center h-full md:hidden aspect-square"
      >
        <AppDrawer />
      </div>
      <Logo />
      <div class="hidden w-full h-full md:flex"><MainMenu /></div>
      <div class="relative">
        <button
          class="relative p-4 bg-white rounded-full shadow-sm"
          @click="showCart = !showCart"
        >
          <Icon name="ci:shopping-cart-02" size="24" class="text-primary" />
          <div v-if="cartStore.cart.lines?.nodes.length > 0" class="badge">
            {{ cartStore.cart.lines?.nodes.length }}
          </div>
        </button>
        <Transition name="slide">
          <div
            v-if="showCart && cartStore.cart.lines?.nodes.length > 0"
            class="absolute bg-sand-100 right-0 p-4 max-w-sm min-w-[25vw] rounded-md shadow-xl"
          >
            <h3 class="py-4 text-xl font-bold">Riepilogo</h3>
            <ul class="overflow-y-auto max-h-64">
              <li
                v-for="item in cartStore.cart.lines?.nodes"
                :key="item.id"
                class="flex justify-between gap-2 py-1"
              >
                <p class="whitespace-nowrap">{{ item.quantity }} x</p>
                <h6 class="flex-grow">{{ item.merchandise.product.title }}</h6>
                <p class="font-bold">
                  {{ formatMoney(item.estimatedCost.totalAmount.amount) }}
                </p>
                <!-- <pre>{{ item }}</pre> -->
              </li>
            </ul>
            <div
              v-if="cartStore.cart.lines?.nodes.length > 0"
              class="flex pt-4 border-t"
            >
              <strong class="flex-grow">Totale</strong>
              <p class="flex-none">
                {{ formatMoney(cartStore.cart.cost.totalAmount.amount) }}
              </p>
            </div>
            <div v-if="cartStore.cart.lines?.nodes.length" class="mt-12">
              <NuxtLink to="/checkout" class="underline">
                Vai al Checkout <Icon name="ci:chevron-right" size="16" />
              </NuxtLink>
            </div>
            <div v-else class="mt-6 text-sm">
              Sei ancora indeciso?<br />Sfoglia i nostri
              <NuxtLink to="/products" class="underline">Prodotti</NuxtLink>
            </div>
          </div>
        </Transition>
      </div>
      <!-- <div class=""><Logo /></div>
      <div class="hidden w-full md:flex"><MainMenu /></div>
      <div class="items-center justify-center flex-none hidden md:flex">
        <NuxtLink to="/cart"
          >🛒 ({{ cartStore.cart?.lines?.edges?.length }})</NuxtLink
        >
      </div>
      <div
        class="flex items-center justify-center h-full md:hidden aspect-square"
      >
        <button class="flex items-center justify-center w-8 aspect-square">
          <Icon name="ci:hamburger-md" size="32" class="text-primary-600" />
        </button> 
        <AppDrawer />
      </div> -->
    </div>
  </div>
</template>

<style scoped></style>
