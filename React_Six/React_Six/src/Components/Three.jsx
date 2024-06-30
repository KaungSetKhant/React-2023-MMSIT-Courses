import React, { useContext } from 'react'
import { StateContext } from '../Context/StateContext'

const Three = () => {
  const {setCount} = useContext(StateContext)
  return (
    <div>
      Three Page
      <button onClick={() => setCount(prev => prev - 1)} className=' bg-red-600 p-2 ms-5 text-white rounded'>Decrement</button>
    </div>
  )
}

export default Three
