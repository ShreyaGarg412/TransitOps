function Expenses() {
  return (
    <div style={{ padding: "30px" }}>
      <h1>Expense Management</h1>

      <table
        border="1"
        cellPadding="10"
        style={{
          width: "100%",
          marginTop: "20px",
          borderCollapse: "collapse",
        }}
      >
        <thead style={{ background: "#dc2626", color: "white" }}>
          <tr>
            <th>Date</th>
            <th>Vehicle</th>
            <th>Expense Type</th>
            <th>Amount</th>
          </tr>
        </thead>

        <tbody>
          <tr>
            <td>12-Jul-2026</td>
            <td>DL01AB1234</td>
            <td>Fuel</td>
            <td>₹5,000</td>
          </tr>

          <tr>
            <td>10-Jul-2026</td>
            <td>DL05XY5678</td>
            <td>Tyre Repair</td>
            <td>₹2,500</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default Expenses;