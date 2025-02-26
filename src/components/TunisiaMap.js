import { React, useEffect } from "react";
import {
  MapContainer,
  TileLayer,
  Polygon,
  Tooltip,
  useMap,
} from "react-leaflet";
import "leaflet/dist/leaflet.css";
import { tunisiaData } from "../data/tunisiaData";
import "./TunisiaMap.css";

const TunisiaBounds = () => {
  const map = useMap();

  useEffect(() => {
    const bounds = [];
    tunisiaData.features.forEach((feature) => {
      feature.geometry.coordinates.forEach((polygon) => {
        polygon[0].forEach(([lng, lat]) => {
          bounds.push([lat, lng]);
        });
      });
    });

    map.fitBounds(bounds);
  }, [map]);

  return null;
};

const center = [34.0, 9.0];

export default function TunisiaMap() {
  return (
    <MapContainer
      center={center}
      zoom={10}
      style={{ width: "400px", height: "500px" }}
    >
      <TileLayer
        url="https://api.maptiler.com/maps/basic-v2/256/{z}/{x}/{y}.png?key=O2OzrscKVfJBI8ZwtLeK"
        attribution='<a href="https://www.maptiler.com/copyright/" target="_blank">&copy; MapTiler</a> <a href="https://www.openstreetmap.org/copyright" target="_blank">&copy; OpenStreetMap contributors</a>'
      />
      {tunisiaData.features.map((state, index) => {
        const { type, coordinates } = state.geometry;
        const { gouv_fr, del_fr, del_ar } = state.properties;

        const positions =
          type === "MultiPolygon"
            ? coordinates.map((polygon) =>
                polygon[0].map((point) => [point[1], point[0]])
              )
            : [coordinates[0].map((point) => [point[1], point[0]])];

        return (
          <Polygon
            key={index}
            pathOptions={{
              fillColor: "#FDBD3C",
              fillOpacity: 0.7,
              weight: 2,
              opacity: 1,
              dashArray: 3,
              color: "white",
            }}
            positions={positions}
            eventHandlers={{
              mouseover: (e) => {
                e.target.setStyle({
                  fillOpacity: 5,
                  weight: 5,
                  color: "yellow",
                });
              },
              mouseout: (e) => {
                e.target.setStyle({
                  fillColor: "#FDBD3C",
                  fillOpacity: 0.7,
                  weight: 2,
                  opacity: 1,
                  dashArray: 3,
                  color: "white",
                });
              },
              click: (e) => {
                console.log(`Clicked on: ${del_ar}`);

                // Reset style after click to remove black border
                setTimeout(() => {
                  e.target.setStyle({
                    fillOpacity: 5,
                    weight: 5,
                    color: "yellow",
                  });
                }, 1000);
              },
            }}
          >
            <Tooltip sticky>{`${del_fr} (${gouv_fr})`}</Tooltip>
          </Polygon>
        );
      })}

      <TunisiaBounds />
    </MapContainer>
  );
}
