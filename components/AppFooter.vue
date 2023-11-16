<script lang="ts" setup>
import { useShopStore } from "~/stores/shop";

const ss = useShopStore();
</script>

<template>
  <footer class="z-0 py-12 text-white bg-light-green-900">
    <div class="container grid gap-8 md:grid-cols-3">
      <div class="flex gap-4">
        <Logo />
        <span>
          <h5 class="text-lg font-bold">Don Cactus</h5>
          <p class="text-sm">Amore a prima spina</p>
          <div class="mt-8 text-sm">
            PASQUALE IVANO PALERMO
            <address class="">{{ ss.address }}</address>
            <div class="">P.iva 08027470726</div>
            <div class="">Sdi X2PH38J</div>
          </div>
        </span>
      </div>
      <div class="">
        <SocialLinks horizontal />
        <!-- class="flex-row flex-wrap px-6 mt-6 lg:flex-col lg:basis-full lg:px-0" -->
      </div>
      <div class="flex gap-4 text-xs">
        <NuxtLink to="/cookie" class="underline">Cookie Policy</NuxtLink>
        <NuxtLink to="/privacy" class="underline">Privacy Policy</NuxtLink>
      </div>
    </div>
  </footer>
</template>

<style scoped></style>
