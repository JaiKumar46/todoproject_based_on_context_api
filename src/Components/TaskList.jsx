import React, { useContext } from "react";
import { TaskListContext } from "../api/ContextApi";
import Task from "./Tasks"

const TaskList = () => {
  const { tasks } = useContext(TaskListContext);

  return (
    <div>
      {tasks.length ? (
        <ul className="list">
          {tasks.map(task => {
            return <Task task={task} key={task.id} />;
          })}
        </ul>
      ) : (
        <div className="no-tasks">No Tasks</div>
      )}
    </div>
  );
};

export default TaskList;