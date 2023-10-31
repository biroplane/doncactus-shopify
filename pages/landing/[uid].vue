<script setup lang="ts">
import { isFilled } from "@prismicio/client";
import { components } from "~/slices";
const prismic = usePrismic();
const route = useRoute();
const { data: page } = useAsyncData(`[landing-uid-${route.params.uid}]`, () =>
  prismic.client.getByUID("landing", route.params.uid as string)
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

console.log("Landing loaded", page.value);
</script>

<template>
  <div class="">
    <div class="relative">
      <div
        class="max-h-[50vh] -z-10 overflow-hidden"
        :style="`background-color:${page?.data.background_color}`"
      >
        <PrismicImage
          v-if="isFilled.image(page?.data.image)"
          :field="page!.data.image"
          class="object-cover object-center w-full h-full"
        />
      </div>
      <div class="absolute max-w-md bottom-8 left-8">
        <h1
          class="p-3 px-2 text-5xl leading-snug shadow-lg highlight"
          :style="`background-color:${page?.data.highlight_color}; color:${page?.data.background_color}`"
        >
          {{ page?.data.title }}
        </h1>
      </div>
    </div>
    <SliceZone
      wrapper="main"
      :slices="page?.data.slices ?? []"
      :components="components"
    />
  </div>
</template>
<style scoped>
body main {
  background-color: v-bind("page?.data.background_color") !important;
}
</style>
