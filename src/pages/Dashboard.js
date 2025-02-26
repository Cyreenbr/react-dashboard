import React from "react";
import { Bar, Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  LineElement,
  PointElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  LineElement,
  PointElement,
  Title,
  Tooltip,
  Legend
);

const Dashboard = () => {
  const dataBar = {
    labels: ["Jan", "Feb", "Mar", "Apr", "May"],
    datasets: [
      {
        label: "Sales",
        data: [30, 50, 80, 20, 60],
        backgroundColor: "rgba(75, 192, 192, 0.6)",
      },
    ],
  };

  const dataLine = {
    labels: ["Jan", "Feb", "Mar", "Apr", "May"],
    datasets: [
      {
        label: "Revenue",
        data: [100, 200, 150, 300, 250],
        borderColor: "#42A5F5",
        fill: false,
      },
    ],
  };

  return (
    <div className="p-4">
      <h2 className="text-xl font-bold">Dashboard</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
        <div className="p-4 bg-white shadow rounded">
          <h3 className="text-lg font-semibold">Sales Overview</h3>
          <Bar data={dataBar} />
        </div>
        <div className="p-4 bg-white shadow rounded">
          <h3 className="text-lg font-semibold">Revenue Growth</h3>
          <Line data={dataLine} />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
