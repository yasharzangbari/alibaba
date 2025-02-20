import { useState } from "react";
import { QUERY_KEYS } from "~constants/queryKeys";
import { useRequest } from "~hooks/useRequest";
import { endpoints } from "~lib/api/endpoints";
import { Hotel } from "~types/hotels";
import "./index.css";

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
      <input
        type="text"
        className="search-box"
        placeholder="جستجوی هتل..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
      {filteredHotels?.map((hotel, index) => (
        <div key={index} className="hotel-card">
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
      ))}
    </div>
  );
};

export { Page, prefetchQueries };
