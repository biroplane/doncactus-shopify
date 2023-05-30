export const useShopStore = defineStore("shop", () => {
  const shop = ref();

  const load = async () => {
    const data = await $fetch("/api/shop");
    shop.value = data.shop;
  };

  return {
    shop,
    load,
  };
});
