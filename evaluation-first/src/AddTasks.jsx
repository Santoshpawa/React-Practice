import { useState } from "react";
import { useTask } from "./TaskContext";

export default function AddTasks() {
  const { tasks, setTasks } = useTask();
  const [task, setTask] = useState("");

  const handleTask = () => {
    setTasks([...tasks, task]);
    setTask("");
  };
  return (
    <div className="input">
      <input
        type="text"
        value={task}
        onChange={(e) => setTask(e.target.value)}
        placeholder="Enter new task"
      />
      <button onClick={handleTask}> Add Task </button>
    </div>
  );
}
