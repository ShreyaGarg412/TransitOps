import { useState } from "react";

function Maintenance() {
  const [records, setRecords] = useState([
    {
      id: 1,
      vehicle: "DL01AB1234",
      service: "Oil Change",
      date: "2026-07-15",
      status: "Completed",
    },
    {
      id: 2,
      vehicle: "DL02CD5678",
      service: "Brake Service",
      date: "2026-07-20",
      status: "Pending",
    },
  ]);

  const [showForm, setShowForm] = useState(false);

  const [newRecord, setNewRecord] = useState({
    vehicle: "",
    service: "",
    date: "",
    status: "Pending",
  });

  const handleChange = (e) => {
    setNewRecord({
      ...newRecord,
      [e.target.name]: e.target.value,
    });
  };

  const addRecord = () => {
    if (
      !newRecord.vehicle ||
      !newRecord.service ||
      !newRecord.date
    ) {
      alert("Please fill all fields");
      return;
    }

    setRecords([
      ...records,
      {
        id: Date.now(),
        ...newRecord,
      },
    ]);

    setNewRecord({
      vehicle: "",
      service: "",
      date: "",
      status: "Pending",
    });

    setShowForm(false);
  };

  const deleteRecord = (id) => {
    setRecords(records.filter((record) => record.id !== id));
  };

  return (
    <div style={{ padding: "20px" }}>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          marginBottom: "20px",
        }}
      >
        <h1>Maintenance</h1>

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
          + Add Record
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
            name="vehicle"
            placeholder="Vehicle Number"
            value={newRecord.vehicle}
            onChange={handleChange}
            style={{ margin: "10px", padding: "10px" }}
          />

          <input
            type="text"
            name="service"
            placeholder="Service Type"
            value={newRecord.service}
            onChange={handleChange}
            style={{ margin: "10px", padding: "10px" }}
          />

          <input
            type="date"
            name="date"
            value={newRecord.date}
            onChange={handleChange}
            style={{ margin: "10px", padding: "10px" }}
          />

          <select
            name="status"
            value={newRecord.status}
            onChange={handleChange}
            style={{ margin: "10px", padding: "10px" }}
          >
            <option>Pending</option>
            <option>Completed</option>
          </select>

          <br />

          <button
            onClick={addRecord}
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
            Save Record
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
            <th style={{ padding: "12px" }}>Vehicle</th>
            <th>Service</th>
            <th>Date</th>
            <th>Status</th>
            <th>Actions</th>
          </tr>
        </thead>

        <tbody>
          {records.map((record) => (
            <tr key={record.id} style={{ textAlign: "center" }}>
              <td style={{ padding: "12px" }}>{record.vehicle}</td>
              <td>{record.service}</td>
              <td>{record.date}</td>
              <td>{record.status}</td>

              <td>
                <button
                  style={{
                    background: "#f59e0b",
                    color: "white",
                    border: "none",
                    padding: "6px 12px",
                    borderRadius: "5px",
                    marginRight: "8px",
                  }}
                >
                  Edit
                </button>

                <button
                  onClick={() => deleteRecord(record.id)}
                  style={{
                    background: "#dc2626",
                    color: "white",
                    border: "none",
                    padding: "6px 12px",
                    borderRadius: "5px",
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

export default Maintenance;