import React from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import { temples } from '../data/temples';
import L from 'leaflet';

// Fix for default marker icons in React-Leaflet
delete (L.Icon.Default.prototype as any)._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon-2x.png',
  iconUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon.png',
  shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-shadow.png',
});

// Temple coordinates
const templeCoordinates = {
  "Amritsar, Punjab": [31.6200, 74.8765],
  "Madurai, Tamil Nadu": [9.9252, 78.1198],
  "Kedarnath, Uttarakhand": [30.7346, 79.0669],
  "Puri, Odisha": [19.8135, 85.8312],
  "Tirupati, Andhra Pradesh": [13.6288, 79.4192],
  "Katra, Jammu & Kashmir": [32.9916, 74.9320],
  "Mumbai, Maharashtra": [18.9647, 72.8369],
  "Varanasi, Uttar Pradesh": [25.3176, 82.9739]
};

export function Map() {
  const center: [number, number] = [20.5937, 78.9629]; // Center of India

  return (
    <div className="h-[600px] w-full rounded-lg overflow-hidden shadow-lg">
      <MapContainer
        center={center}
        zoom={5}
        style={{ height: '100%', width: '100%' }}
      >
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        />
        {temples.map((temple) => {
          const coords = templeCoordinates[temple.location as keyof typeof templeCoordinates];
          if (coords) {
            return (
              <Marker key={temple.id} position={coords as [number, number]}>
                <Popup>
                  <div className="p-2">
                    <h3 className="font-semibold">{temple.name}</h3>
                    <p className="text-sm text-gray-600">{temple.location}</p>
                    <p className="text-sm mt-1">{temple.description}</p>
                  </div>
                </Popup>
              </Marker>
            );
          }
          return null;
        })}
      </MapContainer>
    </div>
  );
}