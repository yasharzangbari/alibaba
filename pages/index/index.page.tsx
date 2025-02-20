import React, { useState } from "react";
import { QUERY_KEYS } from "~constants/queryKeys";
import { useRequest } from "~hooks/useRequest";
import { endpoints } from "~lib/api/endpoints";
import { Hotel } from "~types/hotels";
import "./index.css";
import { ClientOnly } from "~components/ClientOnly";
import { Link } from "../../renderer/Link";

const LazyMap = React.lazy(() => import("~components/Map"));

const prefetchQueries = {
  getHotels: {
    fn: endpoints.getHotels,
  },
};

const Page = () => {
  const [search, setSearch] = useState("");
  const { data: hotels } = useRequest<Hotel[]>(
    [QUERY_KEYS.GET_HOTELS],
    endpoints.getHotels
  );

  const filteredHotels = hotels?.filter((hotel) =>
    hotel.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="hotel-list-container">
      <div>
        <input
          type="text"
          className="search-box"
          placeholder="جستجوی هتل..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
        {filteredHotels?.map((hotel) => (
          <Link key={hotel.id} href={`/hotel/${hotel.id}`}>
            <div className="hotel-card">
              <img
                src={hotel.image}
                alt={hotel.name}
                className="hotel-image"
                loading="lazy"
                width={150}
                height={131}
              />
              <div className="hotel-info">
                <div className="hotel-name">{hotel.name}</div>
                <div className="hotel-description">{hotel.description}</div>
                <div className="hotel-stars">⭐ {hotel.stars} ستاره</div>
              </div>
            </div>
          </Link>
        ))}
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
