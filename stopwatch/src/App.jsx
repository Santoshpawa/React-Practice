import { useState, useEffect, useRef } from "react";

import "./App.css";

function App() {
  const [timer, setTimer] = useState(0);
  const [target, setTargert] = useState(10);
  const intervalRef = useRef(null);

  const startTimer = () => {
    if (intervalRef.current) return;
    intervalRef.current = setInterval(() => {
      setTimer((prev) => {
        const next = prev + 1;
        if (next == target) {
          console.log("play music");
        }
        return next;
      });
    }, 1000);
  };

  const stopTimer = () => {
    clearInterval(intervalRef.current);
    intervalRef.current = null;
  };
  return (
    <>
      <input
        type="number"
        placeholder="Enter Target Time in Seconds"
        value={target}
        onChange={(e) => setTargert(e.target.value)}
      />
      <h1>{timer}</h1>
      <button onClick={startTimer}>Start</button>
      <button onClick={stopTimer}>Stop</button>
      <button
        onClick={() => {
          setTimer(0);
        }}
      >
        Reset
      </button>
    </>
  );
}

export default App;
