import { createContext, useContext, useState } from "react";

const TaskContext = createContext();

export const useTask = () => useContext(TaskContext);

export function TaskProvider({ children }) {
  const [tasks, setTasks] = useState([]);

  return (
    <TaskContext.Provider value={{ tasks, setTasks }}>
      {children}
    </TaskContext.Provider>
  );
}
