<script setup lang="ts">
import { useCartStore } from "~/stores/cart";

const props = withDefaults(
  defineProps<{
    images?: any[] | null;
    title: string;
    handle: string;
    price: number;
    variation?: any;
    showBuy?: boolean;
  }>(),
  {
    images: null,
    variation: null,
    showBuy: false,
  }
);
const emits = defineEmits<{ (e: "onAdd", v: any): void }>();
// const quantity = ref(1);

const cs = useCartStore();
const isLoading = ref(false);
const addToCart = async (v: any) => {
  console.log("Add to cart", v);
  try {
    isLoading.value = true;
    await new Promise((resolve) =>
      setTimeout(async () => {
        await cs.addToCart(v);
        emits("onAdd", props.variation);
        resolve("Ciao");
        console.log("Fatto");
      }, 2000)
    );
  } catch (error) {
    console.log("Error", error);
  } finally {
    isLoading.value = false;
  }
};
</script>
<template>
  <div
    class="w-full shadow-xl hover:scale-105 transition-all group overflow-hidden"
  >
    <div class="">
      <NuxtLink
        :to="`/products/${handle}`"
        class="w-full aspect-9/16 rounded-xl overflow-hidden border border-transparent"
      >
        <img
          v-if="images?.length"
          :src="images[0].node.src"
          class="w-full h-full object-cover scale-100 group-hover:scale-110 group-hover:-translate-y-4 transition-transform duration-500"
        />
      </NuxtLink>
    </div>
    <div class="grid grid-cols-4 items-center justify-between">
      <h4 class="capitalize font-medium col-span-full py-4 px-4 text-xl">
        {{ title }}
      </h4>
      <div class="col-span-3 px-4 font-barlow font-bold text-xl">
        {{ formatMoney(price) }}
      </div>
      <div class="bg-primary hover:bg-opacity-50">
        <button
          class="w-full h-full p-2"
          @click="addToCart(variation[0].node.id)"
        >
          <Icon
            :name="
              isLoading ? 'line-md:loading-twotone-loop' : 'ci:shopping-cart-02'
            "
            size="24"
          />
        </button>
      </div>
    </div>
  </div>
</template>
