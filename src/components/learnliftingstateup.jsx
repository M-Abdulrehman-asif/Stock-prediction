import React from 'react'

const LiftingStateup = ( props ) => {
    
    const handleclick = () => {
        let stockPrice = 800
        props.clickme(stockPrice)
    }

  return (
    <>
        <button onClick={handleclick}>Click me</button>
    </>
  )
}

export default LiftingStateup