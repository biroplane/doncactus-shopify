export default defineEventHandler(async (_) => {
  // const data = await $fetch(()=>GqlProducts({ first: 15 }))
  const { cartCreate } = await GqlCartCreate();

  return { msg: "ok", cartCreate };
});
