// App.jsx
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { increment, decrement } from "./main"; // Import actions

export default function App() {
  const dispatch = useDispatch();
  const counter = useSelector((state) => state.counter.value);

  return (
    <div style={styles.container}>
      <h1>Redux Counter App</h1>
      <h2>Count: {counter}</h2>
      <div>
        <button onClick={() => dispatch(increment())} style={styles.button}>
          Increment
        </button>
        <button onClick={() => dispatch(decrement())} style={styles.button}>
          Decrement
        </button>
      </div>
      <h3>Display data:</h3>
      <pre>{JSON.stringify({ counter })}</pre>
    </div>
  );
}

const styles = {
  container: {
    textAlign: "center",
    fontFamily: "Arial",
    marginTop: "4rem",
  },
  button: {
    margin: "0.5rem",
    padding: "0.5rem 1rem",
    fontSize: "1rem",
    cursor: "pointer",
  },
};
