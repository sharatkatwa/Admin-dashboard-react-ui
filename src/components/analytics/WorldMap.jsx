import { MoreHorizontal } from "lucide-react";
import Map, { Marker } from "react-map-gl/maplibre";
import "maplibre-gl/dist/maplibre-gl.css";

const markers = [
  { lng: -122.4, lat: 37.8 },
  { lng: -95.5, lat: 39.1 },
  { lng: -3.7, lat: 40.4 },
  { lng: 8.6, lat: 9.1 },
  { lng: 78.96, lat: 20.59 },
  { lng: 103.8, lat: 1.35 },
  { lng: 139.7, lat: 35.6 },
  { lng: 151.2, lat: -33.8 },
];



export default function WorldMap() {
  return (
    <div className="rounded-sm h-98 border border-white/5 bg-[#1B2635] p-4 text-white">
      <div className="mb-4 flex items-center justify-between">
        <h2 className="text-[12px] font-semibold text-[#a7b3c5]">Real-Time</h2>
        <button className="text-[#7f8ea2]">
          <MoreHorizontal size={15} />
        </button>
      </div>

      <div className="overflow-hidden rounded-sm border border-white/5">
        <Map
          initialViewState={{
            longitude: 18,
            latitude: 20,
            zoom: 0.8,
          }}
          style={{ width: "100%", height: 320 }}
          mapStyle="https://basemaps.cartocdn.com/gl/dark-matter-gl-style/style.json"
          attributionControl={false}
        >
          {markers.map((marker) => (
            <Marker key={`${marker.lng}-${marker.lat}`} longitude={marker.lng} latitude={marker.lat}>
              <div className="h-2.5 w-2.5 rounded-full bg-[#3b82f6] shadow-[0_0_0_5px_rgba(59,130,246,0.16)]" />
            </Marker>
          ))}
        </Map>
      </div>
    </div>
  );
}
