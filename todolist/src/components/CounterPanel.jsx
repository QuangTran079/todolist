import { useState } from "react"

function CounterPanel() {
    const [count, setCount] = useState(0)
  return (
    <div className="panel counter-panel">
      <h2>Counter Panel</h2>
      <div>
        <p>Count: {count}</p>
        {count > 0 && <p>count &gt; 0</p>}
        {count < 0 && <p>count &lt; 0</p>}
        {count === 0 && <p>count = 0</p>}
      </div>
      <button onClick={() => setCount(count + 1)}>Tăng +1</button>
      <button onClick={() => setCount(count - 1)}>Tăng -1</button>
      <button onClick={() => setCount(0)}>Reset</button>
    </div>
  )
}

export default CounterPanel