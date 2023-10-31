<script setup lang="ts">
import { components } from "~/slices";

const prismic = usePrismic();
const route = useRoute();
const { data: page } = useAsyncData(
  `[productcustom-uid-${route.params.uid}]`,
  () => prismic.client.getByUID("productcustom", route.params.uid as string)
);

useHead({
  title: page.value?.data.meta_title,
  meta: [
    {
      name: "description",
      content: page.value?.data.meta_description,
    },
  ],
});
</script>

<template>
  <div class="">
    <SliceZone
      wrapper="main"
      :slices="page?.data.slices ?? []"
      :components="components"
    />
    xxxxxxxxxxxxxxxxxxxx
  </div>
</template>
