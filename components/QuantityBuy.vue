<script setup lang="ts">
const props = defineProps<{
  modelValue: number;
  min?: number;
  max?: number;
  border?: boolean;
}>();
const emits = defineEmits<{ (e: "update:modelValue", v: number): void }>();
const _q = computed({
  get: () => props.modelValue,
  set: (v) => emits("update:modelValue", v),
});
const decrease = () => {
  const _min = props.min ? props.min : 0;
  if (_q.value <= _min) return;
  _q.value--;
};
const increase = () => {
  const _max = props.max ? props.max : Infinity;
  if (_q.value >= _max) return;
  _q.value++;
};
</script>

<template>
  <div
    class="flex items-center w-full rounded-md font-barlow"
    :class="{ border }"
  >
    <div class="qty_btn">
      <button @click="decrease">
        <Icon name="ci:minus" size="16" />
      </button>
    </div>
    <div class="qty_btn">{{ _q }}</div>
    <div class="qty_btn">
      <button @click="increase">
        <Icon name="ci:plus" size="16" />
      </button>
    </div>
  </div>
</template>
<style scoped lang="postcss">
.qty_btn {
  @apply w-8 h-8 flex items-center justify-center border first-of-type:rounded-l-md first-of-type:border-r-0 last-of-type:rounded-r-md last-of-type:border-l-0;
}
</style>
