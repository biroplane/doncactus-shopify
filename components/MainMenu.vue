<script setup>
defineProps({
  vertical: {
    type: Boolean,
    default: false,
  },
});
</script>
<template>
  <ul class="flex gap-4" :class="{ 'flex-col': vertical }">
    <li>Collezioni</li>
    <li>Prodotti</li>
    <li>Packaging</li>
    <li>Scrivici</li>
  </ul>
</template>
