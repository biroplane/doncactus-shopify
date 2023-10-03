<script setup lang="ts">
defineProps({
  container: {
    type: Boolean,
    default: false,
  },
});
</script>
<template>
  <div class="w-full py-12">
    <div :class="{ container }">
      <slot></slot>
    </div>
  </div>
</template>
