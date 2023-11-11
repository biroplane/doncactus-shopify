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
      shippingAddress,
    },
  });
  console.log("Checkout ready", checkout, cartStore.cart);
  if (cartStore.cart.checkoutUrl) {
    window.location = cartStore.cart.checkoutUrl;
  }
};

const shippingAddress = reactive({
  address1: "Via Piscina nuova",
  address2: "39",
  city: "New York",
  company: "",
  country: "United States",
  firstName: "Gaetano",
  lastName: "Vallarelli",
  phone: "123",
  province: "New York",
  zip: "70038",
});

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
    class="font-barlow"
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
                    v-if="item.merchandise.product.images.nodes[0].src"
                    :src="item.merchandise.product.images.nodes[0].src"
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
                <div class="">Totale</div>
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
    <!-- <div v-if="cartStore.cart.lines?.edges.length > 0" ref="cartList">
      <h3 class="py-4 text-xl font-bold">Riepilogo</h3>
      <table class="table">
        <thead>
          <tr>
            <th></th>
            <th></th>
            <th></th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="item in cartStore.cart.lines?.edges" :key="item.node.id">
            <td><input type="checkbox" /></td>
            <td>{{ item.node.product }}</td>
            <td>
              <input
                type="number"
                :value="item.node.quantity"
                class="w-12 p-2 text-center rounded-md bg-sand"
              />
            </td>
            <td>
              <h6 class="flex-grow">
                {{ item.node.merchandise.product.title }}
              </h6>
            </td>
            <td>{{ item.node }}</td>
          </tr>
        </tbody>
        <tfoot>
          <tr>
            <td></td>
          </tr>
        </tfoot>
      </table> -->
    <!-- <ul class="overflow-y-auto max-h-64">
        <li
          v-for="item in cartStore.cart.lines?.edges"
          :key="item.node.id"
          class="flex items-center justify-between gap-2 py-1"
        >
          <input type="checkbox" />
          <input
            class="w-12 py-2 text-center rounded-md bg-sand text-neutral-500"
            :value="item.node.quantity"
          />
          x
          <h6 class="flex-grow">{{ item.node.merchandise.title }}</h6>
          <p class="font-bold">
            {{ formatMoney(item.node.estimatedCost.totalAmount.amount) }}
          </p>
          
        </li>
      </ul> -->
    <!-- <div class="flex pt-4 border-t">
        <strong class="flex-grow">Totale</strong>
        <p class="flex-none">
          {{ formatMoney(cartStore.cart.cost.totalAmount.amount) }}
        </p>
      </div>
      <div v-if="cartStore.cart.lines?.edges.length" class="mt-12">
        <NuxtLink to="/checkout" class="underline">
          Vai al Checkout <Icon name="ci:chevron-right" size="16" />
        </NuxtLink>
      </div>
      <div v-else class="mt-6 text-sm">
        Sei ancora indeciso?<br />Sfoglia i nostri
        <NuxtLink to="/products" class="underline">Prodotti</NuxtLink>
      </div>
    </div> -->
  </section>
</template>
