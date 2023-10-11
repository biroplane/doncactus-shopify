import axios from "axios";
export default defineEventHandler(async (event) => {
  try {
    const _axios = axios.create({
      baseURL: "https://api.sender.net/v2",
      headers: {
        Authentication: `Bearer ${process.env.SENDER_API_KEY}`,
        "Content-Type": "application/json",
        Accept: "application/json",
      },
    });
    const body = await readBody(event);
    console.log("BODY", body);
    const { data } = await _axios({ url: "/subscribers", data: body });
    return { msg: "Success", data, body };
  } catch (error: any) {
    createError(`Errore di creazione subscriber => ${error.message}`);
  }
});
