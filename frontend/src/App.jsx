import { BrowserRouter, Routes, Route } from "react-router-dom";

import Sidebar from "./components/Sidebar";

import Dashboard from "./pages/dashboard/Dashboard";
import Vehicles from "./pages/dashboard/Vehicles";
import Drivers from "./pages/dashboard/Drivers";
import Trips from "./pages/dashboard/Trips";
import Expenses from "./pages/dashboard/Expenses";
import Maintenance from "./pages/dashboard/Maintenance";
import Reports from "./pages/dashboard/Reports";

function App() {
  return (
    <BrowserRouter>
      <div style={{ display: "flex", minHeight: "100vh" }}>
        <Sidebar />

        <div style={{ flex: 1 }}>
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/vehicles" element={<Vehicles />} />
            <Route path="/drivers" element={<Drivers />} />
            <Route path="/trips" element={<Trips />} />
            <Route path="/expenses" element={<Expenses />} />
            <Route path="/maintenance" element={<Maintenance />} />
            <Route path="/reports" element={<Reports />} />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;