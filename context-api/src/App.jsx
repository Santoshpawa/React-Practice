import React from "react";
import { ThemeProvider, useTheme } from "./ThemeContext";
import NestedComponent from "./NestedComponent";

function AppContent() {
  const { theme, toggleTheme } = useTheme();

  const appStyle = {
    backgroundColor: theme === "light" ? "#ffffff" : "#333333",
    color: theme === "light" ? "#000000" : "#ffffff",
    padding: "2rem",
    minHeight: "100vh",
    textAlign: "center",
  };
  return (
    <div style={appStyle}>
      <h1>{theme.toUpperCase()} MODE</h1>
      <button onClick={toggleTheme}>Toggle Theme</button>
      <NestedComponent />
    </div>
  );
}

export default function App() {
  return (
    <ThemeProvider>
      <AppContent />
    </ThemeProvider>
  );
}
