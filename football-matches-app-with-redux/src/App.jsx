// App.jsx
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchMatches, setFilter } from "./main";

export default function App() {
  const dispatch = useDispatch();
  const { loading, matches, error, filter } = useSelector(
    (state) => state.matchState
  );

  useEffect(() => {
    dispatch(fetchMatches());
  }, [dispatch]);

  const filtered = matches.filter(
    (m) =>
      m.team1.toLowerCase().includes(filter.toLowerCase()) ||
      m.team2.toLowerCase().includes(filter.toLowerCase())
  );

  return (
    <div style={{ padding: "1rem", fontFamily: "sans-serif" }}>
      <h2>🏆 Football Matches</h2>

      <input
        type="text"
        placeholder="Search team..."
        value={filter}
        onChange={(e) => dispatch(setFilter(e.target.value))}
        style={{ marginBottom: "1rem", padding: "0.5rem", width: "100%" }}
      />

      {loading && <p>Loading...</p>}
      {error && <p style={{ color: "red" }}>{error}</p>}

      <table style={{ width: "100%", borderCollapse: "collapse" }}>
        <thead>
          <tr>
            <th style={th}>Team 1</th>
            <th style={th}>Team 2</th>
            <th style={th}>Score</th>
            <th style={th}>Date</th>
          </tr>
        </thead>
        <tbody>
          {filtered.map((match, i) => (
            <tr key={i}>
              <td style={td}>{match.team1}</td>
              <td style={td}>{match.team2}</td>
              <td style={td}>
                {match.team1goals} - {match.team2goals}
              </td>
              <td style={td}>{match.date}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

const th = { border: "1px solid black", padding: "8px", background: "#f0f0f0" };
const td = { border: "1px solid black", padding: "8px", textAlign: "center" };
