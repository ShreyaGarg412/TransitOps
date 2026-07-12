function Vehicles() {
  const vehicles = [
    {
      id: 1,
      number: "DL01AB1234",
      driver: "Rahul",
      type: "Bus",
      status: "Available",
    },
    {
      id: 2,
      number: "DL02CD5678",
      driver: "Aman",
      type: "Van",
      status: "On Trip",
    },
    {
      id: 3,
      number: "DL03EF9012",
      driver: "Karan",
      type: "Truck",
      status: "Maintenance",
    },
  ];

  return (
    <div style={{ padding: "20px" }}>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          marginBottom: "20px",
        }}
      >
        <h1>Vehicles</h1>

        <button
          style={{
            background: "#2563eb",
            color: "white",
            border: "none",
            padding: "10px 20px",
            borderRadius: "6px",
            cursor: "pointer",
          }}
        >
          + Add Vehicle
        </button>
      </div>

      <input
        type="text"
        placeholder="Search Vehicle..."
        style={{
          width: "300px",
          padding: "10px",
          marginBottom: "20px",
          borderRadius: "6px",
          border: "1px solid #ccc",
        }}
      />

      <table
        style={{
          width: "100%",
          borderCollapse: "collapse",
          background: "white",
        }}
      >
        <thead>
          <tr style={{ background: "#2563eb", color: "white" }}>
            <th style={{ padding: "12px" }}>Vehicle No</th>
            <th>Driver</th>
            <th>Type</th>
            <th>Status</th>
            <th>Action</th>
          </tr>
        </thead>

        <tbody>
          {vehicles.map((vehicle) => (
            <tr key={vehicle.id} style={{ textAlign: "center" }}>
              <td style={{ padding: "12px" }}>{vehicle.number}</td>
              <td>{vehicle.driver}</td>
              <td>{vehicle.type}</td>
              <td>{vehicle.status}</td>
              <td>
                <button
                  style={{
                    background: "#22c55e",
                    color: "white",
                    border: "none",
                    padding: "6px 12px",
                    borderRadius: "5px",
                    cursor: "pointer",
                  }}
                >
                  Edit
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Vehicles;