export const useProductStore = defineStore("products", () => {
  const products = ref([] as any);
  const collections = ref([] as any);
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
  const loadCollections = async (first = 3) => {
    const data = await $fetch("/api/collections", { query: { first } });
    collections.value = data.collections.edges;
    return collections.value;
  };
  return { products, collections, load, loadCollections };
});
