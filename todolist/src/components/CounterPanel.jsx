import { useState } from "react";
import CounterDisplay from "./CounterDisplay";
import CounterControls from "./CounterControls";

function CounterPanel() {
  const [count, setCount] = useState(0);

  function handleIncrease() {
    setCount((prevCount) => prevCount + 1);
  }

  function handleDecrease() {
    setCount((prevCount) => prevCount - 1);
  }

  function handleReset() {
    setCount(0);
  }

  return (
    <div className="panel counter-panel">
      <h2>Counter Panel</h2>

      <CounterDisplay count={count} />

      <CounterControls
        onIncrease={handleIncrease}
        onDecrease={handleDecrease}
        onReset={handleReset}
      />
    </div>
  );
}

export default CounterPanel;