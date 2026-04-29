import {  useState, useMemo, React} from 'react'

const LearnUseMemo = () => {

  const [count, setCount] = useState(0)
  const [number, setNumber] = useState(10000000000)
  
  
  const increaseCount = () => {
    if(count === 5){
      setNumber(99999999)
    }
    setCount(count + 1)
  }
  

  const sumofNumbers = useMemo(() => {
    let sum = 0;
    for(let i = 0; i <=number; i++){
      sum += i
    }
    return sum
  }, [number])

   
   
   console.log(`Sum of numbers from 1 to ${number}: ${sumofNumbers}`)

  return (
    <>
      <h1>Learn UseMemo</h1>
      <h2>Count: {count}</h2>
      {/* <h2>Doubled Count: {doubledCount}</h2>  */}
      <button onClick={increaseCount}>Increase</button>
    </>
  )
}

export default LearnUseMemo