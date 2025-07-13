import React, { useState } from "react";

// Custom Hook
export function useToggleItems(items = [], initialIndex = 0) {
  const [index, setIndex] = useState(initialIndex >= 0 && initialIndex < items.length ? initialIndex : 0);

  const toggle = () => {
    setIndex((prevIndex) => (prevIndex + 1) % items.length);
  };

  return [items[index], toggle];
}

// UI Component using the hook
export function ToggleComponent() {
  const [item, toggle] = useToggleItems(["A", "B", "C"], 1); // Starts at "B"

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h2>Current Item: {item}</h2>
      <button onClick={toggle}>Toggle</button>
    </div>
  );
}
