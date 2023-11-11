import type { Ref } from "vue";
export const useProductStore = defineStore("products", () => {
  const product: Ref<any> = ref({} as any);
  const products = ref([] as any);
  const collections = ref([] as any);
  const collection = ref({});
  const load = async (first = 3) => {
    try {
      const _prods = await $fetch("/api/products", {
        query: { first },
      });
      console.log(
        "%cProdotti caricati",
        "font-size:2rem",
        _prods.products.nodes
      );
      products.value = _prods.products.nodes;
    } catch (error) {
      console.log("Errore api ", error);
    }
  };
  const one = async (handle: string) => {
    try {
      const _prod = await $fetch(`/api/products/${handle}`);
      product.value = (_prod as any).data.product as any;
      console.log("ONE", _prod);
      return product.value;
    } catch (error) {
      console.log("Error", error);
    }
  };
  const loadRecommended = async (id: string) => {
    try {
      const data = await $fetch("/api/products/recommended", {
        params: { id },
      });
      return data.recommended;
    } catch (error) {
      console.log("Error loading recommended", error);
    }
  };
  const loadCollections = async (first = 3) => {
    console.log("Loading collections ", first);
    const data = await $fetch("/api/collections", { query: { first } });
    console.log("collections ", data.collections.nodes);
    collections.value = data.collections.nodes;
    return collections.value;
  };
  const getCollectionByHandle = async (handle: string, first = 100) => {
    // const { data } = await $fetch(`/api/collections/${handle}`, {
    //   params: { first },
    // });
    try {
      console.log("first", first, handle);
      const data = await GqlGetCollectionByHandle({ handle, first });
      return data;
    } catch (error) {
      console.log("Errore GQL", error);
    }
  };
  return {
    products,
    product,
    collections,
    collection,
    load,
    one,
    loadCollections,
    loadRecommended,
    getCollectionByHandle,
  };
});
