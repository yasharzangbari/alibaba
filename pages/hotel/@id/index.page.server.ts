import type { PageContextBuiltInServer } from "vite-plugin-ssr/types";
import { Hotel } from "~types/hotels";
import { endpoints } from "~lib/api/endpoints";
import { requestHandler } from "~lib/api/requestFactory";

export { onBeforeRender };
export { prerender };

async function onBeforeRender(pageContext: PageContextBuiltInServer) {
  const { id } = pageContext.routeParams;
  const response: Hotel = await requestHandler(endpoints.getHotel(id));

  return {
    pageContext: {
      pageProps: response,
    },
  };
}

async function prerender() {
  const hotels: Hotel[] = await requestHandler(endpoints.getHotels);

  return ["/hotel", ...hotels.map((hotel) => `/hotel/${hotel.id}`)];
}
