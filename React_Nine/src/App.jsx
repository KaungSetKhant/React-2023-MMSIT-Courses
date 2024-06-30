import React from 'react'
import One from './One'
import Two from './Two'
import Three from './Three'
// import { useDispatch, useSelector } from 'react-redux'
// import { increment } from './features/counterSlice'

const App = () => {
 
  return (
    <div className=' flex flex-col justify-center items-center mt-20'>
    
    <One/>
    <Two/>
    <Three/>
    
    </div>
  )
}

export default App
