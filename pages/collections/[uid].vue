<script setup lang="ts">
import { components } from "~/slices";

const prismic = usePrismic();
const { data: page } = useAsyncData("single_category", () =>
  prismic.client.getSingle("single_category")
);

useHead({
  title: page.value?.data.meta_title || page.value?.data.title,
  meta: [
    {
      name: "description",
      content: page.value?.data.meta_description,
    },
  ],
});
</script>

<template>
  <SliceZone
    wrapper="main"
    :slices="page?.data.slices ?? []"
    :components="components"
  />
</template>
