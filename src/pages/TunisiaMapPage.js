import React from "react";
import TunisiaMap from "../components/TunisiaMap";

const TunisiaMapPage = () => {
  return (
    <div className="p-4">
      <h2 className="text-xl font-bold">Interactive Tunisia Map</h2>
      <TunisiaMap />
      <div className="p-4 bg-white shadow rounded h-64 flex items-center justify-center"></div>
    </div>
  );
};

export default TunisiaMapPage;
