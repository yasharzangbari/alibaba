import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet";
import { DefaultPositionTuple, MapDataProps } from "~types/map";
import { Link } from "../../renderer/Link";
import { Icon } from "leaflet";
import marker from "../../assets/images/marker.svg";
import "leaflet/dist/leaflet.css";

const myIcon = new Icon({
  iconUrl: marker,
  iconSize: [32, 32],
});

const Map = (props: MapDataProps) => {
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
          icon={myIcon}
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
