import Map, { Marker, NavigationControl } from "react-map-gl/maplibre";
import "maplibre-gl/dist/maplibre-gl.css";

const markers = [
  { lng: -122.4194, lat: 37.7749 },
  { lng: -112.074, lat: 33.4484 },
  { lng: -96.797, lat: 32.7767 },
  { lng: -94.5786, lat: 39.0997 },
  { lng: -74.006, lat: 40.7128 },
];

export default function SalesByState() {
  return (
    <div className="rounded-sm border border-white/5 bg-[#1B2635] p-4">
      <div className="mb-3 flex items-center justify-between">
        <h2 className="text-[12px] font-semibold text-[#a7b3c5]">Sales by State</h2>
        <div className="hidden items-center gap-2 md:flex">
          <button className="rounded-sm border border-white/5 bg-[#1f2a39] px-2.5 py-1.5 text-[10px] text-[#94a1b5]">
            Jan
          </button>
          <div className="rounded-sm border border-white/5 bg-[#1f2a39] px-2.5 py-1.5 text-[10px] text-[#6f7e93]">
            Search...
          </div>
        </div>
      </div>

      <div className="overflow-hidden rounded-sm bg-[#253241]">
        <Map
          initialViewState={{
            longitude: -98.5795,
            latitude: 39.8283,
            zoom: 2.6,
          }}
          style={{ width: "100%", height: 220 }}
          mapStyle="https://basemaps.cartocdn.com/gl/dark-matter-gl-style/style.json"
          attributionControl={false}
          dragRotate={false}
        >
          <NavigationControl
            position="top-left"
            showCompass={false}
            visualizePitch={false}
          />

          {markers.map((marker) => (
            <Marker
              key={`${marker.lng}-${marker.lat}`}
              longitude={marker.lng}
              latitude={marker.lat}
            >
              <div className="h-3 w-3 rounded-full bg-[#3b82f6] shadow-[0_0_0_5px_rgba(59,130,246,0.16)]" />
            </Marker>
          ))}
        </Map>
      </div>
    </div>
  );
}
