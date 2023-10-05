import TodoItem from './todoItem'

const TodoList = function ({ todos }) {
  return (
    <div>
      <ul>
        {todos.map(todo => (
          <TodoItem key={todo.id} {...todo} />
        ))}
      </ul>
    </div>
  )
}

export default TodoList
