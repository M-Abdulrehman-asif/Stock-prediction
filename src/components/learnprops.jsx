import React from 'react'

// const LearnProps = (props) => {
//   return (
//     <div>
//       <h1>Learn Props</h1>
//       <p>Stock: {props.stock}</p>
//       <p>Price: {props.price}</p>
//     </div>
//   )
// }

// export default LearnProps

const LearnProps = ({ stock, price}) => {
  return (
    <div>
      <h1>Learn Props</h1>
      <p>Stock: {stock}</p>
      <p>Price: {price}</p>
    </div>
  )
}

export default LearnProps