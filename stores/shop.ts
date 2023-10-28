export const useShopStore = defineStore("shop", () => {
  const shop = ref();
  const place = ref();

  const reviews = computed(
    () => place.value.result?.reviews.filter((r: any) => r.rating > 3) || []
  );
  const address = computed(() => place.value.result?.formatted_address);
  const phone = computed(
    () => place.value.result?.international_phone_number || ""
  );
  const location = computed(() => place.value.result?.geometry.location || "");
  const load = async () => {
    const data = await $fetch("/api/shop");
    shop.value = data.shop;
  };
  const loadPlace = async () => {
    const data = await $fetch("/api/reviews");
    place.value = data;
  };

  return {
    shop,
    load,
    loadPlace,
    place,

    reviews,
    address,
    phone,
    location,
  };
});
