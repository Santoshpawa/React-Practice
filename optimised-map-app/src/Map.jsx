import React, { useEffect } from "react";
import {
  MapContainer,
  TileLayer,
  Marker,
  Popup,
  useMap,
} from "react-leaflet";
import "leaflet/dist/leaflet.css";
import "leaflet-routing-machine";
import L from "leaflet";

const Routing = ({ from, to }) => {
  const map = useMap();

  useEffect(() => {
    if (!from || !to) return;

    const routingControl = L.Routing.control({
      waypoints: [L.latLng(from[0], from[1]), L.latLng(to[0], to[1])],
      routeWhileDragging: false,
    }).addTo(map);

    map.setView(L.latLng(from[0], from[1]), 13);

    return () => map.removeControl(routingControl);
  }, [from, to, map]);

  return null;
};

const Map = ({ from, to }) => {
  const defaultCenter = [20.5937, 78.9629]; // Center of India as fallback

  return (
    <MapContainer center={from || defaultCenter} zoom={6} style={{ flexGrow: 1 }}>
      <TileLayer
        attribution='&copy; OpenStreetMap contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      {from && <Marker position={from}><Popup>Start</Popup></Marker>}
      {to && <Marker position={to}><Popup>Destination</Popup></Marker>}
      {from && to && <Routing from={from} to={to} />}
    </MapContainer>
  );
};

export default Map;
