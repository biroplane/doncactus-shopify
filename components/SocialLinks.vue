<script setup lang="ts">
const prismic = usePrismic();
defineProps({
  vertical: {
    type: Boolean,
    default: false,
  },
  horizontal: { type: Boolean, default: false },
});
defineEmits(["close"]);

const { data: socials } = useAsyncData("social", () =>
  prismic.client.getSingle("social_links")
);

// const socials = [
//   {
//     link: "https://www.facebook.com",
//     name: "Facebook",
//     icon: "cib:facebook",
//     alt: "Facebook",
//   },
//   {
//     link: "https://www.instagram.com/doncactus_apulia/",
//     name: "Instagram",
//     icon: "cib:instagram",
//     alt: "Facebook",
//   },
//   {
//     link: "https://www.facebook.com",
//     name: "Google",
//     icon: "cib:google",
//     alt: "Facebook",
//   },
//   // {
//   //   link: "https://www.facebook.com",
//   //   name: "TikTok",
//   //   icon: "cib:tiktok",
//   //   alt: "Facebook",
//   // },
// ];
</script>
<template>
  <div class="w-full @container mt-12 md:mt-0">
    <ul class="grid gap-4 @[280px]:grid-cols-2 @lg:grid-cols-4 @xs:grid-cols-4">
      <li v-for="(social, s) in socials?.data.items" :key="s">
        <PrismicLink
          :field="social.link"
          class="flex items-center gap-2 hover:underline group isolate"
        >
          <div class="w-5 aspect-square">
            <PrismicImage
              :field="social.icon"
              class="object-contain object-center w-8 h-8 grayscale group-hover:grayscale-0"
            />
          </div>
          <p class="">
            {{ social.label }}
          </p>
        </PrismicLink>
        <!-- <a class="flex items-baseline gap-2" :href="social.link">
          <Icon :name="social.icon" size="16" />
          <p class="hover:underline">
            {{ social.name }}
          </p>
        </a> -->
      </li>
    </ul>
  </div>
</template>
