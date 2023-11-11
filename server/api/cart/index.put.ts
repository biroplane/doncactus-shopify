export default defineEventHandler(async (event) => {
  // const data = await $fetch(()=>GqlProducts({ first: 15 }))
  const data = await readBody(event);
  const cart = await GqlAddToCart({
    cartId: data.cartId,
    variantId: data.variantId,
  });

  return { msg: "ok", cart: cart.cartLinesAdd?.cart?.lines };
});
