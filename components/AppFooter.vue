<script lang="ts" setup>
import { useShopStore } from "~/stores/shop";

const ss = useShopStore();
</script>

<template>
  <footer class="z-0 py-12 text-white bg-light-green-900">
    <div class="container grid md:grid-cols-3">
      <div class="flex gap-4">
        <Logo />
        <span>
          <h5 class="text-lg font-bold">Don Cactus</h5>
          <p class="text-sm">Amore a prima spina</p>
          <p class="text-sm">di Ivano Palermo</p>
          <address class="mt-6">{{ ss.address }}</address>
          <div class="">P.iva 08027470726</div>
          <div class="">Sdi X2PH38J</div>
        </span>
      </div>
      <div class="">
        <SocialLinks horizontal />
        <!-- class="flex-row flex-wrap px-6 mt-6 lg:flex-col lg:basis-full lg:px-0" -->
      </div>
      <div class="">
        <NuxtLink to="/cookie">Cookie Policy</NuxtLink>
        <NuxtLink to="/privacy">Privacy Policy</NuxtLink>
      </div>
    </div>
  </footer>
</template>

<style scoped></style>
