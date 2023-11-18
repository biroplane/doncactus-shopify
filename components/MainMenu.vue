<script setup>
const prismic = usePrismic();
defineProps({
  vertical: {
    type: Boolean,
    default: false,
  },
});
defineEmits(["close"]);

const { data: navigation } = useAsyncData("navigation", () =>
  prismic.client.getSingle("navigation")
);
</script>
<template>
  <ul class="flex h-full gap-4" :class="{ 'flex-col mt-12': vertical }">
    <!-- <li v-for="nav in navStore.menu" :key="nav.route">
      <NuxtLink
        :to="nav.route"
        active-class="font-bold"
        class="hover:underline"
        >{{ nav.label }}</NuxtLink
      >
    </li> -->
    <li v-for="(nav, n) in navigation.data.menu_items" :key="n" class="">
      <PrismicLink
        :field="nav.link"
        class="h-full px-2 py-4 transition-all hover:border-primary-700 hover:border-b text-primary-700"
        active-class="border-b-2 border-primary text-neutral-900"
        @click="$emit('close', false)"
      >
        {{ nav.label }}
      </PrismicLink>
    </li>
  </ul>
</template>
