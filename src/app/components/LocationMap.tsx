"use client";

import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";

export default function LocationMap() {
  return (
    <section className="text-center py-8 px-4 sm:px-8 md:px-16 bg-blue-100">
      <h2 className="text-lg sm:text-xl md:text-2xl font-bold mb-4">NOSSA LOCALIZAÇÃO</h2>

      <div className="w-full max-w-md sm:max-w-lg md:max-w-3xl mx-auto h-64 sm:h-72 md:h-80 rounded-lg overflow-hidden shadow-lg">
        <MapContainer
          center={[-8.839987, 13.289437]} // Coordenadas de Luanda (substitua conforme necessário)
          zoom={13}
          style={{ height: "100%", width: "100%" }}
        >
          <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
          <Marker position={[-8.839987, 13.289437]}>
            <Popup>Aqui fica nossa localização.</Popup>
          </Marker>
        </MapContainer>
      </div>
    </section>
  );
}
