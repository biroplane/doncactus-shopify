<script setup lang="ts">
import * as prismicTypes from "@prismicio/types";
defineProps<{
  invert: boolean;
  image: prismicTypes.ImageField;
}>();
</script>
<template>
  <div class="flex flex-col md:flex-row gap-8 md:max-h-[32rem]">
    <div
      class="w-full md:w-1/2 max-h-[32rem] overflow-hidden"
      :class="invert ? 'order-first' : 'order-last'"
    >
      <PrismicImage :field="image" />
      <slot name="first"></slot>
    </div>
    <div class="w-full md:w-1/2">
      <slot name="last"></slot>
    </div>
  </div>
</template>
