/* eslint-disable import/no-named-as-default-member */
import client from "@mailchimp/mailchimp_marketing";

export default defineEventHandler(async (event) => {
  const config = useRuntimeConfig();
  const { email } = await readBody(event);
  client.setConfig({
    apiKey: config.public.MAILCHIMP_API_KEY,
    server: "us21",
  });

  try {
    console.log("Email", email);
    const response = await client.lists.addListMember(
      config.public.MAILCHIMP_AUDIENCE_ID,
      {
        email_address: email,
        status: "subscribed",
        tags: ["shopify", "web"],
      }
    );
    return response;
  } catch (error) {
    console.log("Errore mailchimp", error);
    return { error };
  }
});
