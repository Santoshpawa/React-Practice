import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Navbar from "./Components/Nav";
import Body from "./Components/Body";

function App() {
  return (
    <>
      <Navbar />
      <Body />
    </>
  );
}

export default App;
