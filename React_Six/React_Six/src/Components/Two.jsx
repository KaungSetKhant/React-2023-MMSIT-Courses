import React, { useContext } from 'react'
import { StateContext } from '../Context/StateContext'

const Two = () => {
  const {setCount} = useContext(StateContext)
  return (
    <div>
      Two Page
      <button onClick={() => setCount(prev => prev + 1)} className=' bg-blue-600 p-2 ms-5 text-white rounded'>Increment</button>
    </div>
  )
}

export default Two
