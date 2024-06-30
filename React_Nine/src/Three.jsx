import React from 'react'
import { useDispatch } from 'react-redux'
import { decrement } from './features/counterSlice'

const Three = () => {
    const decre = useDispatch()
    return (
    <div>
      Three Page - <button onClick={() => decre(decrement(1000))} className=' bg-red-500 shadow rounded px-6 py-2 text-white'>Decrement</button>
    </div>
  )
}

export default Three
