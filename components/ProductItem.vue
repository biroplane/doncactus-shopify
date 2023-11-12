<script setup lang="ts">
import { useCartStore } from "~/stores/cart";

withDefaults(
  defineProps<{
    images?: any[] | null;
    title: string;
    handle: string;
    price: number;
    variationId: any;
    showBuy?: boolean;
  }>(),
  {
    images: null,
    showBuy: false,
  }
);
defineEmits<{ (e: "onAdd", v: any): void }>();
// const quantity = ref(1);

const cs = useCartStore();
const isLoading = ref(false);
const addToCart = async (v: any) => {
  console.log("Add to cart", v);
  try {
    isLoading.value = true;

    await cs.addToCart(v);

    await cs.loadCart();
  } catch (error) {
    console.log("Errore add to cart", error);
  } finally {
    isLoading.value = false;
  }
};
</script>
<template>
  <div
    class="justify-between overflow-hidden border rounded-lg shadow-lg flex-flex-col"
  >
    <div class="group">
      <NuxtLink :to="`/products/${handle}`" class="">
        <NuxtImg
          v-if="images?.length"
          :src="images[0].src"
          class="object-cover w-full h-full transition-transform duration-500 scale-100 rounded-t-lg shadow-lg group-hover:scale-110 group-hover:-translate-y-4"
        />
      </NuxtLink>
    </div>
    <div class="flex items-center justify-between gap-4 min-h-32">
      <div class="p-4 font-barlow">
        <h4 class="font-medium">{{ title }}</h4>
        <p class="text-xl text-brown-700">{{ formatMoney(price) }}</p>
        <!-- <AddToCartButton variant-id="1" /> -->
      </div>
      <div class="">
        <button
          class="p-4 transition-all duration-100 rounded-md hover:text-brown-700"
          @click.stop.prevent="addToCart(variationId)"
        >
          <Icon
            :name="
              isLoading ? 'line-md:loading-twotone-loop' : 'ci:shopping-cart-02'
            "
            size="18"
          />
        </button>
      </div>
    </div>
  </div>
  <!-- <div
    class="flex flex-col items-start justify-between w-full overflow-hidden transition-all rounded-md shadow-xl hover:scale-105 group"
  >
    <div class="">
      <NuxtLink
        :to="`/products/${handle}`"
        class="w-full overflow-hidden border border-transparent rounded-lg aspect-square"
      >
        <NuxtImg
          v-if="images?.length"
          :src="images[0].src"
          class="object-cover w-full h-full transition-transform duration-500 scale-100 rounded-t-lg group-hover:scale-110 group-hover:-translate-y-4"
        />
      </NuxtLink>
    </div>
    <div class="grid items-center self-end justify-between grid-cols-4">
      <h4 class="px-4 py-4 text-xl font-medium capitalize col-span-full">
        {{ title }}
      </h4>
      <div class="col-span-3 px-4 text-xl font-bold font-barlow">
        {{ formatMoney(price) }}
      </div>
      <div class="bg-primary hover:bg-opacity-50">
        <button class="w-full h-full p-2" @click="addToCart(variationId)">
          <Icon
            :name="
              isLoading ? 'line-md:loading-twotone-loop' : 'ci:shopping-cart-02'
            "
            size="24"
          />
        </button>
      </div>
    </div>
  </div> -->
</template>
