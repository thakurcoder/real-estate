import React from 'react';
import { MapContainer, Marker, Popup, TileLayer } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';

function Map({ items }) {
  const position = [items[0].latitude, items[0].longitude];
  console.log("item",items)
  return (
    <div className='w-full h-full'>
      <MapContainer center={position} zoom={13} scrollWheelZoom={false} className='w-full h-full'>
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        {items.map((e, i) => (
          <Marker key={i} position={[e.latitude, e.longitude]}>
            <Popup>{e.address}</Popup>
          </Marker>
        ))}
      </MapContainer>
    </div>
  );
}

export default Map;
