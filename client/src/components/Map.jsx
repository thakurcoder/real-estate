import React from 'react';
import { MapContainer, Marker, Popup, TileLayer } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';

// Fix the default icon issue with leaflet
// delete L.Icon.Default.prototype._getIconUrl;
// L.Icon.Default.mergeOptions({
//   iconRetinaUrl: require('leaflet/dist/images/marker-icon-2x.png').default,
//   iconUrl: require('leaflet/dist/images/marker-icon.png').default,
//   shadowUrl: require('leaflet/dist/images/marker-shadow.png').default,
// });

function Map({items}) {
  const position = [51.505, -0.09];

  return (
    <div className='w-full h-full'>
      <MapContainer center={position} zoom={13} scrollWheelZoom={false} className='w-full h-full' >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        {items.map((e)=>{
            return <Marker position={[e.latitude,e.longitude]}>
          <Popup>
           {e.address}
          </Popup>
        </Marker>
    })}
      </MapContainer>
    </div>
  );
}

export default Map;
