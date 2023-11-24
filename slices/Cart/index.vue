<script setup lang="ts">
import { isFilled, type Content } from "@prismicio/client";
import { useCartStore } from "~/stores/cart";

// The array passed to `getSliceComponentProps` is purely optional.
// Consider it as a visual hint for you when templating your slice.
defineProps(
  getSliceComponentProps<Content.CartSlice>([
    "slice",
    "index",
    "slices",
    "context",
  ])
);
const cartStore = useCartStore();
const getCheckout = () => {
  if (cartStore.cart.checkoutUrl) {
    window.location = cartStore.cart.checkoutUrl;
  }
};

const removeFromCart = async (item: any) => {
  console.log("Remove from cart", item);
  await cartStore.removeFromCart(item.id);
};
const updateCart = async (qty: Event, item: any) => {
  console.log("Update Cart", (qty.target as HTMLSelectElement)?.value, item);
  await cartStore.updateCart([
    {
      quantity: parseInt((qty.target as HTMLSelectElement)?.value),
      id: item.id,
      merchandiseId: item.merchandise.id,
    },
  ]);
};
</script>

<template>
  <section
    :data-slice-type="slice.slice_type"
    :data-slice-variation="slice.variation"
    class="py-24 font-barlow"
  >
    <div class="grid gap-8 md:grid-cols-2">
      <div class="w-full h-full top-24">
        <PrismicImage
          v-if="isFilled.image(slice.primary.image)"
          :field="slice.primary.image"
          class="object-cover w-full h-full"
        />
      </div>
      <div class="px-16 mt-12">
        <ClientOnly>
          <div v-if="cartStore.cart.lines?.nodes?.length > 0" ref="cartList">
            <div class="text-brown">{{ slice.primary?.eyebrow || "Ciao" }}</div>
            <h3 class="py-4 text-4xl font-bold capitalize text-primary-700">
              {{ slice.primary.title }}
            </h3>
            <PrismicRichText
              v-if="isFilled.richText(slice.primary.body)"
              :field="slice.primary.body"
              class="text-neutral-500"
            ></PrismicRichText>
            <ul class="flex flex-col gap-4 py-6 mt-12 border-t">
              <li
                v-for="(item, i) in cartStore.cart.lines?.nodes"
                :key="i"
                class="flex gap-4"
              >
                <div class="flex-none">
                  <NuxtImg
                    v-if="item.merchandise.product.images.nodes[0].thumbnail"
                    :src="item.merchandise.product.images.nodes[0].thumbnail"
                    class="object-cover w-24 rounded-md aspect-square"
                    placeholder
                  />
                </div>
                <div class="flex-grow">
                  <h4 class="text-lg font-medium">
                    {{ item.merchandise.product.title }}
                  </h4>
                  <div class="flex">
                    <button @click="removeFromCart(item)">
                      <Icon name="ci:trash-empty" size="16"></Icon>
                    </button>

                    <div class="flex items-baseline w-32 text-lg">
                      <select
                        :value="item.quantity"
                        class="px-2 py-1 text-lg bg-transparent border-red-700 boder-2"
                        @change="updateCart($event, item)"
                      >
                        <option v-for="q in 10" :key="q" :value="q">
                          {{ q }}
                        </option>
                      </select>
                    </div>
                  </div>
                </div>
                <div class="text-xl font-bold">
                  {{ formatMoney(item.estimatedCost.totalAmount.amount) }}
                </div>
              </li>
              <li class="flex justify-between py-6 border-t">
                <div class="">
                  <strong>Totale</strong> <small>(escluso spedizione)</small>
                </div>
                <div class="font-bold">
                  {{ formatMoney(cartStore.cart.cost.totalAmount.amount) }}
                </div>
              </li>
            </ul>
          </div>
        </ClientOnly>
      </div>
      <div class="mx-4 md:col-start-2 lg:px-16">
        <!-- <ShippingAddress v-model="shippingAddress" /> -->
        <button
          class="px-8 py-2 text-lg text-white bg-primary-700 min-w-[20rem] rounded-md"
          @click="getCheckout"
        >
          Termina e Paga
        </button>
      </div>
    </div>
  </section>
</template>
