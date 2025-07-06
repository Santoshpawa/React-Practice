import React from "react";
import CountryList from "../components/CountryList";
import { useTheme } from "../context/ThemeContext";

export default function Dashboard() {
  const { toggleTheme, darkMode } = useTheme();
  return (
    <div>
      <button onClick={toggleTheme}>
        {darkMode ? "Light Mode" : "Dark Mode"}
      </button>
      <CountryList />
    </div>
  );
}
