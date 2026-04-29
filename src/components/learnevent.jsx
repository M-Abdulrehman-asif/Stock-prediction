import React from 'react'

const LearnEvent = () => {
    const handleclickhere = (message) => {
        console.log(message)
    }

    const handleclick = () => {
        console.log('Button clicked')
    }
  return (
    <>
        <button onClick={handleclick}>Click me</button>
        <br />
        <button onClick={() => handleclickhere('Just clicked')}>Click me</button>
    </>
  )
}

export default LearnEvent