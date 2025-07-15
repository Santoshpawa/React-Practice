import React, { useState, useContext, createContext } from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

// Create Feedback Context
const FeedbackContext = createContext();

// Feedback Provider
function FeedbackProvider({ children }) {
  const [feedbacks, setFeedbacks] = useState([]);
  return (
    <FeedbackContext.Provider value={{ feedbacks, setFeedbacks }}>
      {children}
    </FeedbackContext.Provider>
  );
}

// Navigation Bar
function Navbar() {
  return (
    <nav
      style={{
        marginBottom: "20px",
        borderBottom: "1px solid #ccc",
        paddingBottom: "10px",
      }}
    >
      <Link to="/" style={{ marginRight: "15px" }}>
        Home
      </Link>
      <Link to="/summary">Summary</Link>
    </nav>
  );
}

// Feedback Form
function FeedbackForm() {
  const { feedbacks, setFeedbacks } = useContext(FeedbackContext);
  const [form, setForm] = useState({ name: "", comment: "" });
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const handleSubmit = () => {
    if (!form.name || !form.comment) {
      setError("Please fill in all fields before proceeding.");
      setSuccess("");
      return;
    }

    const newEntry = { name: form.name, comment: form.comment };
    setFeedbacks([...feedbacks, newEntry]);
    setForm({ name: "", comment: "" }); // Clear form
    setError("");
    setSuccess("Feedback submitted successfully!");
  };

  return (
    <div>
      <h2>Feedback Form</h2>
      <input
        placeholder="Your Name"
        value={form.name}
        onChange={(e) => setForm({ ...form, name: e.target.value })}
      />
      <br />
      <textarea
        placeholder="Your Feedback"
        value={form.comment}
        onChange={(e) => setForm({ ...form, comment: e.target.value })}
      />
      <br />
      <button onClick={handleSubmit}>Submit</button>
      {error && <p style={{ color: "red" }}>{error}</p>}
      {success && <p style={{ color: "green" }}>{success}</p>}
    </div>
  );
}

// Feedback Summary
function FeedbackSummary() {
  const { feedbacks } = useContext(FeedbackContext);

  return (
    <div>
      <h2>Summary</h2>
      {feedbacks.length === 0 ? (
        <p>No feedback submitted yet.</p>
      ) : (
        feedbacks.map((f, index) => (
          <div key={index} style={{ marginBottom: "15px" }}>
            <p>
              <strong>Name:</strong> {f.name}
            </p>
            <p>
              <strong>Feedback:</strong> {f.comment}
            </p>
            <hr />
          </div>
        ))
      )}
    </div>
  );
}

// Main App
export default function App() {
  return (
    <FeedbackProvider>
      <Router>
        <div
          style={{
            padding: "20px",
            maxWidth: "600px",
            margin: "auto",
            fontFamily: "Arial",
          }}
        >
          <h1>Feedback System</h1>
          <Navbar />
          <Routes>
            <Route path="/" element={<FeedbackForm />} />
            <Route path="/summary" element={<FeedbackSummary />} />
          </Routes>
        </div>
      </Router>
    </FeedbackProvider>
  );
}
