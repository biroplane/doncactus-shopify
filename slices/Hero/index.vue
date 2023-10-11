<script setup lang="ts">
import { isFilled, type Content } from "@prismicio/client";

defineProps(
  getSliceComponentProps<Content.HeroSlice>([
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
    class="py-12"
  >
    <PrismicLayoutHero
      :invert="slice.variation !== 'imageRight'"
      :image="slice.primary.image"
    >
      <template #first>
        <!-- <div class="w-full">
          <PrismicImage
            v-if="isFilled.image(slice.primary.image)"
            :field="slice.primary.image"
            class="object-contain"
          />
        </div> -->
      </template>
      <template #last>
        <div class="flex flex-col justify-center h-full">
          <p
            v-if="isFilled.keyText(slice.primary.eyebrowHeadline)"
            class="text-sm text-neutral-500"
          >
            {{ slice.primary.eyebrowHeadline }}
          </p>
          <div
            v-if="isFilled.richText(slice.primary.title)"
            class="mb-4 text-4xl font-bold text-primary-700"
          >
            <PrismicRichText :field="slice.primary.title" />
          </div>
          <div v-if="isFilled.richText(slice.primary.description)" class="">
            <PrismicRichText :field="slice.primary.description" />
          </div>
          <div class="flex text-center">
            <PrismicLink
              v-if="isFilled.link(slice.primary.callToActionLink)"
              class="items-start min-w-[8rem] px-4 py-6 text-sm text-white transition-colors duration-100 rounded bg-primary-600 hover:bg-primary-700 cursor-pointer"
              :field="slice.primary.callToActionLink"
            >
              {{ slice.primary.callToActionLabel || "Scopri" }}
            </PrismicLink>
            <pre>{{ slice.primary.callToActionLink }}</pre>
          </div>
        </div>
        <!-- <div class="flex flex-col justify-around h-full gap-2">
          <p
            v-if="isFilled.keyText(slice.primary.eyebrowHeadline)"
            class="text-sm text-neutral-500"
          >
            {{ slice.primary.eyebrowHeadline }}
          </p>
          <div
            v-if="isFilled.richText(slice.primary.title)"
            class="text-4xl font-bold text-primary-700"
          >
            <PrismicRichText :field="slice.primary.title" />
          </div>
          <div
            v-if="isFilled.richText(slice.primary.description)"
            class="es-fullpage-hero__content__intro__description"
          >
            <PrismicRichText :field="slice.primary.description" />
          </div>
          <PrismicLink
            v-if="isFilled.link(slice.primary.callToActionLink)"
            class="items-start px-4 py-6 text-sm text-white transition-colors duration-100 rounded justify-self-start bg-primary-600 hover:bg-primary-700"
            :field="slice.primary.callToActionLink"
          >
            {{ slice.primary.callToActionLabel || "Learn more…" }}
          </PrismicLink>
        </div> -->
      </template>
    </PrismicLayoutHero>
    <!-- <div
      class="es-fullpage-hero__content"
      :class="
        slice.variation === 'imageRight'
          ? 'es-fullpage-hero__image--right'
          : 'es-fullpage-hero__image--left'
      "
    >
      <div>
        <PrismicImage
          v-if="isFilled.image(slice.primary.image)"
          :field="slice.primary.image"
          class="es-fullpage-hero__image"
        />
      </div>
      <div class="es-fullpage-hero__content-right">
        <div class="es-fullpage-hero__content__intro">
          <p
            v-if="isFilled.keyText(slice.primary.eyebrowHeadline)"
            class="es-fullpage-hero__content__intro__eyebrow"
          >
            {{ slice.primary.eyebrowHeadline }}
          </p>
          <div
            v-if="isFilled.richText(slice.primary.title)"
            class="es-fullpage-hero__content__intro__headline"
          >
            <PrismicRichText :field="slice.primary.title" />
          </div>
          <div
            v-if="isFilled.richText(slice.primary.description)"
            class="es-fullpage-hero__content__intro__description"
          >
            <PrismicRichText :field="slice.primary.description" />
          </div>
          <PrismicLink
            v-if="isFilled.link(slice.primary.callToActionLink)"
            class="es-call-to-action__link"
            :field="slice.primary.callToActionLink"
          >
            {{ slice.primary.callToActionLabel || "Learn more…" }}
          </PrismicLink>
        </div>
      </div>
    </div> -->
  </section>
</template>

<style>
/* .es-bounded {
  margin: 0px;
  min-width: 0px;
  position: relative;
}

.es-fullpage-hero__image {
  max-width: 100%;
  aspect-ratio: 1 / 1 !important;
  object-fit: contain;

  align-self: center;
}

.es-fullpage-hero__image--left > div:first-child {
  order: 1;
}

.es-fullpage-hero__image--left > div:nth-child(2) {
  order: 2;
}

.es-fullpage-hero__image--right > div:first-child {
  order: 2;
}

.es-fullpage-hero__image--right > div:nth-child(2) {
  order: 1;
}

.es-fullpage-hero__content {
  display: flex;
  flex-direction: column;
  gap: 2rem;
}

.es-fullpage-hero__content-right {
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  padding: 1.5rem;
}

@media (min-width: 1080px) {
  .es-fullpage-hero__content {
    flex-direction: row;
  }

  .es-fullpage-hero__content > div {
    width: 50%;
  }
}

.es-fullpage-hero__content__intro {
  display: grid;
  gap: 1rem;
}

.es-fullpage-hero__content__intro__eyebrow {
  color: #47c1af;
  font-size: 1.15rem;
  font-weight: 500;
  margin: 0;
}

.es-fullpage-hero__content__intro__headline {
  font-size: 1.625rem;
  font-weight: 700;
}

.es-fullpage-hero__content__intro__headline * {
  margin: 0;
}

@media (min-width: 640px) {
  .es-fullpage-hero__content__intro__headline {
    font-size: 2rem;
  }
}

@media (min-width: 1024px) {
  .es-fullpage-hero__content__intro__headline {
    font-size: 2.5rem;
  }
}

@media (min-width: 1200px) {
  .es-fullpage-hero__content__intro__headline {
    font-size: 2.75rem;
  }
}

.es-fullpage-hero__content__intro__description {
  font-size: 1.15rem;
  max-width: 38rem;
}

.es-fullpage-hero__content__intro__description > p {
  margin: 0;
}

@media (min-width: 1200px) {
  .es-fullpage-hero__content__intro__description {
    font-size: 1.4rem;
  }
}

.es-call-to-action__link {
  justify-self: flex-start;
  border-radius: 0.25rem;
  font-size: 0.875rem;
  line-height: 1.3;
  padding: 1rem 2.625rem;
  transition: background-color 100ms linear;
  background-color: #16745f;
  color: #fff;
}

.es-call-to-action__link:hover {
  background-color: #0d5e4c;
} */
</style>
