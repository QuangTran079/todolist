import { useState } from "react";
import CounterPanel from "./CounterPanel";

function CounterPage() {
  const [counters, setCounters] = useState([]);

  function handleAddCounter() {
    const newCounter = {
      id: crypto.randomUUID(),
      label: "Counter",
      count: 0,
      step: 1,
    };

    setCounters((prevCounters) => [...prevCounters, newCounter]);
  }

  function handleCountChange(id, newCount) {
    setCounters((prevCounters) =>
      prevCounters.map((counter) =>
        counter.id === id
          ? { ...counter, count: newCount }
          : counter
      )
    );
  }

  function handleStepChange(id, newStep) {
    setCounters((prevCounters) =>
      prevCounters.map((counter) =>
        counter.id === id
          ? { ...counter, step: newStep }
          : counter
      )
    );
  }

  function handleRemoveCounter(id) {
    setCounters((prevCounters) =>
      prevCounters.filter((counter) => counter.id !== id)
    );
  }

  return (
    <section className="counter-page">
      <div className="counter-page-header">
        <h2>My Counters</h2>

        <button
          type="button"
          className="add-counter-button"
          onClick={handleAddCounter}
        >
          Add new counter
        </button>
      </div>

      {counters.length === 0 && (
        <p className="counter-empty">Chưa có counter nào.</p>
      )}

      <div className="counter-list">
        {counters.map((counter) => (
          <CounterPanel
            key={counter.id}
            counter={counter}
            onCountChange={handleCountChange}
            onStepChange={handleStepChange}
            onRemove={handleRemoveCounter}
          />
        ))}
      </div>
    </section>
  );
}

export default CounterPage;