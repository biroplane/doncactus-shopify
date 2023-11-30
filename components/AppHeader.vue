<script lang="ts" setup>
import { onClickOutside } from "@vueuse/core";
import { useCartStore } from "~/stores/cart";
const cartStore = useCartStore();

const { drawer } = storeToRefs(cartStore);
const cartList = ref();
onClickOutside(cartList, () => {
  drawer.value = false;
});
</script>

<template>
  <div
    class="fixed top-0 z-50 flex items-center justify-center w-full h-24 px-4 transition-all duration-1000 bg-white bg-opacity-90 filter backdrop-blur-lg"
  >
    <div ref="cartList" class="flex items-center justify-between w-full gap-8">
      <div
        class="flex items-center justify-center h-full lg:hidden aspect-square"
      >
        <AppDrawer />
      </div>
      <Logo />
      <div class="hidden w-full h-full lg:flex"><MainMenu /></div>
      <div class="hidden lg:block">
        <Search />
      </div>
      <div class="">
        <!-- CARRELLLO -->
        <button class="relative p-4" @click="drawer = !drawer">
          <Icon name="ci:shopping-cart-02" size="24" class="text-primary" />
          <div v-if="cartStore.totalItems" class="badge">
            {{ cartStore.totalItems }}
          </div>
        </button>
        <Transition name="slide-left">
          <Cart />
        </Transition>
      </div>
    </div>
  </div>
</template>

<style scoped>
.slide-left-enter-active {
  animation: slide 0.3s forwards cubic-bezier(0.075, 0.82, 0.165, 1);
}
.slide-left-leave-active {
  animation: slide 0.3s reverse cubic-bezier(0.075, 0.82, 0.165, 1);
}
@keyframes slide {
  0% {
    transform: translateX(100%);
    opacity: 0.5;
  }
  100% {
    transform: translateX(0);
    opacity: 1;
  }
}
</style>
