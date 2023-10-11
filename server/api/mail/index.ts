export default defineEventHandler(async (_) => {
  const headers = {
    Authorization: `Bearer ${process.env.SENDER_API_KEY}`,
    "Content-Type": "application/json",
    Accept: "application/json",
  };
  console.log("Headers", headers);
  const data = await fetch("https://api.sender.net/v2/subscribers", {
    method: "GET",
    headers,
  });
  const json = await data.json();
  return json.data;
});
