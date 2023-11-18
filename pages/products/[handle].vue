<script setup lang="ts">
import { useProductStore } from "~/stores/products";

const ps = useProductStore();
const route = useRoute();
await ps.one(route.params.handle.toString());
console.log("Prodotto caricato", ps.product);
const recommended = ref(await ps.loadRecommended(ps.product.id));
const shortRecommended = computed(() => recommended.value?.splice(0, 5));
// import { components } from "~/slices";

// const prismic = usePrismic();
// const { data: page } = useAsyncData("[product]", () =>
//   prismic.client.getSingle("product")
// );

const activeVariant = ref(0);
const activeMetafields = computed(() =>
  ps.product.metafields.filter((m: any) => m)
);
useHead({
  title: ps.product.title,
  meta: [
    {
      name: "description",
      content: ps.product.description,
    },
  ],
});
const activeImage = ref(0);
// const qty = ref(1);
</script>

<template>
  <div class="container py-12">
    <div class="grid w-full gap-8 md:grid-cols-2">
      <div
        class="flex items-center justify-between w-full md:hidden font-barlow"
      >
        <div class="">
          <h1 class="text-3xl font-bold">{{ ps.product.title }}</h1>
          <h4 class="text-3xl">
            {{ formatMoney(ps.product.priceRange.maxVariantPrice.amount) }}
          </h4>
        </div>
        <button class="text-white shadow-lg btn cta bg-brown">Aggiungi</button>
      </div>
      <div
        v-if="ps.product.images?.nodes.length > 0"
        class="flex flex-col gap-6 lg:flex-row"
      >
        <ul
          class="flex flex-row flex-wrap justify-center order-last gap-6 lg:flex-col md:flex-nowrap lg:order-first"
        >
          <li
            v-for="(image, i) in ps.product.images?.nodes"
            :key="image.src"
            class="flex-grow w-24 overflow-hidden transition-colors rounded-md shadow-sm cursor-pointer md:h-12 hover:bg-primary-100 aspect-square md:aspect-auto"
            :class="{ hidden: i === activeImage }"
            @click="activeImage = i"
          >
            <NuxtImg
              :src="image.src"
              loading="lazy"
              class="object-cover w-full h-full"
            ></NuxtImg>
          </li>
        </ul>
        <div class="w-full h-full">
          <NuxtImg
            v-if="ps.product.images?.nodes[activeImage].src"
            :src="ps.product.images.nodes[activeImage].src"
            alt=""
            class="object-cover object-center w-full h-full"
          />
        </div>
      </div>
      <div class="font-barlow">
        <div class="hidden md:block">
          <h1 class="text-3xl font-bold text-brown-700">
            {{ ps.product.title }}
          </h1>
          <h4 class="mt-2 text-3xl">
            {{ formatMoney(ps.product.priceRange.maxVariantPrice.amount) }}
          </h4>
        </div>
        <div class="">
          <div
            class="py-12"
            v-html="ps.product.descriptionHtml || ps.product.description"
          ></div>
        </div>
        <div class="hidden md:block">
          <AddToCartButton
            :disabled="!ps.product.variants.nodes[activeVariant]"
            :variant-id="ps.product.variants.nodes[activeVariant].id"
          />
        </div>
        <div class="my-6">
          <h4>Ti piace questo prodotto? <strong>Condividilo</strong></h4>
          <div class="flex flex-row gap-2">
            <SocialShare
              v-for="network in [
                'facebook',
                'twitter',
                'whatsapp',
                'telegram',
                'email',
              ]"
              :key="network"
              :network="network"
              :styled="false"
              :label="false"
              class="p-2 rounded-sm text-primary-500 hover:bg-primary-500 hover:text-white transition-colors"
            />
          </div>
        </div>
        <div class="flex flex-col gap-4 mt-12">
          <ProductDetail
            v-for="(meta, m) in activeMetafields"
            :key="m"
            :k="meta.key"
            :value="meta.value"
          ></ProductDetail>
        </div>
      </div>
    </div>
    <div class="py-12 mt-12 border-t">
      <h5 class="mb-6 text-2xl">
        Ecco qualcos'altro che potrebbe interessarti
      </h5>
      <ul class="grid gap-4 md:grid-cols-3">
        <li
          v-for="recommend in shortRecommended"
          :key="recommend.id"
          class="shadow-xl"
        >
          <NuxtLink
            :to="`/products/${recommend.handle}`"
            class="hover:underline"
          >
            <div class="flex h-24">
              <div class="h-full overflow-hidden bg-primary-500 rounded-l-md">
                <NuxtImg
                  :src="(recommend.images.nodes[0] as any).thumbnail"
                  alt=""
                  class="object-cover w-full h-full"
                />
              </div>
              <div
                class="flex flex-col justify-center w-full px-4 py-1 bg-white text-primary-700 rounded-r-md"
              >
                <h5 class="font-bold">{{ recommend.title }}</h5>
                <p class="">
                  {{
                    formatMoney(
                      (recommend.priceRange.maxVariantPrice as any).amount
                    )
                  }}
                </p>
              </div>
            </div>
          </NuxtLink>
        </li>
      </ul>
    </div>
  </div>
</template>
<style lang="postcss" scoped>
img.active {
  view-transition-name: product-image;
}

details {
  @apply py-4;
  summary {
    @apply font-bold;

    &::-webkit-details-marker {
      display: none;
    }
  }
  div {
    @apply pl-6;
  }
}
details > summary {
  list-style-type: "🞢";
}

details[open] > summary {
  margin-bottom: 0.5rem;
}
</style>
