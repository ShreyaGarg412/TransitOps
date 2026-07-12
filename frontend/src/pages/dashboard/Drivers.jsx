import { useState } from "react";

function Drivers() {
  const [drivers, setDrivers] = useState([
    {
      id: 1,
      name: "Rahul Sharma",
      phone: "9876543210",
      license: "DL12345",
      status: "Available",
    },
    {
      id: 2,
      name: "Aman Kumar",
      phone: "9123456789",
      license: "DL67890",
      status: "On Trip",
    },
  ]);

  const [showForm, setShowForm] = useState(false);

  const [newDriver, setNewDriver] = useState({
    name: "",
    phone: "",
    license: "",
    status: "Available",
  });

  const handleChange = (e) => {
    setNewDriver({
      ...newDriver,
      [e.target.name]: e.target.value,
    });
  };

  const addDriver = () => {
    if (
      !newDriver.name ||
      !newDriver.phone ||
      !newDriver.license
    ) {
      alert("Please fill all fields");
      return;
    }

    setDrivers([
      ...drivers,
      {
        id: Date.now(),
        ...newDriver,
      },
    ]);

    setNewDriver({
      name: "",
      phone: "",
      license: "",
      status: "Available",
    });

    setShowForm(false);
  };

  const deleteDriver = (id) => {
    setDrivers(drivers.filter((driver) => driver.id !== id));
  };

  return (
    <div style={{ padding: "20px" }}>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          marginBottom: "20px",
        }}
      >
        <h1>Driver Management</h1>

        <button
          onClick={() => setShowForm(!showForm)}
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

      {showForm && (
        <div
          style={{
            background: "#f3f4f6",
            padding: "20px",
            borderRadius: "10px",
            marginBottom: "20px",
          }}
        >
          <input
            type="text"
            name="name"
            placeholder="Driver Name"
            value={newDriver.name}
            onChange={handleChange}
            style={{ margin: "10px", padding: "10px" }}
          />

          <input
            type="text"
            name="phone"
            placeholder="Phone Number"
            value={newDriver.phone}
            onChange={handleChange}
            style={{ margin: "10px", padding: "10px" }}
          />

          <input
            type="text"
            name="license"
            placeholder="License Number"
            value={newDriver.license}
            onChange={handleChange}
            style={{ margin: "10px", padding: "10px" }}
          />

          <select
            name="status"
            value={newDriver.status}
            onChange={handleChange}
            style={{ margin: "10px", padding: "10px" }}
          >
            <option>Available</option>
            <option>On Trip</option>
            <option>Leave</option>
          </select>

          <br />

          <button
            onClick={addDriver}
            style={{
              marginTop: "15px",
              background: "green",
              color: "white",
              border: "none",
              padding: "10px 20px",
              borderRadius: "6px",
              cursor: "pointer",
            }}
          >
            Save Driver
          </button>
        </div>
      )}

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
            <th>License</th>
            <th>Status</th>
            <th>Actions</th>
          </tr>
        </thead>

        <tbody>
          {drivers.map((driver) => (
            <tr key={driver.id} style={{ textAlign: "center" }}>
              <td style={{ padding: "12px" }}>{driver.name}</td>
              <td>{driver.phone}</td>
              <td>{driver.license}</td>
              <td>{driver.status}</td>

              <td>
                <button
                  style={{
                    background: "#f59e0b",
                    color: "white",
                    border: "none",
                    padding: "6px 12px",
                    borderRadius: "5px",
                    marginRight: "8px",
                    cursor: "pointer",
                  }}
                >
                  Edit
                </button>

                <button
                  onClick={() => deleteDriver(driver.id)}
                  style={{
                    background: "#dc2626",
                    color: "white",
                    border: "none",
                    padding: "6px 12px",
                    borderRadius: "5px",
                    cursor: "pointer",
                  }}
                >
                  Delete
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