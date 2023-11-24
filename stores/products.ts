import type { Ref } from "vue";
export const useProductStore = defineStore("products", () => {
  const product: Ref<any> = ref({} as any);
  const products = ref([] as any);
  const productPagination = ref({} as any);
  const collections = ref([] as any);
  const collection = ref({});

  const load = async (first = 3, query = "", after = undefined) => {
    try {
      const _prods = await GqlProducts({ first, query, after });

      console.log("%cProdotti caricati", "font-size:2rem", _prods.products);
      products.value = after
        ? products.value.concat(_prods.products.nodes)
        : _prods.products.nodes;
      productPagination.value = _prods.products.pageInfo;
      return _prods.products;
    } catch (error) {
      console.log("Errore api ", error);
    }
  };
  const one = async (handle: string) => {
    try {
      const _prod = await GqlGetProductByHandle({ handle });

      product.value = (_prod as any).product as any;
      console.log("ONE", _prod);
      return product.value;
    } catch (error) {
      console.log("Error", error);
    }
  };
  const loadRecommended = async (id: string) => {
    try {
      const data = await GqlGetProductRecommendations({ id });

      return data.productRecommendations;
    } catch (error) {
      console.log("Error loading recommended", error);
    }
  };
  const loadCollections = async (first = 3) => {
    console.log("Loading collections ", first);

    const data = await GqlGetCollections({ first });
    console.log("collections ", data.collections.nodes);
    collections.value = data.collections.nodes;
    return collections.value;
  };
  const getCollectionByHandle = async (handle: string, first = 100) => {
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
    productPagination,
  };
});
