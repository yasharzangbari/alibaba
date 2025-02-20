import type { PageContextBuiltInServer } from "vite-plugin-ssr/types";
import { Hotel } from "~types/hotels";
import { endpoints } from "~lib/api/endpoints";
import { requestHandler } from "~lib/api/requestFactory";

export { onBeforeRender };

async function onBeforeRender() {
  const hotels: Hotel[] = await requestHandler(endpoints.getHotels);

  return {
    pageContext: {
      pageProps: {
        hotels,
      },
    },
  };
}
