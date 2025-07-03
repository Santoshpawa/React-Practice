import { TaskProvider } from "./TaskContext";
import AddTasks from "./AddTasks";

function App() {
  return (
    <TaskProvider>
      <AddTasks></AddTasks>
    </TaskProvider>
  );
}

export default App;
