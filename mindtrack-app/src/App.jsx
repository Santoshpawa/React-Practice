import React, { useState } from "react";

const initialEntry = {
  study: 0,
  break: 0,
  sleep: 0,
  stress: 0,
  focus: 0,
  reflection: "",
  date: new Date().toLocaleDateString()
};

export default function App() {
  const [entry, setEntry] = useState(initialEntry);
  const [log, setLog] = useState([]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setEntry({ ...entry, [name]: name === "reflection" ? value : Number(value) });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLog([...log, entry]);
    setEntry({ ...initialEntry, date: new Date().toLocaleDateString() });
  };

  return (
    <div style={{ padding: "2rem", fontFamily: "Arial" }}>
      <h1>MindTrack Journal</h1>
      <form onSubmit={handleSubmit}>
        <label>Study Hours: <input type="number" name="study" value={entry.study} onChange={handleChange} /></label><br />
        <label>Break Time: <input type="number" name="break" value={entry.break} onChange={handleChange} /></label><br />
        <label>Sleep (hrs): <input type="number" name="sleep" value={entry.sleep} onChange={handleChange} /></label><br />
        <label>Stress Level (1-10): <input type="number" name="stress" min="1" max="10" value={entry.stress} onChange={handleChange} /></label><br />
        <label>Focus (1-10): <input type="number" name="focus" min="1" max="10" value={entry.focus} onChange={handleChange} /></label><br />
        <label>Reflection: <textarea name="reflection" value={entry.reflection} onChange={handleChange}></textarea></label><br />
        <button type="submit">Log Entry</button>
      </form>

      <h2>Past Entries</h2>
      {log.length === 0 && <p>No entries yet.</p>}
      <ul>
        {log.map((item, idx) => (
          <li key={idx}>
            <strong>{item.date}</strong> - Study: {item.study}h, Sleep: {item.sleep}h, Stress: {item.stress}/10, Focus: {item.focus}/10
            <p><em>{item.reflection}</em></p>
          </li>
        ))}
      </ul>
    </div>
  );
}
