// Docs on event and context https://docs.netlify.com/functions/build/#code-your-function-2
const handler = async (event) => {
  try {
    const subject = event.queryStringParameters.name || "World";
    const data = await fetch(
      `https://doncactustest.myshopify.com/admin/api/2021-07/custom_collections.json`,
      {
        method: "GET",
        headers: {
          "Content-type": "application/json",
          "X-Shopify-Access-Token": process.env.SHOPIFY_ADMIN_PASSWORD,
        },
      }
    ).then((resp) => resp.json());
    return {
      statusCode: 200,
      body: JSON.stringify({ message: `Hello ${subject}`, data }),
      // // more keys you can return:
      // headers: { "headerName": "headerValue", ... },
      // isBase64Encoded: true,
    };
  } catch (error) {
    return { statusCode: 500, body: error.toString() };
  }
};

export default { handler };
