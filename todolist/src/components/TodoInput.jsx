import { useState } from "react";

function TodoInput({ onAddTodo }) {
  const [title, setTitle] = useState("");

  function handleSubmit(event) {
    event.preventDefault();

    const trimmedTitle = title.trim();
    if (!trimmedTitle) return;

    onAddTodo(trimmedTitle);
    setTitle("");
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

      <button type="submit">Add Todo</button>
    </form>
  );
}

export default TodoInput;