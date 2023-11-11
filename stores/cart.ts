import type { Ref } from "vue";

export const useCartStore = defineStore("cartstore", () => {
  /**
   * Cart id, checkoutUrl, estimatedCost,lines
   */
  const cart: Ref<any> = ref({});
  const cartTotal = computed(() => cart.value.cost && cart.value.cost);
  const CART_ID = "shopify:doncactus:cart";
  const existingCartId: Ref<string | undefined | null> = ref(undefined);
  const initializeCart = async () => {
    existingCartId.value = localStorage.getItem(CART_ID)
      ? localStorage.getItem(CART_ID)
      : undefined;

    if (existingCartId.value) {
      console.log(
        "%cCART Exists",
        "background-color:tomato; font-size:2rem",
        existingCartId.value,
        localStorage.getItem(CART_ID)
      );
      loadCart();
    } else {
      await newCart();
      console.log("IL CARRELLO NON ESISTE");
    }
  };
  const newCart = async () => {
    try {
      const data = await $fetch("/api/cart", { method: "POST" });
      console.log("Cart created", data.cartCreate?.cart);
      setCart(data.cartCreate?.cart);
    } catch (error) {
      console.error("Erro new cart", error);
    }
  };
  const loadCart = async () => {
    try {
      const { cart: _cart } = await $fetch("/api/cart", {
        method: "GET",
        params: { cartId: existingCartId.value },
      });
      console.log("%c[Existing cart]", "background-color:teal", _cart);
      if (!_cart) {
        localStorage.removeItem(CART_ID);
        await newCart();
        return;
      }
      cart.value = { ..._cart, id: existingCartId.value };
    } catch (error) {
      console.error("Errore carrello", error);
      localStorage.removeItem(CART_ID);
    }
  };
  const setCart = (_cart: any) => {
    cart.value = _cart;
    localStorage.setItem(CART_ID, _cart.id);
  };
  const addToCart = async (id: string) => {
    try {
      const data = await $fetch("/api/cart", {
        method: "PUT",
        body: { cartId: cart.value.id, variantId: id },
      });
      console.log("Added to cart", data);
      await loadCart();
      // cart.value.lines.edges = data.cart;
    } catch (error) {
      console.log("Error while adding to cart", error);
    }
  };
  const removeFromCart = async (id: any) => {
    try {
      const data = await GqlCartLinesRemove({
        cartId: cart.value.id,
        lineIds: [id],
      });
      console.log("Eliminato", data);
      await loadCart();
    } catch (error) {
      console.log("Errore di cancellazione dal carrello", error);
    }
  };
  const updateCart = async (lines: any) => {
    try {
      const data = await GqlCartLinesUpdate({ cartId: cart.value.id, lines });
      console.log("Update del carrello ", data);
      await loadCart();

      return data;
    } catch (error) {
      console.log("Errore di update ", error);
    }
  };
  // const checkout =async (lineItems:any[]) => {
  //   await
  // }
  return {
    cart,
    loadCart,
    initializeCart,
    cartTotal,
    addToCart,
    removeFromCart,
    updateCart,
  };
});
