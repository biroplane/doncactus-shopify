export default defineEventHandler(async (event) => {
  // const data = await $fetch(()=>GqlProducts({ first: 15 }))
  const query = getQuery(event);
  console.log("NEW CART EVENT", event, query);
  const { cart } = await GqlGetCart({ cartId: query.cartId as string });

  return { msg: "ok", cart };
});
