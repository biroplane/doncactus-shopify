export default defineEventHandler(async (event) => {
  try {
    const body = await readBody(event);
    console.log("BODY", body);
    const data = await $fetch("https://api.sender.net/v2/subscribers", {
      body,
      headers: {
        Authentication: `Bearer ${process.env.SENDER_API_KEY}`,
        "Content-Type": "application/json",
        Accept: "application/json",
      },
    });

    return { msg: "Success", data, body };
  } catch (error: any) {
    createError(`Errore di creazione subscriber => ${error.message}`);
  }
});
