import { useState } from "react";
import CounterDisplay from "./CounterDisplay";
import CounterControls from "./CounterControls";

function CounterPanel({
  counter,
  onCountChange,
  onStepChange,
  onRemove,
}) {
  const [countError, setCountError] = useState(false);
  const { id, label, count, step } = counter;

  function handleCountChange(newCount) {
    if (newCount > 10 || newCount < -10) {
      setCountError(true);
      return;
    }

    setCountError(false);
    onCountChange(id, newCount);
  }

  return (
    <div className="panel counter-panel">
      <h2>{label}</h2>

      <CounterDisplay count={count} countError={countError} />

      <CounterControls
        step={step}
        onStepChange={(newStep) => onStepChange(id, newStep)}
        onIncrease={() => handleCountChange(count + step)}
        onDecrease={() => handleCountChange(count - step)}
        onReset={() => handleCountChange(0)}
        stepId={`counter-step-${id}`}
      />

      <button
        type="button"
        className="remove-counter-button"
        onClick={() => onRemove(id)}
      >
        Remove
      </button>
    </div>
  );
}

export default CounterPanel;