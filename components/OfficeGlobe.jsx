'use client';
import { useState, useEffect } from 'react';
import dynamic from 'next/dynamic'; // 1. Import dynamic from Next.js

// 2. Dynamically import Leaflet components and DISABLE server-side rendering (ssr: false)
const MapContainer = dynamic(() => import('react-leaflet').then(mod => mod.MapContainer), { ssr: false });
const TileLayer = dynamic(() => import('react-leaflet').then(mod => mod.TileLayer), { ssr: false });
const Marker = dynamic(() => import('react-leaflet').then(mod => mod.Marker), { ssr: false });
const Popup = dynamic(() => import('react-leaflet').then(mod => mod.Popup), { ssr: false });

// 3. Import CSS normally (this is safe)
import 'leaflet/dist/leaflet.css';

export default function OfficeGlobe() {
  const [Leaflet, setLeaflet] = useState(null);

  useEffect(() => {
    // 4. Import the 'leaflet' core library only inside useEffect (Browser only)
    (async () => {
      const L = (await import('leaflet')).default;
      setLeaflet(L);
    })();
  }, []);

  const locations = [
    { id: 1, name: "Headquarters (Colombo)", position: [6.9271, 79.8612] },
    { id: 2, name: "UK Office", position: [51.5074, -0.1278] },
    { id: 3, name: "Singapore Hub", position: [1.3521, 103.8198] },
  ];

  // 5. Create the icon ONLY when Leaflet is loaded
  const customIcon = Leaflet ? Leaflet.icon({
    iconUrl: "https://unpkg.com/leaflet@1.7.1/dist/images/marker-icon.png",
    iconRetinaUrl: "https://unpkg.com/leaflet@1.7.1/dist/images/marker-icon-2x.png",
    shadowUrl: "https://unpkg.com/leaflet@1.7.1/dist/images/marker-shadow.png",
    iconSize: [25, 41],
    iconAnchor: [12, 41],
    popupAnchor: [1, -34],
  }) : null;

  // 6. Return a placeholder until the map loads to prevent layout shift
  if (!Leaflet) {
    return (
      <div className="w-full flex flex-col items-center justify-center bg-white py-20">
         <div className="w-full h-[600px] bg-gray-100 rounded-xl animate-pulse flex items-center justify-center">
            <span className="text-gray-400">Loading Map...</span>
         </div>
      </div>
    );
  }

  return (
    <div className="w-full flex flex-col items-center justify-center bg-white py-20">
      <h2 className="text-brand-orange font-bold text-2xl mb-4">OUR LOCATIONS</h2>
      <p className="text-gray-500 mb-8">Global Reach, Local Presence.</p>
      
      <div className="w-full h-[600px] px-4 md:px-10 z-0">
        <MapContainer 
            center={[20, 0]} 
            zoom={2} 
            scrollWheelZoom={false} 
            className="w-full h-full rounded-xl shadow-lg z-0"
        >
          <TileLayer
            attribution='&copy; OpenStreetMap contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />
          
          {locations.map((loc) => (
            <Marker key={loc.id} position={loc.position} icon={customIcon}>
              <Popup>{loc.name}</Popup>
            </Marker>
          ))}
        </MapContainer>
      </div>
    </div>
  );
}