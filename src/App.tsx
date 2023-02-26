import { useState } from "react";

import AddTask from "./components/AddTask";
import Tasks from "./components/Tasks";

type Tasks = {
  id: number;
  title: string;
  isCompleted: boolean;
};

const App = () => {
  const [tasks, setTasks] = useState<Tasks[]>([]);
  const [ids, setIds] = useState<number>(0);

  const addTaskHandler = (taskTitle: string) => {
    setTasks([...tasks, { id: ids, title: taskTitle, isCompleted: false }]);
    setIds((prevState) => prevState + 1);
  };

  const completeTaskHandler = (id: number) => {
    const newTasks = tasks.map((task) => (task.id == id ? { ...task, isCompleted: !task.isCompleted } : task));
    setTasks(newTasks);
  };

  const deleteTaskHandler = (id: number) => {
    const newTasks = tasks.filter((task) => task.id != id);
    setTasks(newTasks);
  };

  return (
    <div className="app-container">
      <AddTask addTaskHandler={addTaskHandler} />
      <Tasks tasks={tasks} completeTaskHandler={completeTaskHandler} deleteTaskHandler={deleteTaskHandler} />
    </div>
  );
};

export default App;
