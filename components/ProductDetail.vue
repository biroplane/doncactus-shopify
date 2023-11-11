<script setup lang="ts">
defineProps<{
  k: string;
  value: string;
}>();

const lookupTable: any = {
  care_guide: "Guida alla manutenzione",
  packaging: "Confezione",
  customization: "Personalizzazione",
};
</script>

<template>
  <details class="border-t">
    <summary class="transition-transform cursor-pointer hover:translate-x-3">
      {{ lookupTable[k] }}
    </summary>

    <div class="text-sm leading-5 text-neutral-500" v-html="value"></div>
  </details>
</template>
<style lang="postcss" scoped>
details {
  @apply py-4;
  summary {
    @apply font-medium text-brown-800;

    &::-webkit-details-marker {
      display: none;
    }
  }
  div {
    @apply pl-6;
  }
}
details > summary {
  list-style-type: "🞢 ";
}

details[open] > summary {
  margin-bottom: 0.5rem;
}
</style>
