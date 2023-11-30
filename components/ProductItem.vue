<script setup lang="ts">
import { useCartStore } from "~/stores/cart";

const props = withDefaults(
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
  cs.drawer = true;
  try {
    isLoading.value = true;

    await cs.addToCart(v);
    await cs.loadCart();
    // console.log("FACEBOOK PIXEL ", window.fbq);

    window.fbq("track", "AddToCart", {
      content_ids: [v], // 'REQUIRED': array of product IDs
      content_type: "product", // RECOMMENDED: Either product or product_group based on the content_ids or contents being passed.
    });
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
          :src="images[0].thumbnail"
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
          class="p-4 transition-all duration-100 rounded-md hover:text-brown-700 add_to_cart"
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
</template>
