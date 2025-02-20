import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet";
import { DefaultPositionTuple } from "~types/map";
import "leaflet/dist/leaflet.css";
import { Hotel } from "~types/hotels";
import { Link } from "../../renderer/Link";

type Props = {
  data: Hotel[];
};
const Map = (props: Props) => {
  const { data } = props;
  const defaultPosition: DefaultPositionTuple = [35.738, 51.4444];

  return (
    <MapContainer center={defaultPosition} zoom={12}>
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      {data?.map((hotel) => (
        <Marker
          key={hotel.name}
          position={[hotel.location.lat, hotel.location.long]}
        >
          <Popup>
            <Link href={`/hotel/${hotel.id}`}>{hotel.name}</Link>
          </Popup>
        </Marker>
      ))}
    </MapContainer>
  );
};

export default Map;
