import React from "react";
import { useTheme } from "./ThemeContext";

export default function NestedComponent() {
  const { theme } = useTheme();
  const style = {
    backgroundColor: theme === "light" ? "#f0f0f0" : "#555555",
    padding: "1rem",
    marginTop: "2rem",
    borderRadius: "8px",
  };

  return <div style={style}>This is a nested component</div>;
}
