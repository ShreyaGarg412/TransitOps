import { useState } from "react";

function Vehicles() {
  const [vehicles, setVehicles] = useState([
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
  ]);

  const [showForm, setShowForm] = useState(false);

  const [newVehicle, setNewVehicle] = useState({
    number: "",
    driver: "",
    type: "",
    status: "Available",
  });

  const handleChange = (e) => {
    setNewVehicle({
      ...newVehicle,
      [e.target.name]: e.target.value,
    });
  };

  const addVehicle = () => {
    if (
      !newVehicle.number ||
      !newVehicle.driver ||
      !newVehicle.type
    ) {
      alert("Please fill all fields");
      return;
    }

    setVehicles([
      ...vehicles,
      {
        id: Date.now(),
        ...newVehicle,
      },
    ]);

    setNewVehicle({
      number: "",
      driver: "",
      type: "",
      status: "Available",
    });

    setShowForm(false);
  };

  const deleteVehicle = (id) => {
    setVehicles(vehicles.filter((vehicle) => vehicle.id !== id));
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
        <h1>Vehicle Management</h1>

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
          + Add Vehicle
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
            name="number"
            placeholder="Vehicle Number"
            value={newVehicle.number}
            onChange={handleChange}
            style={{ margin: "10px", padding: "10px" }}
          />

          <input
            type="text"
            name="driver"
            placeholder="Driver Name"
            value={newVehicle.driver}
            onChange={handleChange}
            style={{ margin: "10px", padding: "10px" }}
          />

          <input
            type="text"
            name="type"
            placeholder="Vehicle Type"
            value={newVehicle.type}
            onChange={handleChange}
            style={{ margin: "10px", padding: "10px" }}
          />

          <select
            name="status"
            value={newVehicle.status}
            onChange={handleChange}
            style={{ margin: "10px", padding: "10px" }}
          >
            <option>Available</option>
            <option>On Trip</option>
            <option>Maintenance</option>
          </select>

          <br />

          <button
            onClick={addVehicle}
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
            Save Vehicle
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
            <th style={{ padding: "12px" }}>Vehicle No</th>
            <th>Driver</th>
            <th>Type</th>
            <th>Status</th>
            <th>Actions</th>
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
                  onClick={() => deleteVehicle(vehicle.id)}
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

export default Vehicles;
