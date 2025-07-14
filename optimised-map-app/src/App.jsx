import React, { useState } from "react";
import Map from "./Map";

function App() {
  const [fromQuery, setFromQuery] = useState("");
  const [toQuery, setToQuery] = useState("");
  const [fromCoords, setFromCoords] = useState(null);
  const [toCoords, setToCoords] = useState(null);

  const geocodeLocation = async (query) => {
    const response = await fetch(
      `https://nominatim.openstreetmap.org/search?format=json&q=${encodeURIComponent(
        query
      )}`
    );
    const data = await response.json();
    if (data.length > 0) {
      return [parseFloat(data[0].lat), parseFloat(data[0].lon)];
    } else {
      alert(`Location not found: ${query}`);
      return null;
    }
  };

  const handleFindRoute = async () => {
    const from = await geocodeLocation(fromQuery);
    const to = await geocodeLocation(toQuery);
    if (from && to) {
      setFromCoords(from);
      setToCoords(to);
    }
  };

  const handleUseCurrentLocation = () => {
    navigator.geolocation.getCurrentPosition((pos) => {
      const coords = [pos.coords.latitude, pos.coords.longitude];
      setFromCoords(coords);
    });
  };

  return (
    <div style={{ height: "100vh", display: "flex", flexDirection: "column" }}>
      <h2 style={{ textAlign: "center" }}>Map Route Finder</h2>
      <div
        style={{
          padding: "1rem",
          display: "flex",
          gap: "1rem",
          justifyContent: "center",
          flexWrap: "wrap",
        }}
      >
        <input
          type="text"
          placeholder="Enter Current Location"
          value={fromQuery}
          onChange={(e) => setFromQuery(e.target.value)}
          style={{ width: "200px" }}
        />
        <button onClick={handleUseCurrentLocation}>Current Location</button>
        <input
          type="text"
          placeholder="Enter Destination"
          value={toQuery}
          onChange={(e) => setToQuery(e.target.value)}
          style={{ width: "200px" }}
        />
        <button onClick={handleFindRoute}>Show Route</button>
      </div>
      <Map from={fromCoords} to={toCoords} />
    </div>
  );
}

export default App;
