import { useState } from "react";

function TodoInput({ onAddTodo }) {
  const [title, setTitle] = useState("");
  const [priority, setPriority] = useState("medium");

  function handleSubmit(event) {
    event.preventDefault();

    const trimmedTitle = title.trim();
    if (!trimmedTitle) return;

    onAddTodo(trimmedTitle, priority);

    setTitle("");
    setPriority("medium");
  }

  return (
    <form className="todo-form" onSubmit={handleSubmit}>
      <input
        type="text"
        aria-label="Tên công việc"
        placeholder="Add a new todo..."
        value={title}
        onChange={(event) => setTitle(event.target.value)}
      />

      <select
        aria-label="Mức ưu tiên"
        value={priority}
        onChange={(event) => setPriority(event.target.value)}
      >
        <option value="low">Low</option>
        <option value="medium">Medium</option>
        <option value="high">High</option>
      </select>

      <button type="submit">Add Todo</button>
    </form>
  );
}

export default TodoInput;