"use client";

import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";

export default function LocationMap() {
  return (
    <section className="text-center py-12 px-6 sm:px-12 md:px-20 bg-gradient-to-r from-blue-200 to-blue-100">
      <h2 className="text-3xl font-extrabold text-gray-900 tracking-wide">
        NOSSA <span className="text-blue-500">LOCALIZAÇÃO</span>
      </h2>
      <p className="mt-2 text-lg text-gray-700">Visite-nos na Ilha de Luanda, Angola.</p>

      <div className="w-full max-w-md sm:max-w-lg md:max-w-3xl mx-auto mt-6 h-64 sm:h-72 md:h-80 rounded-lg overflow-hidden shadow-xl border-4 border-blue-300">
        <MapContainer
          center={[-8.7762, 13.2205]} 
          zoom={14}
          style={{ height: "100%", width: "100%" }}
        >
          <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
          <Marker position={[-8.7762, 13.2205]}>
            <Popup>Estamos localizados na Ilha de Luanda, Angola.</Popup>
          </Marker>
        </MapContainer>
      </div>
    </section>
  );
}
