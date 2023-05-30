export const useProductStore = defineStore("products", () => {
  const products = ref([] as any);
  const load = async (first = 3) => {
    try {
      const _prods = await $fetch("/api/products", {
        query: { first },
      });
      products.value = _prods.products.edges;
      console.log("Products loaded", _prods.products.edges);
    } catch (error) {
      console.log("Errore api ", error);
    }
  };
  return { products, load };
});
