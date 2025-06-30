import { useState } from "react";

import "./App.css";

export default function App() {
  const [name, setName] = useState("Tommy");
  const getName = () => {
    let input = prompt("Enter user Name: ");
    setName(input);
  };

  return (
    <>
      <button onClick={getName}>Enter Name</button>
      <Parent name={name} />
    </>
  );
}

function Parent({ name }) {
  return <Child name={name} />;
}

function Child({ name }) {
  return <h2>Hello, {name}</h2>;
}
