export default defineEventHandler(async (event) => {
  // const data = await $fetch(()=>GqlProducts({ first: 15 }))
  try {
    // const { first } = event.context.params as any;
    const query = getQuery(event);
    // const first = parseInt(query.first as string);
    // console.log("Event", event.context, first);
    // const { products } = await GqlProducts({ first });
    // return { msg: "ok", products };

    const products = await GqlGetProductRecommendations({
      id: query.id as string,
    });
    return { msg: "ok", recommended: products.productRecommendations };
  } catch (error) {
    console.error(error);
    createError(error as string);
  }
});
