import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { AuthContext, AuthContextProvider } from "../Context/AuthContext.jsx";
import {
  ThemeContext,
  ThemeContextProvider,
} from "../Context/ThemeContext.jsx";

createRoot(document.getElementById("root")).render(
  <AuthContextProvider>
    <ThemeContextProvider>
      <App></App>
    </ThemeContextProvider>
  </AuthContextProvider>
);
