<script setup lang="ts"></script>
<template>
  <div class="relative w-full app_hero">
    <div
      class="absolute bottom-0 w-full h-64 p-16 lg:shadow-xl box bg-brown-500 md:w-96 md:bottom-24 lg:left-24 lg:rounded-md"
    >
      <div
        class="absolute w-32 duration-1000 -right-16 top-10 lg:-left-16 float"
      >
        <img src="/cactus_4.png" class="object-contain w-full h-full" />
      </div>
      <h1 class="mb-4 text-5xl font-bold text-white font-boysand lg:text-4xl">
        Don Cactus
      </h1>
      <p class="mb-6">Amore a prima spina 🌵</p>
      <NuxtLink
        to="/products"
        class="px-8 py-2 mt-8 text-white rounded bg-brown-800"
        >Scopri di più</NuxtLink
      >
    </div>
  </div>
</template>
<style scoped lang="postcss">
.app_hero {
  background-image: url(/piante_grasse_2.jpg);
  background-size: cover;
  height: calc(100vh - theme("space.24"));
  overflow: hidden;
}
</style>
