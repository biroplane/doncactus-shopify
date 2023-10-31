export const useCartStore = defineStore("cartstore", () => {
  /**
   * Cart id, checkoutUrl, estimatedCost,lines
   */
  const cart: Ref<any> = ref({});
  const cartTotal = computed(() => cart.value.cost && cart.value.cost);
  const CART_ID = "shopify:doncactus:cart";

  const initializeCart = async () => {
    const existingCartId = localStorage.getItem(CART_ID)
      ? localStorage.getItem(CART_ID)
      : undefined;

    if (existingCartId) {
      console.log(
        "%cCART Exists",
        "background-color:tomato; font-size:2rem",
        existingCartId,
        localStorage.getItem(CART_ID)
      );

      try {
        const { cart: _cart } = await $fetch("/api/cart", {
          method: "GET",
          params: { cartId: existingCartId },
        });
        console.log("%c[Existing cart]", "background-color:teal", _cart);
        if (!_cart) {
          localStorage.removeItem(CART_ID);
          await newCart();
          return;
        }
        cart.value = { ..._cart, id: existingCartId };
      } catch (error) {
        console.error("Errore carrello", error);
        localStorage.removeItem(CART_ID);
      }
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
      cart.value.lines.edges = data.cart;
    } catch (error) {
      console.log("Error while adding to cart", error);
    }
  };
  // const loadCart = async () => {
  //   const data = await $fetch('/api/cart')
  //   setCart(data.cartCreate?.cart)
  // }
  // const getCart = async () => {
  //   let localCartData = JSON.parse(localStorage.getItem('shopify:cart') as string)
  //   if(localCartData){
  //     setCart({
  //       id:localCartData.cartId,
  //       checkoutUrl:localCartData.checkoutUrl,
  //       estimatedCost:null,
  //       lines:[]
  //     })
  //   }
  //   // CHECK FOR LOCAL CART

  //   await loadCart()
  // }
  // const setCart = (cart: any) => {
  //   cart.value = cart
  //   localStorage.setItem('shopify:cart',JSON.stringify(cart))
  // }

  // const emptyCart=()=>{
  //   cart.value={}
  //   localStorage.removeItem('shopify:cart')
  // }

  return {
    cart,
    initializeCart,
    cartTotal,
    addToCart,
  };
});
