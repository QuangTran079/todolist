function TodoStats({ total, completed, remaining }) {
  return (
    <div className="todo-stats">
      <p>Total: <strong>{total}</strong></p>
      <p>Completed: <strong>{completed}</strong></p>
      <p>Remaining: <strong>{remaining}</strong></p>
    </div>
  );
}

export default TodoStats;