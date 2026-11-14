function CounterControls({
  step,
  stepId,
  onStepChange,
  onIncrease,
  onDecrease,
  onReset,
}) {
  return (
    <>
      <div>
        <label htmlFor={stepId}>Step</label>

        <select
          id={stepId}
          value={step}
          onChange={(event) =>
            onStepChange(Number(event.target.value))
          }
        >
          <option value="1">1</option>
          <option value="5">5</option>
          <option value="10">10</option>
        </select>
      </div>

      <button type="button" onClick={onIncrease}>
        Tăng +{step}
      </button>

      <button type="button" onClick={onDecrease}>
        Giảm -{step}
      </button>

      <button type="button" onClick={onReset}>
        Reset
      </button>
    </>
  );
}

export default CounterControls;