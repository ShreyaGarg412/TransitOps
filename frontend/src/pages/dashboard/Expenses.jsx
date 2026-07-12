import { useState } from "react";

function Expenses() {
  const [expenses, setExpenses] = useState([
    {
      id: 1,
      vehicle: "DL01AB1234",
      type: "Fuel",
      amount: "5000",
      date: "12-07-2026",
    },
    {
      id: 2,
      vehicle: "DL02CD5678",
      type: "Service",
      amount: "2500",
      date: "10-07-2026",
    },
  ]);

  const [showForm, setShowForm] = useState(false);

  const [newExpense, setNewExpense] = useState({
    vehicle: "",
    type: "",
    amount: "",
    date: "",
  });

  const handleChange = (e) => {
    setNewExpense({
      ...newExpense,
      [e.target.name]: e.target.value,
    });
  };

  const addExpense = () => {
    if (
      !newExpense.vehicle ||
      !newExpense.type ||
      !newExpense.amount ||
      !newExpense.date
    ) {
      alert("Please fill all fields");
      return;
    }

    setExpenses([
      ...expenses,
      {
        id: Date.now(),
        ...newExpense,
      },
    ]);

    setNewExpense({
      vehicle: "",
      type: "",
      amount: "",
      date: "",
    });

    setShowForm(false);
  };

  const deleteExpense = (id) => {
    setExpenses(expenses.filter((expense) => expense.id !== id));
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
        <h1>Expense Management</h1>

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
          + Add Expense
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
            value={newExpense.vehicle}
            onChange={handleChange}
            style={{ margin: "10px", padding: "10px" }}
          />

          <input
            type="text"
            name="type"
            placeholder="Expense Type"
            value={newExpense.type}
            onChange={handleChange}
            style={{ margin: "10px", padding: "10px" }}
          />

          <input
            type="number"
            name="amount"
            placeholder="Amount"
            value={newExpense.amount}
            onChange={handleChange}
            style={{ margin: "10px", padding: "10px" }}
          />

          <input
            type="date"
            name="date"
            value={newExpense.date}
            onChange={handleChange}
            style={{ margin: "10px", padding: "10px" }}
          />

          <br />

          <button
            onClick={addExpense}
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
            Save Expense
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
            <th>Type</th>
            <th>Amount</th>
            <th>Date</th>
            <th>Actions</th>
          </tr>
        </thead>

        <tbody>
          {expenses.map((expense) => (
            <tr key={expense.id} style={{ textAlign: "center" }}>
              <td style={{ padding: "12px" }}>{expense.vehicle}</td>
              <td>{expense.type}</td>
              <td>₹{expense.amount}</td>
              <td>{expense.date}</td>

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
                  onClick={() => deleteExpense(expense.id)}
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

export default Expenses;