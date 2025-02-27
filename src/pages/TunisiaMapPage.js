import React, { useState, useEffect } from "react";
import TunisiaMap from "../components/TunisiaMap";
import RainfallBarChart from "../components/RainfallBarChart";
import Papa from "papaparse";

const TunisiaMapPage = () => {
  const [rainfallData, setRainfallData] = useState([]);
  const [selectedZone, setSelectedZone] = useState(null);
  const [filteredData, setFilteredData] = useState([]);

  useEffect(() => {
    fetch("/data/pluviometrie.csv") // Remplace par le bon chemin du fichier CSV
      .then((response) => response.text())
      .then((csvText) => {
        Papa.parse(csvText, {
          header: true,
          delimiter: ",",
          encoding: "UTF-8",
          complete: (result) => {
            setRainfallData(result.data);
            console.log("data csv ", result.data);
          },
        });
      })
      .catch((error) => console.error("Error fetching CSV:", error));
  }, []);

  useEffect(() => {
    if (selectedZone) {
      console.log("rainFallData", rainfallData);
      const dataFiltered = rainfallData.filter(
        (entry) =>
          entry.station &&
          selectedZone &&
          entry.station.trim() === selectedZone.trim()
      );
      setFilteredData(dataFiltered);
    }
  }, [selectedZone, rainfallData]);

  return (
    <div className="p-4">
      <h2 className="text-xl font-bold">Interactive Tunisia Map</h2>
      <TunisiaMap onZoneClick={setSelectedZone} />
      <div>
        <h1>Graphique des précipitations</h1>
        {filteredData.length > 0 ? (
          <RainfallBarChart data={filteredData} />
        ) : (
          <p>
            {selectedZone
              ? "Aucune donnée pour cette station."
              : "Cliquez sur une zone pour voir les précipitations."}
          </p>
        )}
      </div>
      <div className="p-4 bg-white shadow rounded h-64 flex items-center justify-center"></div>
    </div>
  );
};

export default TunisiaMapPage;
