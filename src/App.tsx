import { useState } from 'react'

import TaskList from './components/TaskList'
import logo from './logo.svg'
import './App.css'
import { Task } from './interfaces/task.interfaces'
import TaskForm from './components/TaskForm'

function App() {
  const [tasks, setTasks] = useState<Task[]>([])

  const addNewTask = (task: Task) => setTasks([...tasks, { ...task, id: getCurrentTimeStamp(), completed: false }])

  const getCurrentTimeStamp = () => new Date().getTime()

  const deleteTask = (id: number) => setTasks(tasks.filter((task) => task.id !== id))

  return (
    <div style={{ height: '100vh' }}>
      <nav className='navbar navbar-dark bg-primary'>
        <div className='container'>
          <a href='/' className='navbar-brand'>
            <img src={logo} alt='ReactJS' style={{ width: '4rem' }} />
            Application
          </a>
        </div>
      </nav>

      <main className='container p-4'>
        <div className='row'>
          <div className='col-md-4 pb-2'>
            <TaskForm addNewTask={addNewTask} />
          </div>
          <div className='col-md-8'>
            <div className='row'>
              <TaskList deleteTask={deleteTask} tasks={tasks} />
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}

export default App
