'use client';
import { MapContainer, TileLayer, Marker, useMap } from 'react-leaflet';
import { useEffect } from 'react';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';

// Create a custom icon instance instead of hacking the default prototype
const customIcon = L.icon({
  iconUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon.png',
  iconSize: [25, 41],
  iconAnchor: [12, 41],
  popupAnchor: [1, -34],
  shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-shadow.png',
  shadowSize: [41, 41],
});

function MapResizer({ center }: { center: [number, number] }) {
  const map = useMap();
  useEffect(() => {
    setTimeout(() => {
      map.invalidateSize();
      map.setView(center, 16);
    }, 100);
  }, [center, map]);
  return null;
}

export default function ShopMap() {
  const position: [number, number] = [14.6079, 120.9914];
  
  return (
    <MapContainer center={position} zoom={16} className="h-full w-full rounded-2xl">
    <TileLayer 
    // This URL pattern uses Google's map tiles
    url="https://mt1.google.com/vt/lyrs=m&x={x}&y={y}&z={z}"
    attribution='&copy; <a href="https://www.google.com/maps">Google Maps</a>'
    />
      <MapResizer center={position} />
      {/* Use the customIcon variable here */}
      <Marker position={position} icon={customIcon} />
    </MapContainer>
  );
}