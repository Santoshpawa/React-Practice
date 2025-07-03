import { useState } from "react";
import { useTask } from "./TaskContext";

export default function DisplayTask() {
  const { tasks } = useTask();
  const [filterSearch, setFilterSearch] = useState("");

  const filterTasks = tasks.filter((task) =>
    task.toLowerCase().includes(filterSearch.toLowerCase())
  );

  return (
    <>
      <input
        type="text"
        value={filterSearch}
        placeholder="Search Tasks"
        onChange={(e) => {
          setFilterSearch(e.target.value);
        }}
      />
      <div className="container">
        {filterTasks.map((task) => (
          <div className="card">
            <p>{task}</p>
          </div>
        ))}
      </div>
    </>
  );
}
