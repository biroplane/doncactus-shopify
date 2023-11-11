<script setup lang="ts">
// import { useGoogle } from "@/composables/useGoogle";
// const streetRef = ref();

// onMounted(async () => {
//   const _google = useGoogle();
//   const _places = await _google;
//   const autocomplete = new _places.Autocomplete(streetRef.value, {
//     types: ["address"],
//     fields: ["address_components"],
//     componentRestrictions: { country: ["it"] },
//   });

//   google.maps.event.addListener(autocomplete, "place_changed", () => {
//     console.log("Autocomplete", autocomplete.getPlace());
//   });
// });
// shippingAddress: {
//         address1: "Via Piscina nuova",
//         address2: "39",
//         city: "New York",
//         company: "",
//         country: "United States",
//         firstName: "Gaetano",
//         lastName: "Vallarelli",
//         phone: "123",
//         province: "New York",
//         zip: "70038",
//       },
</script>
<template>
  <form class="p-4 mb-6 border-t rounded-md shadow-xl">
    <h4 class="my-6 text-2xl font-medium">Indirizzo di spedizione</h4>
    <div class="grid grid-cols-2 gap-y-10 gap-x-4">
      <label for="firstName">
        <span>Nome</span>
        <input id="firstName" autocomplete="firstName" />
      </label>
      <label for="lastName">
        <span>Cognome</span>
        <input id="lastName" autocomplete="lastName" />
      </label>
      <label for="address_1" class="col-span-full">
        <span>Indirizzo</span>
        <input id="address_1" autocomplete="address_1" />
      </label>
      <label for="address_2" class="col-span-full">
        <span>Indirizzo 2</span>
        <input id="address_2" autocomplete="address_2" />
      </label>
      <label for="address_2" class="col-span-full">
        <span>Città</span>
        <input id="city" autocomplete="city" />
      </label>
      <label for="address_2" class="col-span-full">
        <span>Città</span>
        <input id="city" autocomplete="city" />
      </label>
    </div>
  </form>
</template>
<style lang="postcss" scoped>
label {
  @apply bg-primary-100 px-4 py-1 flex items-center text-sm text-neutral-500 relative box-border transition-all;
  &:focus-within {
    @apply border-b-2 border-primary;
  }
  span {
    @apply absolute -mt-12 left-0 px-4 bg-primary-100;
  }
  input {
    @apply bg-transparent py-2 w-full;
  }
}
</style>
