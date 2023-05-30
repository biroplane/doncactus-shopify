<script setup lang="ts">
import { useProductStore } from "@/stores/products";
const productStore = useProductStore();
await productStore.load(15);
</script>
<template>
  <DcProductsList
    class="px-12"
    :products="productStore.products"
    >{{
  }}</DcProductsList>
</template>
