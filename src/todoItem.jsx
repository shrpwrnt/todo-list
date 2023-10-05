const TodoItem = function ({ id, title, completed }) {
  return (
    <li>
      <label>
        <input type='checkbox' />
        <span>{title}</span>
      </label>
    </li>
  )
}

export default TodoItem
