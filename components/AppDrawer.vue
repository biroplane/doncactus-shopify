<script setup lang="ts">
import { onClickOutside } from "@vueuse/core";

const drawer = ref(false);
const drawerBox = ref();
onClickOutside(drawerBox, () => {
  drawer.value = false;
});
const close = (evt: any) => {
  console.log("EVENT CLOSE ", evt);
  drawer.value = evt;
};
</script>
<template>
  <div class="">
    <button
      class="flex items-center justify-center w-8 aspect-square"
      @click="drawer = !drawer"
    >
      <Icon name="ci:hamburger-md" size="32" class="text-primary-600" />
    </button>
    <transition name="slide">
      <div
        v-if="drawer"
        ref="drawerBox"
        class="fixed top-0 right-0 z-50 w-full h-screen p-4 shadow-xl bg-sand-200"
      >
        <div class="flex flex-col h-full">
          <div class="flex">
            <div class="flex-grow"><Logo /></div>
            <button class="text-primary-600" @click="drawer = false">
              <Icon name="ci:close-md" size="24"></Icon>
            </button>
          </div>
          <div class="py-6">
            <Search />
          </div>
          <!-- <ul class="flex-grow h-full mt-12 ml-4">
            <li
              v-for="nav in navStore.menu"
              :key="nav.label"
              @click="drawer = false"
            >
              <NuxtLink :to="nav.route" active-class="font-bold">{{
                nav.label
              }}</NuxtLink>
            </li>
          </ul> -->
          <MainMenu vertical @close="close" />
          <NuxtLink
            to="/carrello"
            class="flex py-3 border-t account border-primary-600 text-primary-600"
          >
            <div class="flex-grow">Checkout</div>
            <div class="">
              <Icon name="ci:shopping-cart-02" size="24"></Icon>
            </div>
          </NuxtLink>
        </div>
      </div>
    </transition>
  </div>
</template>
<style>
.slide-enter-active {
  animation: slide 0.3s forwards cubic-bezier(0.075, 0.82, 0.165, 1);
}
.slide-leave-active {
  animation: slide 0.3s reverse cubic-bezier(0.075, 0.82, 0.165, 1);
}
@keyframes slide {
  0% {
    transform: translateX(-100%);
    opacity: 0.5;
  }
  100% {
    transform: translateX(0);
    opacity: 1;
  }
}
/* .slide-enter-active {
  transition: all 0.3s ease;
}
.slide-leave-active,
.slide-enter-to {
  transition: all 0.375s cubic-bezier(1, 0.5, 0.8, 1);
}
.slide-enter,.slide-enter-to, .slide-leave-to

  transition: all 0.3s ease;
  transform: translateX(10px);
  opacity: 0;
} */
</style>
