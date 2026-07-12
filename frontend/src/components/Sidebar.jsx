import { NavLink } from "react-router-dom";

function Sidebar() {
  return (
    <div
      style={{
        width: "220px",
        minHeight: "100vh",
        backgroundColor: "#1e3a8a",
        padding: "20px",
        boxSizing: "border-box",
      }}
    >
      <h2
        style={{
          color: "white",
          marginBottom: "30px",
          textAlign: "center",
        }}
      >
        🚍 TransitOps
      </h2>

      <NavLink to="/" end style={linkStyle}>
        🏠 Dashboard
      </NavLink>

      <NavLink to="/vehicles" style={linkStyle}>
        🚗 Vehicles
      </NavLink>

      <NavLink to="/drivers" style={linkStyle}>
        👨‍✈️ Drivers
      </NavLink>

      <NavLink to="/trips" style={linkStyle}>
        🚌 Trips
      </NavLink>

      <NavLink to="/expenses" style={linkStyle}>
        💰 Expenses
      </NavLink>

      <NavLink to="/maintenance" style={linkStyle}>
        🛠️ Maintenance
      </NavLink>

      <NavLink to="/reports" style={linkStyle}>
        📊 Reports
      </NavLink>
    </div>
  );
}

const linkStyle = ({ isActive }) => ({
  display: "block",
  padding: "12px 15px",
  marginBottom: "10px",
  borderRadius: "8px",
  textDecoration: "none",
  color: "white", // Always white text
  backgroundColor: isActive ? "#22c55e" : "transparent", // Green active menu
  fontWeight: isActive ? "bold" : "500",
  transition: "0.3s",
});

export default Sidebar;