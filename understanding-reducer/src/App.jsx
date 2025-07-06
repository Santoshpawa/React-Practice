import React, { useReducer } from "react";

// Initial state
const initialState = {
  theme: "light", // 'light' or 'dark'
};

// Reducer
function reducer(state, action) {
  switch (action.type) {
    case "TOGGLE_THEME":
      return {
        theme: state.theme === "light" ? "dark" : "light",
      };
    default:
      return state;
  }
}

export default function App() {
  const [state, dispatch] = useReducer(reducer, initialState);

  const isDark = state.theme === "dark";

  const styles = {
    backgroundColor: isDark ? "#222" : "#fff",
    color: isDark ? "#fff" : "#000",
    height: "100vh",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column",
  };

  return (
    <div style={styles}>
      <h1>{isDark ? "Dark Theme" : "Light Theme"}</h1>
      <button
        onClick={() => dispatch({ type: "TOGGLE_THEME" })}
        style={{
          padding: "10px 20px",
          fontSize: "16px",
          cursor: "pointer",
          backgroundColor: isDark ? "#fff" : "#000",
          color: isDark ? "#000" : "#fff",
          border: "none",
          borderRadius: "5px",
          marginTop: "20px",
        }}
      >
        Toggle Theme
      </button>
    </div>
  );
}
