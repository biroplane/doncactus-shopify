import { Loader } from "@googlemaps/js-api-loader";
export const useGoogle = async () => {
  const config = useRuntimeConfig();
  const loader = new Loader({
    apiKey: config.public.GOOGLE_MAPS_API_KEY,
    version: "weekly",
    libraries: ["places"],
  });

  return await loader.importLibrary("places");
};
