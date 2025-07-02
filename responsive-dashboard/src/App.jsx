import React from "react";
import { AuthProvider } from "./AuthContext";
import { ThemeProvider } from "./ThemeContext";
import Navbar from "./Navbar";
import Sidebar from "./Sidebar";
import MainContent from "./MainContent";
import Footer from "./Footer";
import "./styles.css";

function App() {
  return (
    <AuthProvider>
      <ThemeProvider>
        <Navbar />
        <div className="container">
          <Sidebar />
          <MainContent />
        </div>
        <Footer />
      </ThemeProvider>
    </AuthProvider>
  );
}

export default App;
