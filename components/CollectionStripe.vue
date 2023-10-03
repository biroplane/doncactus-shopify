<script setup>
defineProps({
  odd: {
    type: Boolean,
    default: false,
  },
  image: {
    type: String,
    default: "",
  },
});
</script>
<template>
  <div class="max-w-4xl p-8 mx-auto my-12 border-b md:pb-12 md:p-0">
    <div class="grid w-full grid-cols-9 grid-rows-6 h-96">
      <div
        class="bg-cover border bg-light-green-100 rounded-xl lmnt"
        :class="[odd ? 'odd' : 'even']"
        :style="{ backgroundImage: `url(${image})` }"
      ></div>
      <div
        class="z-10 p-6 border shadow-2xl bg-light-green-100 rounded-xl lmnt"
        :class="[odd ? 'even' : 'odd']"
      >
        <slot></slot>
      </div>
      <!-- <div
        class="col-start-1 col-end-8 row-start-1 row-end-4 rounded-lg shadow-xl md:col-end-6 md:row-end-6 md:z-10 custom-bg"
        :style="{ backgroundImage: `url(${image})` }"
        :class="[odd ? 'odd' : 'even']"
      ></div>
      <div
        class="z-10 col-start-2 col-end-10 row-start-3 row-end-7 p-4 border bg-light-green-100 md:col-start-5 md:col-end-10 md:z-0 md:row-end-7 md:pl-32 md:pr-4 md:py-6 rounded-xl"
        :class="[!odd ? 'odd' : 'even']"
      >
        <slot></slot>
      </div> -->
    </div>
  </div>
</template>
<style lang="postcss" scoped>
.lmnt.odd {
  grid-column-start: 1;
  grid-column-end: 6;
  grid-row-start: 1;
  grid-row-end: 5;
}
.lmnt.even {
  grid-column-start: 4;
  grid-column-end: 10;
  grid-row-start: 3;
  grid-row-end: 7;
}
</style>
