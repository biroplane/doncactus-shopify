export default defineEventHandler(async (_) => {
  // const data = await $fetch(()=>GqlProducts({ first: 15 }))

  const { shop } = await GqlGetShopDetails();

  return { msg: "ok", shop };
});
