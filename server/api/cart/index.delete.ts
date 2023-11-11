export default defineEventHandler(async (event) => {
  // const data = await $fetch(()=>GqlProducts({ first: 15 }))
  const data = await readBody(event);
  console.log("DELETE FROM CART", data);
  const cart = await GqlCartLinesRemove({
    cartId: data.cartId,
    lineIds: data.lineIds,
  });

  return { msg: "ok", cart: cart.cartLinesRemove?.cart?.lines.nodes };
});
