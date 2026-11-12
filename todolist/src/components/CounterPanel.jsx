import { useState } from "react"

function CounterPanel() {
    const [count, setCount] = useState(0)
    const [step, setStep] = useState(1)
    const [countError, setCountError] = useState(false)
    function handleCountChange(newCount) {
        if (newCount > 10) {
            setCountError(true)
            return           
        }
        if (newCount < -10) {
            setCountError(true)
            return
        }
        setCountError(false)
        setCount(newCount)
    }

  return (
    <div className="panel counter-panel">
      <h2>Counter Panel</h2>
      <div>
        <p>Count: {count}</p>
        {count > 0 && <p>count &gt; 0</p>}
        {count < 0 && <p>count &lt; 0</p>}
        {count === 0 && <p>count = 0</p>}
        {countError && <p style={{ color: 'red' }}>Count must be between -10 and 10</p>}
      </div>
      <div>
        <p>Step</p>
        <select name="step" value={step} onChange={(e) => setStep(Number(e.target.value))}>
            <option value="1">1</option>
            <option value="5">5</option>
            <option value="10">10</option>
        </select>
      </div>
      <button onClick={() => handleCountChange(count + step)}>Tăng +{step}</button>
      <button onClick={() => handleCountChange(count - step)}>Tăng -{step}</button>
      <button onClick={() => handleCountChange(0)}>Reset</button>
    </div>
  )
}

export default CounterPanel