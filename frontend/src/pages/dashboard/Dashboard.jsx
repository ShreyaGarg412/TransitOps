import Navbar from "../../components/Navbar";

function Dashboard() {
  return (
    <div style={{ flex: 1, background: "#f4f7fc", minHeight: "100vh" }}>
      <Navbar />

      <div style={{ padding: "30px" }}>
        <h1>Welcome Back 👋</h1>

        <div
          style={{
            display: "flex",
            gap: "20px",
            flexWrap: "wrap",
            marginTop: "25px",
          }}
        >
          <div
            style={{
              background: "#2563eb",
              color: "white",
              width: "220px",
              padding: "20px",
              borderRadius: "10px",
            }}
          >
            <h3>Total Vehicles</h3>
            <h1>24</h1>
          </div>

          <div
            style={{
              background: "#16a34a",
              color: "white",
              width: "220px",
              padding: "20px",
              borderRadius: "10px",
            }}
          >
            <h3>Drivers</h3>
            <h1>18</h1>
          </div>

          <div
            style={{
              background: "#f59e0b",
              color: "white",
              width: "220px",
              padding: "20px",
              borderRadius: "10px",
            }}
          >
            <h3>Trips</h3>
            <h1>120</h1>
          </div>

          <div
            style={{
              background: "#dc2626",
              color: "white",
              width: "220px",
              padding: "20px",
              borderRadius: "10px",
            }}
          >
            <h3>Expenses</h3>
            <h1>₹45,000</h1>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;