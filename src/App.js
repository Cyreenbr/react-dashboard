import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Sidebar from "./components/Sidebar";
import Dashboard from "./pages/Dashboard";
import TunisiaMapPage from "./pages/TunisiaMapPage";

const App = () => {
  return (
    <Router>
      <div className="flex">
        <Sidebar />
        <div className="flex-1 p-4">
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/tunisia-map" element={<TunisiaMapPage />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
};

export default App;
