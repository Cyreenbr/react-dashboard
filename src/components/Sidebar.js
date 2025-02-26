import React from "react";
import { Link } from "react-router-dom";

const Sidebar = () => {
  return (
    <div className="w-64 bg-gray-800 text-white h-screen p-4">
      <h1 className="text-2xl font-bold">Dashboard</h1>
      <ul className="mt-4">
        <li className="p-2 hover:bg-gray-700 rounded">
          <Link to="/">Dashboard</Link>
        </li>
        <li className="p-2 hover:bg-gray-700 rounded">
          <Link to="/tunisia-map">Tunisia Map</Link>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
