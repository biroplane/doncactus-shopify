<script setup>
defineProps({
  products: {
    type: Array,
    default: () => [],
  },
});
</script>

<template>
  <div class="grid grid-cols-5 gap-8">
    <DcProductItem
      v-for="product in products"
      :key="product.id"
      :product="product"
    ></DcProductItem>
  </div>
</template>

<style scoped></style>
