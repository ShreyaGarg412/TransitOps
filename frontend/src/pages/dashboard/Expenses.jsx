function Expenses() {
  const expenses = [
    {
      id: 1,
      date: "12 Jul 2026",
      vehicle: "DL01AB1234",
      type: "Fuel",
      amount: "₹5,000",
    },
    {
      id: 2,
      date: "10 Jul 2026",
      vehicle: "DL02CD5678",
      type: "Repair",
      amount: "₹8,500",
    },
    {
      id: 3,
      date: "08 Jul 2026",
      vehicle: "DL03EF9012",
      type: "Service",
      amount: "₹3,200",
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
        <h1>Expenses</h1>

        <button
          style={{
            background: "#2563eb",
            color: "white",
            border: "none",
            padding: "10px 20px",
            borderRadius: "6px",
          }}
        >
          + Add Expense
        </button>
      </div>

      <table style={{ width: "100%", borderCollapse: "collapse" }}>
        <thead>
          <tr style={{ background: "#2563eb", color: "white" }}>
            <th style={{ padding: "10px" }}>Date</th>
            <th>Vehicle</th>
            <th>Type</th>
            <th>Amount</th>
          </tr>
        </thead>

        <tbody>
          {expenses.map((expense) => (
            <tr key={expense.id} style={{ textAlign: "center" }}>
              <td style={{ padding: "10px" }}>{expense.date}</td>
              <td>{expense.vehicle}</td>
              <td>{expense.type}</td>
              <td>{expense.amount}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Expenses;