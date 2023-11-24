export default defineEventHandler(async () => {
  try {
    const data = await $fetch(
      "https://maps.googleapis.com/maps/api/place/details/json",
      {
        method: "GET",
        params: {
          key: process.env.GOOGLE_MAPS_API_KEY,
          // libraries: "places",
          place_id: process.env.GOOGLE_PLACE_ID,
          language: "it",
        },
      }
    );

    return data;
  } catch (error) {
    throw createError({
      statusCode: 400,
      message: (error as any).message,
      data: error,
    });
  }
});
