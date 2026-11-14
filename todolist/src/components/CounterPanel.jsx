import { useState } from "react";
import CounterDisplay from "./CounterDisplay";
import CounterControls from "./CounterControls";

function CounterPanel() {
  const [count, setCount] = useState(0);
  const [step, setStep] = useState(1);
  const [countError, setCountError] = useState(false);

  function handleCountChange(newCount) {
    if (newCount > 10 || newCount < -10) {
      setCountError(true);
      return;
    }

    setCountError(false);
    setCount(newCount);
  }

  return (
    <div className="panel counter-panel">
      <h2>Counter Panel</h2>

      <CounterDisplay count={count} countError={countError} />

      <CounterControls
        step={step}
        onStepChange={setStep}
        onIncrease={() => handleCountChange(count + step)}
        onDecrease={() => handleCountChange(count - step)}
        onReset={() => handleCountChange(0)}
      />
    </div>
  );
}

export default CounterPanel;