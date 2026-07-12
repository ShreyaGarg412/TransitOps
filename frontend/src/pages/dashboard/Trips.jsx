import { useState } from "react";

function Trips() {
  const [trips] = useState([
    {
      id: "TR001",
      vehicle: "DL01AB1234",
      driver: "Rahul Sharma",
      route: "Delhi → Gurgaon",
      status: "Completed",
    },
    {
      id: "TR002",
      vehicle: "DL05XY5678",
      driver: "Amit Kumar",
      route: "Delhi → Noida",
      status: "Running",
    },
  ]);

  return (
    <div style={{ padding: "30px" }}>
      <h1>Trip Management</h1>

      <button
        style={{
          margin: "20px 0",
          padding: "10px 20px",
          background: "#f59e0b",
          color: "white",
          border: "none",
          borderRadius: "6px",
          cursor: "pointer",
        }}
      >
        + Add Trip
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
        <thead style={{ background: "#f59e0b", color: "white" }}>
          <tr>
            <th>Trip ID</th>
            <th>Vehicle</th>
            <th>Driver</th>
            <th>Route</th>
            <th>Status</th>
          </tr>
        </thead>

        <tbody>
          {trips.map((trip, index) => (
            <tr key={index}>
              <td>{trip.id}</td>
              <td>{trip.vehicle}</td>
              <td>{trip.driver}</td>
              <td>{trip.route}</td>
              <td>{trip.status}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Trips;