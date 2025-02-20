import { toPersianNumber } from "~utils/toPersianNumber";
import { Link } from "../../renderer/Link";
import { Hotel } from "~types/hotels";
import { useHotels } from "~hooks/useHotels";
import "./index.css";

export const HotelList = ({ hotels }: { hotels: Hotel[] }) => {
  const { filteredHotels, search, handleInputChange } = useHotels(hotels);

  return (
    <div>
      <input
        type="text"
        className="search-box"
        placeholder="جستجوی هتل..."
        value={search}
        onChange={(event) => handleInputChange(event)}
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
              <div className="hotel-stars">
                ⭐ {toPersianNumber(hotel.stars)} ستاره
              </div>
            </div>
          </div>
        </Link>
      ))}
    </div>
  );
};
