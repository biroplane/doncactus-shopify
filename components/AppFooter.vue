<script lang="ts" setup>
const socials = [
  {
    link: "https://www.facebook.com",
    name: "Facebook",
    icon: "cib:facebook",
    alt: "Facebook",
  },
  {
    link: "https://www.instagram.com/doncactus_apulia/",
    name: "Instagram",
    icon: "cib:instagram",
    alt: "Facebook",
  },
  {
    link: "https://www.facebook.com",
    name: "Google",
    icon: "cib:google",
    alt: "Facebook",
  },
  {
    link: "https://www.facebook.com",
    name: "TikTok",
    icon: "cib:tiktok",
    alt: "Facebook",
  },
];
</script>

<template>
  <footer class="z-0 py-12 text-white bg-light-green-900">
    <div class="container grid md:grid-cols-3">
      <div class="flex gap-4">
        <Logo />
        <span>
          <h5 class="text-lg font-bold">Don Cactus</h5>
          <p class="text-sm">Amore a prima spina</p>
          <div class="mt-6">Via tizio, 6</div>
        </span>
      </div>
      <div class="">
        <ul class="flex flex-col gap-4">
          <li v-for="social in socials" :key="social.link">
            <a class="flex items-baseline gap-2">
              <Icon :name="social.icon" size="16" />
              <p :href="social.link" class="hover:underline">
                {{ social.name }}
              </p>
            </a>
          </li>
        </ul>
      </div>
      <div class="">Map</div>
      <div class=""></div>
    </div>
  </footer>
</template>

<style scoped></style>
