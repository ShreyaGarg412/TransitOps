import { useState } from "react";

function Vehicles() {
  const [vehicles, setVehicles] = useState([
    {
      number: "DL01AB1234",
      model: "Tata Bus",
      driver: "Rahul",
      status: "Available",
    },
    {
      number: "DL05XY5678",
      model: "Ashok Leyland",
      driver: "Amit",
      status: "On Trip",
    },
  ]);

  const addVehicle = () => {
    const newVehicle = {
      number: "DL09ZZ9999",
      model: "Volvo Bus",
      driver: "New Driver",
      status: "Available",
    };

    setVehicles([...vehicles, newVehicle]);
  };

  return (
    <div style={{ padding: "30px" }}>
      <h1>Vehicle Management</h1>

      <button
        onClick={addVehicle}
        style={{
          margin: "20px 0",
          padding: "10px 20px",
          background: "#2563eb",
          color: "white",
          border: "none",
          borderRadius: "6px",
          cursor: "pointer",
        }}
      >
        + Add Vehicle
      </button>

      <table
        border="1"
        cellPadding="10"
        style={{
          width: "100%",
          borderCollapse: "collapse",
          background: "white",
        }}
      >
        <thead style={{ background: "#2563eb", color: "white" }}>
          <tr>
            <th>Vehicle No</th>
            <th>Model</th>
            <th>Driver</th>
            <th>Status</th>
          </tr>
        </thead>

        <tbody>
          {vehicles.map((vehicle, index) => (
            <tr key={index}>
              <td>{vehicle.number}</td>
              <td>{vehicle.model}</td>
              <td>{vehicle.driver}</td>
              <td>{vehicle.status}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Vehicles;