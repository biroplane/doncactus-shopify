<script setup>
const route = useRoute();
const { collection } = await GqlGetCollectionByHandle({
  handle: route.params.handle,
});
console.log("Handle", collection);
</script>
<template>
  <div class="">
    <AppHero>
      <template #left>
        <h1 class="text-4xl gradientText font-bold">{{ collection.title }}</h1>
      </template>
      <template #right>&nbsp;</template>
    </AppHero>
    <main class="max-w-md container">
      {{ collection.descriptionHtml }}

      <DcProductsList :products="collection.products?.edges"></DcProductsList>
    </main>
  </div>
</template>
