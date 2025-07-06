import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import RickAndMortyCharacters from "./RickAndMortyCharacters";

function App() {
  const [count, setCount] = useState(0);

  return <RickAndMortyCharacters />;
}

export default App;
