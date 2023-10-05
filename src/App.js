import { useState } from 'react'
import TodoList from './todoList'

function App() {
  const [todos, setTodos] = useState([
    {
      id: 1,
      title: 'Купить хлеб',
      completed: false,
    },
    {
      id: 2,
      title: 'Покормить кота',
      completed: true,
    },
  ])

  const [todoTitle, setTodoTitle] = useState('')

  const addTodo = event => {
    console.log(event.key)
    if (event.key === 'Enter') {
      setTodos([
        ...todos,
        { id: Date.now(), title: todoTitle, completed: false },
      ])
      setTodoTitle('')
    }
  }

  return (
    <div>
      <h1>Hello World</h1>
      <div>
        <input
          type='text'
          value={todoTitle}
          onChange={event => setTodoTitle(event.target.title)}
          onKeyPress={() => addTodo()}
        />
        <label>Todo name</label>
      </div>
      <TodoList todos={todos} />
    </div>
  )
}

export default App
