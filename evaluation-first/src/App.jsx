import { TaskProvider } from "./TaskContext";
import AddTasks from "./AddTasks";
import DisplayTask from "./DisplayTask";
function App() {
  return (
    <TaskProvider>
      <AddTasks></AddTasks>
      <DisplayTask></DisplayTask>
    </TaskProvider>
  );
}

export default App;
