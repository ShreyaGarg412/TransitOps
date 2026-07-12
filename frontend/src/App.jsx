import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";

import Sidebar from "./components/Sidebar";

import Login from "./pages/Login/Login";
import Dashboard from "./pages/dashboard/Dashboard";
import Vehicles from "./pages/dashboard/Vehicles";
import Drivers from "./pages/dashboard/Drivers";
import Trips from "./pages/dashboard/Trips";
import Expenses from "./pages/dashboard/Expenses";
import Maintenance from "./pages/dashboard/Maintenance";
import Reports from "./pages/dashboard/Reports";

function Layout() {
  const location = useLocation();

  const showSidebar = location.pathname !== "/";

  return (
    <div style={{ display: "flex" }}>
      {showSidebar && <Sidebar />}

      <div style={{ flex: 1, padding: showSidebar ? "20px" : "0px" }}>
        <Routes>
          <Route path="/" element={<Login />} />

          <Route path="/dashboard" element={<Dashboard />} />

          <Route path="/vehicles" element={<Vehicles />} />

          <Route path="/drivers" element={<Drivers />} />

          <Route path="/trips" element={<Trips />} />

          <Route path="/expenses" element={<Expenses />} />

          <Route path="/maintenance" element={<Maintenance />} />

          <Route path="/reports" element={<Reports />} />
        </Routes>
      </div>
    </div>
  );
}

function App() {
  return (
    <BrowserRouter>
      <Layout />
    </BrowserRouter>
  );
}

export default App;