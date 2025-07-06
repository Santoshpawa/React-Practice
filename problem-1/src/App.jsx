import React, { useRef, useState } from "react";

const App = () => {
  const inputRef = useRef(null);
  const [focused, setFocused] = useState(false);

  const handleClick = () => {
    inputRef.current.focus();
    inputRef.current.style.backgroundColor = "#e0f7fa"; // light blue
    setFocused(true);
  };

  return (
    <div style={{ padding: "20px", fontFamily: "Arial" }}>
      <input
        ref={inputRef}
        type="text"
        placeholder="Click the button to focus"
      />
      <br />
      <br />
      <button onClick={handleClick}>Focus Input</button>
      {focused && <p style={{ color: "green" }}>Focused!</p>}
    </div>
  );
};

export default App;
