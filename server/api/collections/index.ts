export default defineEventHandler(async (event) => {
  // const data = await $fetch(()=>GqlProducts({ first: 15 }))
  const query = getQuery(event);
  const first = parseInt(query.first as string);
  const { collections } = await GqlGetCollections({ first });

  return { msg: "ok", collections };
});
