function Drivers() {
  const drivers = [
    {
      id: 1,
      name: "Rahul Sharma",
      phone: "9876543210",
      vehicle: "DL01AB1234",
      status: "Available",
    },
    {
      id: 2,
      name: "Aman Kumar",
      phone: "9123456780",
      vehicle: "DL02CD5678",
      status: "On Trip",
    },
    {
      id: 3,
      name: "Karan Singh",
      phone: "9988776655",
      vehicle: "DL03EF9012",
      status: "Off Duty",
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
        <h1>Drivers</h1>

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
          + Add Driver
        </button>
      </div>

      <input
        type="text"
        placeholder="Search Driver..."
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
            <th style={{ padding: "12px" }}>Name</th>
            <th>Phone</th>
            <th>Vehicle</th>
            <th>Status</th>
            <th>Action</th>
          </tr>
        </thead>

        <tbody>
          {drivers.map((driver) => (
            <tr key={driver.id} style={{ textAlign: "center" }}>
              <td style={{ padding: "12px" }}>{driver.name}</td>
              <td>{driver.phone}</td>
              <td>{driver.vehicle}</td>
              <td>{driver.status}</td>
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

export default Drivers;