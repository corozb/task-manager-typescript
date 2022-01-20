import { Task } from '../interfaces/task.interfaces'

interface Props {
  task: Task
  deleteTask: (id: number) => void
}

export default function TaskCard({ task, deleteTask }: Props) {
  return (
    <div className='card card-body'>
      <h2>{task.title}</h2>
      <p>{task.id}</p>
      <p>{task.description}</p>
      <button className='btn btn-danger' onClick={() => task.id && deleteTask(task.id)}>
        Delete
      </button>
    </div>
  )
}
