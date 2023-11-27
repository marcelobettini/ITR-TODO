import { Task } from "./Task";
function TaskList({ tasks }) {
  return (
    <div>
      <h2>Tareas</h2>
      {tasks.map((t) => <Task key={t.id} task={t} />)}
    </div>
  );
}

export default TaskList;