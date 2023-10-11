<script setup lang="ts">
import { createCircle } from "~/utils/circle";
onMounted(() => {
  const canvas: HTMLCanvasElement = document.querySelector(
    "canvas#blob"
  ) as HTMLCanvasElement;
  createCircle(canvas, 2);
});
</script>
<template>
  <div class="relative w-full h-[65vh] overflow-x-hidden">
    <div class="absolute inset-0 canvas-container">
      <canvas id="blob" class="w-full h-full"></canvas>
    </div>
    <div
      class="container relative z-0 grid h-full grid-cols-2 place-items-center"
    >
      <div class="flex flex-col items-start max-w-sm">
        <slot name="left">
          <h2
            class="mb-4 text-5xl font-bold uppercase font-barlow lg:text-6xl gradientText"
          >
            Don Cactus
          </h2>
          <p class="mb-4 text-md lg:text-2xl">Amore a prima spina!</p>
          <p class="hidden mb-4 text-sd lg:text-md md:block">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore
            blanditiis ut fugit deserunt quaerat harum qui.
          </p>
          <NuxtLink
            to="/products"
            class="px-12 py-3 rounded-full bg-light-green text-sand md:mt-12"
            >Scopri
            <span class="hidden lg:inline">subito il Catalogo</span></NuxtLink
          >
        </slot>
      </div>
      <div class="relative flex items-center justify-center w-full h-full">
        <slot name="right">
          <div
            class="absolute w-64 ml-48 overflow-hidden rounded-full h-96 lg:ml-0 bg-light-green-500 bg-opacity-70 filter backdrop-blur-lg blur-sm"
          >
            <img
              src="/piante_grasse_1.jpg"
              class="object-cover w-full h-full"
            />
          </div>
          <div
            class="absolute w-48 h-64 ml-48 duration-1000 lg:w-64 lg:h-96 lg:ml-0 float"
          >
            <img src="/cactus_4.png" />
          </div>
        </slot>
      </div>
    </div>
  </div>
</template>
<style scoped>
.canvas-container {
  &:before {
    content: "";
    position: absolute;
    background-image: url("/piante_grasse_2.jpg");
    background-size: cover;
    opacity: 0.3;
    inset: 0;
    z-index: -1;
  }
}
canvas {
  mix-blend-mode: multiply;
}
</style>
