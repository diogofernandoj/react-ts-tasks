import Task from "./Task";

type TasksProps = {
  id: number;
  title: string;
  isCompleted: boolean;
};

const Tasks = ({
  tasks,
  completeTaskHandler,
  deleteTaskHandler,
}: {
  tasks: TasksProps[];
  completeTaskHandler: (id: number) => void;
  deleteTaskHandler: (id: number) => void;
}) => {
  return (
    <div className="tasks-container">
      {tasks.map((task) => (
        <Task key={task.id} task={task} completeTaskHandler={completeTaskHandler} deleteTaskHandler={deleteTaskHandler} />
      ))}
    </div>
  );
};

export default Tasks;
