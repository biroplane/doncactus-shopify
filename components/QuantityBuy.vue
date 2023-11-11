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
    class="flex items-center justify-around w-full rounded-md font-barlow"
    :class="{ border }"
  >
    <div class="">
      <button @click="decrease">
        <Icon name="ci:minus" size="24" />
      </button>
    </div>
    <div class="text-2xl">{{ _q }}</div>
    <div class="">
      <button @click="increase">
        <Icon name="ci:plus" size="24" />
      </button>
    </div>
  </div>
</template>
