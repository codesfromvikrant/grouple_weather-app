import React from "react";
import { MapContainer, TileLayer, useMap } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import { Marker, Popup, useMapEvents } from "react-leaflet";
import { useSelector, useDispatch } from "react-redux";
import { setLatitude, setLongitude } from "../features/navigationSlice";

const Map = ({ mapheight }) => {
  const dispatch = useDispatch();
  const latitude = useSelector((state) => state.navigation.latitude);
  const longitude = useSelector((state) => state.navigation.longitude);

  const LocationFinderDummy = () => {
    const map = useMapEvents({
      click(e) {
        map.locate();
        const { lat, lng } = e.latlng;
        dispatch(setLatitude(lat));
        dispatch(setLongitude(lng));
        console.log(e.latlng);
      },
    });
    return null;
  };

  return (
    <MapContainer
      center={[latitude, longitude]}
      zoom={5}
      scrollWheelZoom={true}
      onClick={(e) => {
        console.log("hello");
      }}
    >
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <Marker position={[latitude, longitude]}>
        <Popup>
          A pretty CSS3 popup. <br /> Easily customizable.
        </Popup>
      </Marker>
      <div className="absolute text-xl font-extrabold text-blue-600 z-[99]">
        Hello
      </div>
      <LocationFinderDummy />
    </MapContainer>
  );
};

export default Map;
