import { useState, useEffect } from "react"
import React from 'react'

const CounterApp = () => {
  const [count, setCount] = useState(0)

  const handleIncrease = () => {
    setCount(count + 1)
  }

  const handleDecrease = () => {
    setCount(count -1)
  }

  const handleReset = () => {
    setCount(0)
  }
  
  useEffect(() => {
    console.log("Component mounted")
  }, [count])

  return (
    <>
    <h1>Counter: {count}</h1>
    <hr />
    <button onClick={handleIncrease}>Increase</button>
    <br/>
    <button onClick={handleDecrease}>Decrease</button>
    <br />
    <button onClick={handleReset}>Reset</button>
    </>
  )
}

export default CounterApp