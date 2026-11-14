import { useState } from "react";
import TodoInput from "./TodoInput";
import TodoList from "./TodoList";
import TodoStats from "./TodoStats";
import "../styles/TodoPanel.css";

function TodoPanel() {
  const [todos, setTodos] = useState([]);
  const [filter, setFilter] = useState("all");

  function handleAddTodo(title) {
    const trimmedTitle = title.trim();
    if (!trimmedTitle) return;

    const newTodo = {
      id: crypto.randomUUID(),
      title: trimmedTitle,
      completed: false,
    };

    setTodos((prevTodos) => [...prevTodos, newTodo]);
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

      <TodoInput onAddTodo={handleAddTodo} />

      <div className="todo-filters">
        {["all", "active", "completed"].map((value) => (
          <button
            key={value}
            type="button"
            className={filter === value ? "active" : ""}
            aria-pressed={filter === value}
            onClick={() => setFilter(value)}
          >
            {value === "all"
              ? "All"
              : value === "active"
                ? "Active"
                : "Completed"}
          </button>
        ))}
      </div>

      <TodoList
        todos={filteredTodos}
        onToggle={handleToggleTodo}
        onDelete={handleDeleteTodo}
      />

      <TodoStats
        total={total}
        completed={completed}
        remaining={remaining}
      />
    </div>
  );
}

export default TodoPanel;