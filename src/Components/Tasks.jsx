import React, { useContext } from 'react'
import { TaskListContext } from '../api/ContextApi'


const Task = ({ task }) => {
  const { removeTask, findItem } = useContext(TaskListContext)
  return (
    <li className="list-item">
      <span>{task.title} </span>
      <div>
        <button
          className="btn-delete task-btn"
          onClick={() => removeTask(task.id)}
        >
          Delete
        </button>{' '}
        <button className="btn-edit task-btn" onClick={() => findItem(task.id)}>
          EDIT
        </button>
      </div>
    </li>
  )
}

export default Task