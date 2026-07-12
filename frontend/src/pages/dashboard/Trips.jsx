import { useState } from "react";

function Trips() {
  const [trips, setTrips] = useState([
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
  ]);

  const [showForm, setShowForm] = useState(false);

  const [newTrip, setNewTrip] = useState({
    route: "",
    vehicle: "",
    driver: "",
    status: "Scheduled",
  });

  const handleChange = (e) => {
    setNewTrip({
      ...newTrip,
      [e.target.name]: e.target.value,
    });
  };

  const addTrip = () => {
    if (
      !newTrip.route ||
      !newTrip.vehicle ||
      !newTrip.driver
    ) {
      alert("Please fill all fields");
      return;
    }

    setTrips([
      ...trips,
      {
        id: Date.now(),
        ...newTrip,
      },
    ]);

    setNewTrip({
      route: "",
      vehicle: "",
      driver: "",
      status: "Scheduled",
    });

    setShowForm(false);
  };

  const deleteTrip = (id) => {
    setTrips(trips.filter((trip) => trip.id !== id));
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
        <h1>Trip Management</h1>

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
          + Add Trip
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
            name="route"
            placeholder="Route"
            value={newTrip.route}
            onChange={handleChange}
            style={{ margin: "10px", padding: "10px" }}
          />

          <input
            type="text"
            name="vehicle"
            placeholder="Vehicle Number"
            value={newTrip.vehicle}
            onChange={handleChange}
            style={{ margin: "10px", padding: "10px" }}
          />

          <input
            type="text"
            name="driver"
            placeholder="Driver Name"
            value={newTrip.driver}
            onChange={handleChange}
            style={{ margin: "10px", padding: "10px" }}
          />

          <select
            name="status"
            value={newTrip.status}
            onChange={handleChange}
            style={{ margin: "10px", padding: "10px" }}
          >
            <option>Scheduled</option>
            <option>Ongoing</option>
            <option>Completed</option>
          </select>

          <br />

          <button
            onClick={addTrip}
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
            Save Trip
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
            <th style={{ padding: "12px" }}>Route</th>
            <th>Vehicle</th>
            <th>Driver</th>
            <th>Status</th>
            <th>Actions</th>
          </tr>
        </thead>

        <tbody>
          {trips.map((trip) => (
            <tr key={trip.id} style={{ textAlign: "center" }}>
              <td style={{ padding: "12px" }}>{trip.route}</td>
              <td>{trip.vehicle}</td>
              <td>{trip.driver}</td>
              <td>{trip.status}</td>

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
                  onClick={() => deleteTrip(trip.id)}
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

export default Trips;