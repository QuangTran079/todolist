function TodoItem({ todo, onToggle, onDelete }) {
  return (
    <div className="todo-item">
      <label className="todo-label">
        <input
          type="checkbox"
          checked={todo.completed}
          onChange={() => onToggle(todo.id)}
        />

        <span className={todo.completed ? "completed" : ""}>
          {todo.title}
        </span>
      </label>

      <button
        type="button"
        className="delete-button"
        onClick={() => onDelete(todo.id)}
      >
        Delete
      </button>
    </div>
  );
}

export default TodoItem;