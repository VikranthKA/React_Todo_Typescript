import React, { FC, useState, ChangeEvent } from 'react'
import "./App.css"
import { ITask } from './Interfaces'
import TodoTask from './components/TodoTask'

const App: FC = () => {
  const [task, setTask] = useState<string>(" ")
  const [deadLine, setDeadLine] = useState<number>(0)
  const [todo, setTodo] = useState<ITask[]>([])

  const handleChange = (event: ChangeEvent<HTMLInputElement>): void => {
    const { name, value } = event.target
    if (name === "task") setTask(value)
    if (name === "deadline") setDeadLine(parseInt(value))
      
      
    }
    const handleAddTask = (): void => {
      setTodo([...todo, { id: Date.now(), task, deadLine }])
      setTask(" ")
      setDeadLine(0)
    console.log({ id: Date.now(), task, deadLine })
  }

  const completedTask = (taskId: number): void => {
    setTodo(todo.filter(task => task.id !== taskId))

  }

  const updateTask = (taskId: number, newTask: string): void => {
    setTodo(todo.map((task) => {
      if (taskId === task.id) {
        return { ...task, task: newTask }
      }
      return task
    }))
  }


  return (
    <div className="app-container" >
      <h1>Todo</h1>
      <div className="header">
        <input type='text' placeholder="Task....." value={task} name="task" id="task" onChange={(event) => handleChange(event)} />
        <div id="deadline-button">
        <input type='number' placeholder="Dead Line..." value={deadLine} name="deadline" onChange={(event) => handleChange(event)} />
        <button onClick={handleAddTask} id="button1">Add Task</button>

        </div>

      </div>
      {todo.length >= 0 && <div className="todoList">
        {todo.map((task: ITask) => <TodoTask task={task} completedTask={completedTask} updateTask={updateTask} />)}
      </div>

      }
    </div>
  )
}

export default App
