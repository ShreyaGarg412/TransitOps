import { useState } from "react";

function Drivers() {
  const [drivers] = useState([
    {
      name: "Rahul Sharma",
      phone: "9876543210",
      license: "DL123456",
      status: "Available",
    },
    {
      name: "Amit Kumar",
      phone: "9123456780",
      license: "DL654321",
      status: "On Trip",
    },
  ]);

  return (
    <div style={{ padding: "30px" }}>
      <h1>Driver Management</h1>

      <button
        style={{
          margin: "20px 0",
          padding: "10px 20px",
          background: "#16a34a",
          color: "white",
          border: "none",
          borderRadius: "6px",
          cursor: "pointer",
        }}
      >
        + Add Driver
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
        <thead style={{ background: "#16a34a", color: "white" }}>
          <tr>
            <th>Name</th>
            <th>Phone</th>
            <th>License No.</th>
            <th>Status</th>
          </tr>
        </thead>

        <tbody>
          {drivers.map((driver, index) => (
            <tr key={index}>
              <td>{driver.name}</td>
              <td>{driver.phone}</td>
              <td>{driver.license}</td>
              <td>{driver.status}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Drivers;