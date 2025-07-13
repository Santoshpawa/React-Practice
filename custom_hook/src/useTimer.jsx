import React, { useState, useEffect, useRef } from "react";

// Custom Hook
export function useTimer() {
  const [timer, setTimer] = useState(0);
  const [isRunning, setIsRunning] = useState(false);
  const intervalRef = useRef(null);

  const startTimer = () => {
    if (!isRunning) {
      setIsRunning(true);
      intervalRef.current = setInterval(() => {
        setTimer((prev) => prev + 1);
      }, 1000);
    }
  };

  const stopTimer = () => {
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
      intervalRef.current = null;
    }
    setIsRunning(false);
  };

  const resetTimer = () => {
    stopTimer();
    setTimer(0);
  };

  useEffect(() => {
    return () => stopTimer(); // Cleanup
  }, []);

  return { timer, isRunning, startTimer, stopTimer, resetTimer };
}

// Timer UI component (combined in same file for 2-file setup)
export function TimerComponent() {
  const { timer, isRunning, startTimer, stopTimer, resetTimer } = useTimer();

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h1>Timer: {timer}s</h1>
      <p>Status: {isRunning ? "Running" : "Stopped"}</p>
      <button onClick={startTimer} disabled={isRunning}>
        Start
      </button>
      <button onClick={stopTimer} disabled={!isRunning}>
        Stop
      </button>
      <button onClick={resetTimer}>Reset</button>
    </div>
  );
}
