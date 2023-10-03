<template>
  <div
    class="flex flex-col gap-2 overflow-hidden transition-all duration-300 origin-center rounded-md hover:shadow-xl hover:-translate-y-2 hover:-rotate-2 hover:scale-105"
  >
    <div class=""><slot name="image"></slot></div>
    <div class="px-4"><slot></slot></div>
    <div class=""><slot name="footer"></slot></div>
  </div>
</template>
