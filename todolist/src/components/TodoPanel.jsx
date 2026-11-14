import { useState } from "react";
import "../styles/TodoPanel.css";

function TodoPanel() {
  const [todos, setTodos] = useState([]);
  const [title, setTitle] = useState("");
  const [filter, setFilter] = useState("all");

  function handleAddTodo(event) {
    event.preventDefault();

    const trimmedTitle = title.trim();
    if (!trimmedTitle) return;

    const newTodo = {
      id: crypto.randomUUID(),
      title: trimmedTitle,
      completed: false,
    };

    setTodos((prevTodos) => [...prevTodos, newTodo]);
    setTitle("");
  }

  function handleToggleTodo(id) {
    setTodos((prevTodos) =>
      prevTodos.map((todo) =>
        todo.id === id
          ? { ...todo, completed: !todo.completed }
          : todo
      )
    );
  }

  function handleDeleteTodo(id) {
    setTodos((prevTodos) =>
      prevTodos.filter((todo) => todo.id !== id)
    );
  }

  const filteredTodos = todos.filter((todo) => {
    if (filter === "active") return !todo.completed;
    if (filter === "completed") return todo.completed;
    return true;
  });

  const total = todos.length;
  const completed = todos.filter((todo) => todo.completed).length;
  const remaining = total - completed;

  return (
    <div className="panel todo-panel">
      <h2>Todo Panel</h2>

      <form className="todo-form" onSubmit={handleAddTodo}>
        <input
          type="text"
          aria-label="Tên công việc"
          placeholder="Add a new todo..."
          value={title}
          onChange={(event) => setTitle(event.target.value)}
        />

        <button type="submit">Add Todo</button>
      </form>

      <div className="todo-filters">
        <button
          type="button"
          className={filter === "all" ? "active" : ""}
          aria-pressed={filter === "all"}
          onClick={() => setFilter("all")}
        >
          All
        </button>

        <button
          type="button"
          className={filter === "active" ? "active" : ""}
          aria-pressed={filter === "active"}
          onClick={() => setFilter("active")}
        >
          Active
        </button>

        <button
          type="button"
          className={filter === "completed" ? "active" : ""}
          aria-pressed={filter === "completed"}
          onClick={() => setFilter("completed")}
        >
          Completed
        </button>
      </div>

      <div className="todo-list">
        {filteredTodos.length === 0 && (
          <p>Không có công việc nào trong bộ lọc này.</p>
        )}

        {filteredTodos.map((todo) => (
          <div className="todo-item" key={todo.id}>
            <label className="todo-label">
              <input
                type="checkbox"
                checked={todo.completed}
                onChange={() => handleToggleTodo(todo.id)}
              />

              <span className={todo.completed ? "completed" : ""}>
                {todo.title}
              </span>
            </label>

            <button
              type="button"
              className="delete-button"
              onClick={() => handleDeleteTodo(todo.id)}
            >
              Delete
            </button>
          </div>
        ))}
      </div>

      <div className="todo-stats">
        <p>Total: <strong>{total}</strong></p>
        <p>Completed: <strong>{completed}</strong></p>
        <p>Remaining: <strong>{remaining}</strong></p>
      </div>
    </div>
  );
}

export default TodoPanel;