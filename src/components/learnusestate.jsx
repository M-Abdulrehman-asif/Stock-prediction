import { useState } from 'react'


const LearnUseState = () => {
  // const [num, setNum] = useState(5)
  const [stockPrice, setStockPrice] = useState({stock: "Apple", price: 400}) 
  // let price = num
  // console.log(stockPrice)
  
  

  const handleStock = () => {
    setStockPrice({...stockPrice, price: 450})
  }

  return (
    <>
    <h1>learnusestate</h1>
    {/* <h3>Price: ${price}</h3> */}
    {/* <button onClick={handleprice}>Increase</button> */}
    <hr />
    <h1>Latest Stock Price</h1>
    <button onClick={handleStock}>Update Stock Price</button>
    <p>{stockPrice.price}</p>
    </>
  )
}

export default LearnUseState