export default defineEventHandler(async (_) => {
  // const data = await $fetch(()=>GqlProducts({ first: 15 }))

  const { pages } = await GqlGetBlogPages();

  return { msg: "ok", pages };
});
