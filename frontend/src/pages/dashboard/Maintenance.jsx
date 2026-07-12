function Maintenance() {
  return (
    <div style={{ padding: "30px" }}>
      <h1>Maintenance Records</h1>

      <table
        border="1"
        cellPadding="10"
        style={{
          width: "100%",
          marginTop: "20px",
          borderCollapse: "collapse",
        }}
      >
        <thead style={{ background: "#16a34a", color: "white" }}>
          <tr>
            <th>Vehicle</th>
            <th>Service Date</th>
            <th>Next Service</th>
            <th>Status</th>
          </tr>
        </thead>

        <tbody>
          <tr>
            <td>DL01AB1234</td>
            <td>05-Jul-2026</td>
            <td>05-Aug-2026</td>
            <td>Completed</td>
          </tr>

          <tr>
            <td>DL05XY5678</td>
            <td>08-Jul-2026</td>
            <td>08-Aug-2026</td>
            <td>Pending</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default Maintenance;