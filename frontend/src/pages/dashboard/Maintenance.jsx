function Maintenance() {
  const records = [
    {
      id: 1,
      vehicle: "DL01AB1234",
      service: "Oil Change",
      date: "15 Jul 2026",
      status: "Completed",
    },
    {
      id: 2,
      vehicle: "DL02CD5678",
      service: "Brake Check",
      date: "18 Jul 2026",
      status: "Pending",
    },
  ];

  return (
    <div style={{ padding: "20px" }}>
      <h1>Maintenance</h1>

      <table
        style={{
          width: "100%",
          borderCollapse: "collapse",
          marginTop: "20px",
        }}
      >
        <thead>
          <tr style={{ background: "#2563eb", color: "white" }}>
            <th style={{ padding: "10px" }}>Vehicle</th>
            <th>Service</th>
            <th>Date</th>
            <th>Status</th>
          </tr>
        </thead>

        <tbody>
          {records.map((record) => (
            <tr key={record.id} style={{ textAlign: "center" }}>
              <td style={{ padding: "10px" }}>{record.vehicle}</td>
              <td>{record.service}</td>
              <td>{record.date}</td>
              <td>{record.status}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Maintenance;