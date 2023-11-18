<script setup lang="ts">
import { Loader } from "@googlemaps/js-api-loader";
import { type Content } from "@prismicio/client";
// The array passed to `getSliceComponentProps` is purely optional.
// Consider it as a visual hint for you when templating your slice.
const props = defineProps(
  getSliceComponentProps<Content.GoogleMapSlice>([
    "slice",
    "index",
    "slices",
    "context",
  ])
);
const mapElement = ref();
const mapData = ref();
const config = useRuntimeConfig();
const center = {
  lat: props.slice.primary.location.latitude,
  lng: props.slice.primary.location.longitude,
};
onMounted(async () => {
  const loader = new Loader({
    apiKey: config.public.GOOGLE_MAPS_API_KEY,
    version: "weekly",
    libraries: ["places", "maps"],
  });
  const { Map } = await loader.importLibrary("maps");
  mapData.value = new Map(mapElement.value, {
    center,
    zoom: 17,
    disableDefaultUI: true,
    scrollwheel: false,
    panControl: false,
    draggable: false,
    styles: [
      {
        featureType: "all",
        elementType: "all",
        stylers: [
          {
            visibility: "simplified",
          },
        ],
      },
      {
        featureType: "all",
        elementType: "labels",
        stylers: [
          {
            visibility: "off",
          },
        ],
      },
      {
        featureType: "all",
        elementType: "labels.text.fill",
        stylers: [
          {
            color: "#7c93a3",
          },
          {
            lightness: "-10",
          },
        ],
      },
      {
        featureType: "administrative",
        elementType: "all",
        stylers: [
          {
            visibility: "off",
          },
        ],
      },
      {
        featureType: "administrative.country",
        elementType: "geometry",
        stylers: [
          {
            visibility: "on",
          },
        ],
      },
      {
        featureType: "administrative.country",
        elementType: "geometry.stroke",
        stylers: [
          {
            color: "#a0a4a5",
          },
        ],
      },
      {
        featureType: "administrative.province",
        elementType: "geometry.stroke",
        stylers: [
          {
            color: "#62838e",
          },
        ],
      },
      {
        featureType: "landscape",
        elementType: "all",
        stylers: [
          {
            visibility: "off",
          },
        ],
      },
      {
        featureType: "landscape",
        elementType: "geometry.fill",
        stylers: [
          {
            color: "#dde3e3",
          },
        ],
      },
      {
        featureType: "landscape.man_made",
        elementType: "geometry.stroke",
        stylers: [
          {
            color: "#3f4a51",
          },
          {
            weight: "0.30",
          },
        ],
      },
      {
        featureType: "poi",
        elementType: "all",
        stylers: [
          {
            visibility: "off",
          },
        ],
      },
      {
        featureType: "poi.attraction",
        elementType: "all",
        stylers: [
          {
            visibility: "on",
          },
        ],
      },
      {
        featureType: "poi.business",
        elementType: "all",
        stylers: [
          {
            visibility: "off",
          },
        ],
      },
      {
        featureType: "poi.government",
        elementType: "all",
        stylers: [
          {
            visibility: "off",
          },
        ],
      },
      {
        featureType: "poi.park",
        elementType: "all",
        stylers: [
          {
            visibility: "on",
          },
        ],
      },
      {
        featureType: "poi.place_of_worship",
        elementType: "all",
        stylers: [
          {
            visibility: "off",
          },
        ],
      },
      {
        featureType: "poi.school",
        elementType: "all",
        stylers: [
          {
            visibility: "off",
          },
        ],
      },
      {
        featureType: "poi.sports_complex",
        elementType: "all",
        stylers: [
          {
            visibility: "off",
          },
        ],
      },
      {
        featureType: "road",
        elementType: "all",
        stylers: [
          {
            saturation: "-100",
          },
          {
            visibility: "on",
          },
        ],
      },
      {
        featureType: "road",
        elementType: "geometry.stroke",
        stylers: [
          {
            visibility: "on",
          },
        ],
      },
      {
        featureType: "road.highway",
        elementType: "geometry.fill",
        stylers: [
          {
            color: "#bbcacf",
          },
        ],
      },
      {
        featureType: "road.highway",
        elementType: "geometry.stroke",
        stylers: [
          {
            lightness: "0",
          },
          {
            color: "#bbcacf",
          },
          {
            weight: "0.50",
          },
        ],
      },
      {
        featureType: "road.highway",
        elementType: "labels",
        stylers: [
          {
            visibility: "on",
          },
        ],
      },
      {
        featureType: "road.highway",
        elementType: "labels.text",
        stylers: [
          {
            visibility: "on",
          },
        ],
      },
      {
        featureType: "road.highway.controlled_access",
        elementType: "geometry.fill",
        stylers: [
          {
            color: "#ffffff",
          },
        ],
      },
      {
        featureType: "road.highway.controlled_access",
        elementType: "geometry.stroke",
        stylers: [
          {
            color: "#a9b4b8",
          },
        ],
      },
      {
        featureType: "road.arterial",
        elementType: "labels.icon",
        stylers: [
          {
            invert_lightness: true,
          },
          {
            saturation: "-7",
          },
          {
            lightness: "3",
          },
          {
            gamma: "1.80",
          },
          {
            weight: "0.01",
          },
        ],
      },
      {
        featureType: "transit",
        elementType: "all",
        stylers: [
          {
            visibility: "off",
          },
        ],
      },
      {
        featureType: "water",
        elementType: "geometry.fill",
        stylers: [
          {
            color: "#a3c7df",
          },
        ],
      },
    ],
  });

  const marker = new google.maps.Marker({
    position: center,
    map: mapData.value,
    icon: "/pin_marker_green.png",
  });
  marker.addListener("click", () => {
    console.log("Show info");
  });
});
</script>

<template>
  <section
    :data-slice-type="slice.slice_type"
    :data-slice-variation="slice.variation"
    class="py-24"
  >
    <div class="grid w-full min-h-[70vh] md:grid-cols-2 gap-12">
      <div class="h-full -order-first md:order-first">
        <div ref="mapElement" class="w-full h-full"></div>
      </div>
      <div class="px-8 prose">
        <h1 class="text-primary">{{ slice.primary.title }}</h1>
        <PrismicRichText :field="slice.primary.body" />
        <ul>
          <li v-for="(item, i) in slice.items" :key="i" class="">
            <PrismicLink :field="item.cta_link" class="text-primary">
              {{ item.cta_label }}
            </PrismicLink>
            <PrismicRichText :field="item.body" />
          </li>
        </ul>
      </div>
    </div>
  </section>
</template>
