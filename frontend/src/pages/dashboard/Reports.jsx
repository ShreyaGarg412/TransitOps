function Reports() {
  return (
    <div style={{ padding: "20px" }}>
      <h1>Reports</h1>

      <div
        style={{
          display: "flex",
          gap: "20px",
          marginTop: "30px",
        }}
      >
        <div
          style={{
            background: "#2563eb",
            color: "white",
            padding: "20px",
            borderRadius: "10px",
            width: "220px",
          }}
        >
          <h3>Total Trips</h3>
          <h1>120</h1>
        </div>

        <div
          style={{
            background: "#16a34a",
            color: "white",
            padding: "20px",
            borderRadius: "10px",
            width: "220px",
          }}
        >
          <h3>Total Revenue</h3>
          <h1>₹4.8L</h1>
        </div>

        <div
          style={{
            background: "#dc2626",
            color: "white",
            padding: "20px",
            borderRadius: "10px",
            width: "220px",
          }}
        >
          <h3>Total Expenses</h3>
          <h1>₹1.2L</h1>
        </div>
      </div>
    </div>
  );
}

export default Reports;