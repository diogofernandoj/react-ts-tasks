import { MdDelete } from "react-icons/Md";

type TaskProps = {
  id: number;
  title: string;
  isCompleted: boolean;
};

const Task = ({
  task,
  completeTaskHandler,
  deleteTaskHandler,
}: {
  task: TaskProps;
  completeTaskHandler: (id: number) => void;
  deleteTaskHandler: (id: number) => void;
}) => {
  return (
    <div className="task">
      <span className="title" style={!!task.isCompleted ? { textDecoration: "line-through" } : {}} onClick={() => completeTaskHandler(task.id)}>
        {task.title}
      </span>
      <span onClick={() => deleteTaskHandler(task.id)} className="delete">
        <MdDelete size="1.4rem" />
      </span>
    </div>
  );
};

export default Task;
