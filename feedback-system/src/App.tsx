import React, { useState } from "react";

interface Feedback {
  name: string;
  message: string;
  rating: number;
}

const App: React.FC = () => {
  const [feedbacks, setFeedbacks] = useState<Feedback[]>([]);
  const [form, setForm] = useState<Feedback>({
    name: "",
    message: "",
    rating: 5,
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setForm((prev) => ({
      ...prev,
      [name]: name === "rating" ? +value : value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFeedbacks((prev) => [...prev, form]);
    alert("Thank you for your feedback!");
    setForm({ name: "", message: "", rating: 5 });
  };

  return (
    <div style={{ padding: "2rem", fontFamily: "Arial" }}>
      <h1>Customer Feedback</h1>
      <form onSubmit={handleSubmit} style={{ marginBottom: "2rem" }}>
        <input
          type="text"
          name="name"
          placeholder="Your Name"
          value={form.name}
          onChange={handleChange}
          required
          style={{ display: "block", marginBottom: "1rem", width: "100%" }}
        />
        <textarea
          name="message"
          placeholder="Your Feedback"
          value={form.message}
          onChange={handleChange}
          required
          style={{
            display: "block",
            marginBottom: "1rem",
            width: "100%",
            height: "80px",
          }}
        />
        <input
          type="number"
          name="rating"
          value={form.rating}
          onChange={handleChange}
          min={1}
          max={5}
          required
          style={{ display: "block", marginBottom: "1rem", width: "100%" }}
        />
        <button type="submit">Submit Feedback</button>
      </form>

      <h2>All Feedback</h2>
      <ul>
        {feedbacks.map((fb, index) => (
          <li key={index}>
            <strong>{fb.name}</strong> ({fb.rating}/5): {fb.message}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default App;
