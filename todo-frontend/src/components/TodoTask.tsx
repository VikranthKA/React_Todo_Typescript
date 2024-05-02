import React from 'react'

import { ITask } from '../Interfaces'
import "../component_css/todotask.css"
interface Props {
  task: ITask;
  completedTask(taskIdToDelete: number): void;
  updateTask(taskIdToUpdate: number, newTask: string): void;
}

const TodoTask = ({ task, completedTask, updateTask }: Props) => {

  const handleTaskChange = (taskId: number, taskName: string): void => {

    const editedTask = window.prompt(taskName)
    if (editedTask) {
      updateTask(taskId, editedTask)
    }

  }



  return (
    <div key={task.id} className='container'>
      <h3>

      Task:{task.task}
      </h3>
      <h4>

      DeadLine:{task.deadLine}
      </h4>
      <button className="delete-task" onClick={() => completedTask(task.id)}>
        Done
      </button>
      <button className="update-task"
      onClick={() => handleTaskChange(task.id, task.task)}>Update
      </button>
    </div>
  )
}

export default TodoTask
