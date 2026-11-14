function CounterControls({ onIncrease, onDecrease, onReset }) {
  return (
    <div className="counter-controls">
      <button type="button" onClick={onDecrease}>
        -1
      </button>

      <button type="button" onClick={onReset}>
        Reset
      </button>

      <button type="button" onClick={onIncrease}>
        +1
      </button>
    </div>
  );
}

export default CounterControls;