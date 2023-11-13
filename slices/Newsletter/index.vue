<script setup lang="ts">
import * as prismic from "@prismicio/client";

// The array passed to `getSliceComponentProps` is purely optional.
// Consider it as a visual hint for you when templating your slice.
defineProps(
  getSliceComponentProps<prismic.Content.NewsletterSlice>([
    "slice",
    "index",
    "slices",
    "context",
  ])
);
const email = ref("");
const addTonNewsletter = () => {
  console.log("Adding to newsletter ", email.value);
};
</script>

<template>
  <div class="">
    <section
      :data-slice-type="slice.slice_type"
      :data-slice-variation="slice.variation"
      class="w-full px-4 py-12 bg-gradient-to-tr from-primary-300 to-primary-500"
    >
      <form
        class="container flex flex-col items-center max-w-lg gap-4"
        @submit.prevent="addTonNewsletter"
      >
        <h4 class="text-3xl font-bold text-fallow-100">
          Resta in contatto con noi
        </h4>
        <p class="max-w-lg text-center text-neutral-100">
          Cogli l'opportunità di restare sempre aggiornato! Iscriviti alla
          nostra newsletter e ricevi le ultime notizie direttamente nella tua
          casella di posta.
        </p>
        <label for="email" class="flex w-full">
          <input
            id="email"
            v-model="email"
            type="email"
            class="w-full p-2 border border-r-0 rounded rounded-r-none focus:outline-none border-primary-600"
            placeholder="mario.rossi@esempio.com"
          />
          <button
            type="submit"
            class="px-4 border border-l-0 rounded-r border-primary-600 bg-primary-600"
          >
            ✉️
          </button>
        </label>
        <p class="max-w-lg text-xs text-center text-neutral-100">
          Compilando questo modulo acconsenti al trattamento dei dati come da
          <NuxtLink to="/privacy" class="underline text-primary-600"
            >Privacy Policy</NuxtLink
          >
        </p>
      </form>
    </section>
  </div>
</template>
