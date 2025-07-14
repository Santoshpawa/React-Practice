import React, { useState, useCallback } from "react";

const Search = React.memo(({ onResult }) => {
  const [query, setQuery] = useState("");

  const handleSearch = useCallback(async () => {
    if (!query.trim()) return;

    const response = await fetch(
      `https://nominatim.openstreetmap.org/search?format=json&q=${encodeURIComponent(
        query
      )}`
    );
    const data = await response.json();

    if (data.length > 0) {
      const { lat, lon } = data[0];
      onResult([parseFloat(lat), parseFloat(lon)]);
    } else {
      alert("Location not found.");
    }
  }, [query, onResult]);

  return (
    <div
      style={{
        padding: "1rem",
        display: "flex",
        gap: "1rem",
        justifyContent: "center",
      }}
    >
      <input
        type="text"
        placeholder="Search address..."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />
      <button onClick={handleSearch}>Search</button>
    </div>
  );
});

export default Search;
