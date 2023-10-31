<script setup>
import { useNavStore } from "~/stores/navigation";

defineProps({
  vertical: {
    type: Boolean,
    default: false,
  },
});
const navStore = useNavStore();
</script>
<template>
  <ul class="flex gap-4" :class="{ 'flex-col': vertical }">
    <li v-for="nav in navStore.menu" :key="nav.route">
      <NuxtLink
        :to="nav.route"
        active-class="font-bold"
        class="hover:underline"
        >{{ nav.label }}</NuxtLink
      >
    </li>
  </ul>
</template>
