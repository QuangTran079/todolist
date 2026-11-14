import { useState } from "react";

function TodoItem({ todo, onToggle, onDelete, onEdit }) {
  const [isEditing, setIsEditing] = useState(false);
  const [draftTitle, setDraftTitle] = useState("");

  const priority = todo.priority ?? "medium";

  function handleStartEdit() {
    setDraftTitle(todo.title);
    setIsEditing(true);
  }

  function handleSave() {
    const trimmedTitle = draftTitle.trim();

    if (trimmedTitle) {
      onEdit(todo.id, trimmedTitle);
    }

    setIsEditing(false);
  }

  return (
    <div className={`todo-item todo-priority-${priority}`}>
      <div className="todo-content">
        <input
          className="todo-checkbox"
          type="checkbox"
          aria-label={`Hoàn thành: ${todo.title}`}
          checked={todo.completed}
          onChange={() => onToggle(todo.id)}
        />

        <div className="todo-details">
          {isEditing ? (
            <input
              className="todo-edit-input"
              type="text"
              aria-label="Sửa tên công việc"
              value={draftTitle}
              onChange={(event) => setDraftTitle(event.target.value)}
              onBlur={handleSave}
              onKeyDown={(event) => {
                if (
                  event.key === "Enter" &&
                  !event.nativeEvent.isComposing
                ) {
                  event.preventDefault();
                  event.currentTarget.blur();
                }
              }}
              autoFocus
            />
          ) : (
            <button
              type="button"
              className={`todo-title ${todo.completed ? "completed" : ""}`}
              onClick={handleStartEdit}
              title="Nhấn để sửa tên"
            >
              {todo.title}
            </button>
          )}

          <span className={`priority-tag priority-${priority}`}>
            {priority}
          </span>
        </div>
      </div>

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