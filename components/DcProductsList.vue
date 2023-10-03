<script setup>
defineProps({
  products: {
    type: Array,
    default: () => [],
  },
});
</script>

<template>
  <div class="container px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
    <h2 class="sr-only">Prodotti</h2>

    <div
      class="grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8"
    >
      <!-- <DcProductItem
        v-for="product in products"
        :key="product.id"
        :product="product"
      ></DcProductItem> -->

      <!-- <a href="#" class="group">
        <div
          class="aspect-square w-full overflow-hidden rounded-lg bg-gray-200 xl:aspect-h-8 xl:aspect-w-7"
        >
          <img
            src="https://tailwindui.com/img/ecommerce-images/category-page-04-image-card-02.jpg"
            alt="Olive drab green insulated bottle with flared screw lid and flat top."
            class="h-full w-full object-cover object-center group-hover:opacity-75"
          />
        </div>
        <h3 class="mt-4 text-sm text-gray-700">Nomad Tumbler</h3>
        <p class="mt-1 text-lg font-medium text-gray-900">$35</p>
      </a>
      <a href="#" class="group">
        <div
          class="aspect-square w-full overflow-hidden rounded-lg bg-gray-200 xl:aspect-h-8 xl:aspect-w-7"
        >
          <img
            src="https://tailwindui.com/img/ecommerce-images/category-page-04-image-card-03.jpg"
            alt="Person using a pen to cross a task off a productivity paper card."
            class="h-full w-full object-cover object-center group-hover:opacity-75"
          />
        </div>
        <h3 class="mt-4 text-sm text-gray-700">Focus Paper Refill</h3>
        <p class="mt-1 text-lg font-medium text-gray-900">$89</p>
      </a>
      <a href="#" class="group">
        <div
          class="aspect-square w-full overflow-hidden rounded-lg bg-gray-200 xl:aspect-h-8 xl:aspect-w-7"
        >
          <img
            src="https://tailwindui.com/img/ecommerce-images/category-page-04-image-card-04.jpg"
            alt="Hand holding black machined steel mechanical pencil with brass tip and top."
            class="h-full w-full object-cover object-center group-hover:opacity-75"
          />
        </div>
        <h3 class="mt-4 text-sm text-gray-700">Machined Mechanical Pencil</h3>
        <p class="mt-1 text-lg font-medium text-gray-900">$35</p>
      </a> -->

      <!-- More products... -->
    </div>
  </div>

  <!-- <div class="grid grid-cols-5 gap-8">
    <DcProductItem
      v-for="product in products"
      :key="product.id"
      :product="product"
    ></DcProductItem>
  </div> -->
</template>

<style scoped></style>
