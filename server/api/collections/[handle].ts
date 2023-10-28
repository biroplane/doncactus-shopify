export default defineEventHandler(async (event) => {
  // const data = await $fetch(()=>GqlProducts({ first: 15 }))
  console.log(event.context.params?.handle);
  const handle = event.context.params?.handle as string;
  // const query = getQuery(event);
  // const first = parseInt(query.first as string);

  const data = await GqlGetCollectionByHandle({ handle });
  return { msg: "ok", data };
});
