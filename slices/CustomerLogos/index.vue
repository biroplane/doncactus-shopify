<script setup lang="ts">
import { isFilled, type Content } from "@prismicio/client";

defineProps(
  getSliceComponentProps<Content.CustomerLogosSlice>([
    "slice",
    "index",
    "slices",
    "context",
  ])
);
</script>

<template>
  <section
    :data-slice-type="slice.slice_type"
    :data-slice-variation="slice.variation"
    class="bg-[#f4f0ec]"
  >
    <div
      class="container flex flex-col items-center w-full gap-12 py-16 md:px-6 lg:px-48"
    >
      <div
        v-if="isFilled.richText(slice.primary.eyebrowHeadline)"
        class="text-3xl font-boysand text-primary"
      >
        <PrismicRichText :field="slice.primary.eyebrowHeadline" />
      </div>
      <ul
        v-if="slice.items.length > 0"
        class="grid items-center grid-cols-1 gap-12 p-4 overflow-x-auto md:flex"
      >
        <li
          v-for="(item, i) in slice.items"
          :key="i"
          :class="[
            slice.variation == 'noBorders'
              ? ''
              : 'card h-96 aspect-square flex items-center justify-center outline outline-sand-600 bg-white flex-shrink-0 flex-grow-0 md:flex-basis-[35%]',
            {
              'h-12 transition-transform hover:scale-110': slice.primary.small,
            },
          ]"
        >
          <PrismicLink :field="item.link">
            <PrismicImage
              :field="item.image"
              class="object-cover w-full h-full es-customer-logos__logo__link__image"
            />
          </PrismicLink>
        </li>
      </ul>
      <PrismicLink
        v-if="isFilled.link(slice.primary.callToActionLink)"
        :field="slice.primary.callToActionLink"
        class="es-customer-logos__button"
      >
        {{ slice.primary.callToActionLabel }}
      </PrismicLink>
    </div>
  </section>
</template>

<style>
/* .es-bounded {
  margin: 0px;
  min-width: 0px;
  position: relative;
  padding: 8vw 1.25rem;
}

.es-bounded__content {
  min-width: 0px;
  max-width: 90%;
  margin: 0px auto;
}

.es-customer-logos {
  font-family: system-ui, sans-serif;
  background-color: #f4f0ec;
  color: #333;
}

.es-customer-logos__content {
  display: grid;
  gap: 2rem;
  justify-items: center;
}

.es-customer-logos__heading {
  color: #8592e0;
  font-size: 1.5rem;
  font-weight: 500;
  text-align: center;
}

.es-customer-logos__heading * {
  margin: 0;
}

.es-customer-logos__logos {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(120px, 1fr));
  grid-column-gap: 1.25rem;
  grid-row-gap: 2rem;
  align-items: center;
  list-style-type: none;
  width: 100%;
}

@media (min-width: 1200px) {
  .es-customer-logos__logos {
    margin-left: -3rem;
  }
}

.es-customer-logos__logo {
  margin: 0;
  display: flex;
  justify-content: center;
}

@media (min-width: 1200px) {
  .es-customer-logos__logo {
    margin-left: 3rem;
  }
}

.es-customer-logos__logo__link__image {
  max-width: 10rem;
}

.es-customer-logos__button {
  justify-self: center;
  text-decoration: underline;
} */
</style>
