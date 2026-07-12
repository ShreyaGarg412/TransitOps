function Trips() {
  const trips = [
    {
      id: 1,
      route: "Delhi → Jaipur",
      vehicle: "DL01AB1234",
      driver: "Rahul Sharma",
      status: "Completed",
    },
    {
      id: 2,
      route: "Delhi → Chandigarh",
      vehicle: "DL02CD5678",
      driver: "Aman Kumar",
      status: "Ongoing",
    },
    {
      id: 3,
      route: "Delhi → Agra",
      vehicle: "DL03EF9012",
      driver: "Karan Singh",
      status: "Scheduled",
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
        <h1>Trips</h1>

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
          + Add Trip
        </button>
      </div>

      <input
        type="text"
        placeholder="Search Trips..."
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
            <th style={{ padding: "12px" }}>Route</th>
            <th>Vehicle</th>
            <th>Driver</th>
            <th>Status</th>
          </tr>
        </thead>

        <tbody>
          {trips.map((trip) => (
            <tr key={trip.id} style={{ textAlign: "center" }}>
              <td style={{ padding: "12px" }}>{trip.route}</td>
              <td>{trip.vehicle}</td>
              <td>{trip.driver}</td>
              <td>{trip.status}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Trips;