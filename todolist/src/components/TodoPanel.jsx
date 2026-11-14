import { useState } from "react";
import "../styles/TodoPanel.css";

function TodoPanel() {
  const [todos, setTodos] = useState([]);
  const [title, setTitle] = useState("");

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

      <div className="todo-list">
        {todos.length === 0 && <p>Chưa có công việc nào.</p>}

        {todos.map((todo) => (
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
    </div>
  );
}

export default TodoPanel;