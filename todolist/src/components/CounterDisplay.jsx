function CounterDisplay({ count, countError }) {
  return (
    <div>
      <p>Count: {count}</p>

      {count > 0 && <p>count &gt; 0</p>}
      {count < 0 && <p>count &lt; 0</p>}
      {count === 0 && <p>count = 0</p>}

      {countError && (
        <p className="counter-error" role="alert">
          Count must be between -10 and 10
        </p>
      )}
    </div>
  );
}

export default CounterDisplay;