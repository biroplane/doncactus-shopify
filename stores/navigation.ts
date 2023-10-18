export const useNavStore = defineStore("navigation", () => {
  const menu = ref([
    { label: "Collezioni", route: "/collections" },
    { label: "Prodotti", route: "/products" },
    { label: "Contatti", route: "/contacts" },
  ]);
  return {
    menu,
  };
});
