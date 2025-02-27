import React from "react";
import { Bar } from "react-chartjs-2";
import {
  Chart,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";

// Enregistrer les composants nécessaires dans Chart.js
Chart.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

const RainfallBarChart = ({ data }) => {
  const chartData = {
    labels: data.map((entry) => entry.Date), // Utiliser les noms des stations
    datasets: [
      {
        label: "Pluie du jour (mm)",
        data: data.map((entry) => entry.Pluvio_du_jour), // Quantités de pluie
        backgroundColor: "rgba(75, 192, 192, 0.6)", // Couleur des barres
        borderColor: "rgba(75, 192, 192, 1)",
        borderWidth: 1,
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: { position: "top" },
      title: { display: true, text: "Quantité de pluie par station" },
    },
  };

  return <Bar data={chartData} options={options} />;
};

export default RainfallBarChart;
