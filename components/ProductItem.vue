<script setup lang="ts">
withDefaults(
  defineProps<{
    images?: any[] | null;
    title: string;
    handle: string;
    price: number;
    variationId: any;
    showBuy?: boolean;
    inventory?: number;
  }>(),
  {
    images: null,
    showBuy: false,
    inventory: 0,
  }
);
defineEmits<{ (e: "onAdd", v: any): void }>();
// const quantity = ref(1);

// const cs = useCartStore();
// const isLoading = ref(false);
// const addToCart = async (v: any) => {
//   console.log("Add to cart", v);
//   cs.drawer = true;
//   try {
//     isLoading.value = true;

//     await cs.addToCart(v);
//     await cs.loadCart();
//     // console.log("FACEBOOK PIXEL ", window.fbq);

//     window.fbq("track", "AddToCart", {
//       content_ids: [v], // 'REQUIRED': array of product IDs
//       content_type: "product", // RECOMMENDED: Either product or product_group based on the content_ids or contents being passed.
//     });
//   } catch (error) {
//     console.log("Errore add to cart", error);
//   } finally {
//     isLoading.value = false;
//   }
// };
</script>
<template>
  <div class="flex flex-col justify-between overflow-hidden rounded-lg">
    <div class="group">
      <NuxtLink :to="`/products/${handle}`" class="relative">
        <div
          v-if="inventory < 1"
          class="absolute px-8 py-2 bg-yellow-300 bottom-3"
        >
          Sold out 🤷
        </div>
        <NuxtImg
          v-if="images?.length"
          :src="images[0].thumbnail"
          class="object-cover w-full h-full transition-transform rounded-t-lg shadow-lg"
        />
      </NuxtLink>
    </div>
    <div
      class="flex flex-row items-start justify-between md:items-end md:min-h-32 lg:pb-2"
    >
      <div class="flex-grow flex-shrink w-4/5 px-1 pt-4 pl-2 font-barlow">
        <h4 class="text-xs font-medium cut-text md:text-sm lg:text-base">
          {{ title }}
        </h4>
        <p class="text-xl text-brown-700">{{ formatMoney(price) }}</p>
        <!-- <AddToCartButton variant-id="1" /> -->
      </div>
      <div
        class="flex items-end justify-end flex-none flex-shrink-0 w-1/5 h-full"
      >
        <AddToCartButton
          v-if="inventory > 0"
          :variant-id="variationId"
          icon
          flat
          class="w-full h-full"
        ></AddToCartButton>
        <!-- <button
          class="w-10 h-10 transition-all duration-100 rounded-md hover:text-brown-700 add_to_cart"
          @click.stop.prevent="addToCart(variationId)"
        >
          <Icon
            :name="
              isLoading ? 'line-md:loading-twotone-loop' : 'ci:shopping-cart-02'
            "
            size="18"
          />
        </button> -->
      </div>
    </div>
  </div>
</template>
