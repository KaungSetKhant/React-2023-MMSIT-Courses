import React from 'react'
import { useDispatch } from 'react-redux'
import { increment } from './features/counterSlice'

const Two = () => {
    const dispatch = useDispatch()
    return (
    <div  className=' mb-10'>
      Two Page - <button onClick={() => dispatch(increment(1000))} className=' bg-teal-500 rounded text-white shadow px-6 py-2'>Increment</button> 
    </div>
  )
}

export default Two
