import { CheckoutCreateInput } from "#gql";
enum CountryCode {
  IT = "IT",
}

export default defineEventHandler(async (event) => {
  const body = await readBody(event);
  console.log("Payload", body);
  try {
    const input: CheckoutCreateInput = {
      allowPartialAddresses: true,
      buyerIdentity: {
        countryCode: CountryCode.IT,
      },
      lineItems: [...body.lineItems],
      note: "",
      shippingAddress: {
        address1: "Via Piscina nuova",
        address2: "39",
        city: "New York",
        company: "",
        country: "United States",
        firstName: "Gaetano",
        lastName: "Vallarelli",
        phone: "123",
        province: "New York",
        zip: "70038",
      },
    };
    // const checkout = await GqlCheckoutCreate({ input });
    console.log("INPUT CHECKOUT", input);
    return { msg: "OK" /* checkout */ };
    //   return checkout;
  } catch (error) {
    console.log("Error ", error);
    createError(error as string);
  }
});
