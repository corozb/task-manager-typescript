import { ChangeEvent, FormEvent, useState, useRef } from 'react'
import { AiOutlinePlus } from 'react-icons/ai'
import { Task } from '../interfaces/task.interfaces'

interface Props {
  addNewTask: (task: Task) => void
}

type InputChangeEvent = ChangeEvent<HTMLInputElement | HTMLTextAreaElement>

const initialState = {
  title: '',
  description: '',
}

export default function TaskForm({ addNewTask }: Props) {
  const [task, setTask] = useState(initialState)
  const inputRef = useRef<HTMLInputElement>(null)

  const handleForm = ({ target: { name, value } }: InputChangeEvent) => {
    setTask({
      ...task,
      [name]: value,
    })
  }

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    addNewTask(task)
    setTask(initialState)
    inputRef.current?.focus()
  }

  return (
    <div className='card card-body'>
      <h1>Add Task</h1>

      <form onSubmit={handleSubmit}>
        <input
          type='text'
          name='title'
          className='form-control mb-3'
          placeholder='add card name'
          onChange={handleForm}
          value={task.title}
          ref={inputRef}
        />

        <textarea
          name='description'
          rows={2}
          placeholder='Write a description'
          className='form-control mb-3'
          onChange={handleForm}
          value={task.description}
        ></textarea>

        <button className='btn btn-primary'>
          Save <AiOutlinePlus />
        </button>
      </form>
    </div>
  )
}
