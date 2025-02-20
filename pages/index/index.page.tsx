import React from "react";
import { QUERY_KEYS } from "~constants/queryKeys";
import { useRequest } from "~hooks/useRequest";
import { endpoints } from "~lib/api/endpoints";
import { Hotel } from "~types/hotels";
import { ClientOnly } from "~components/ClientOnly";
import { HotelList } from "~components/HotelList";
import "./index.css";

const LazyMap = React.lazy(() => import("~components/Map"));

const prefetchQueries = {
  getHotels: {
    fn: endpoints.getHotels,
  },
};

const Page = () => {
  const { data: hotels } = useRequest<Hotel[]>(
    [QUERY_KEYS.GET_HOTELS],
    endpoints.getHotels
  );

  return (
    <div className="hotel-list-container">
      <div className="hotel-list">
        <HotelList hotels={hotels} />
      </div>
      <div className="map-container">
        <ClientOnly
          component={LazyMap}
          fallback={<div>loading ...</div>}
          data={hotels}
        />
      </div>
    </div>
  );
};

export { Page, prefetchQueries };
