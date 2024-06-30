import React from 'react'
import { StateContextCustom } from '../Context/StateContext'

const IncreaseValue = () => {
  const {dispatch} = StateContextCustom()
    return (
    <div>
       <h2 className=' text-3xl'>This is IncreaseValue Page</h2> 
        <button
          onClick={() => dispatch({ type: "increase by value" })}
          className=" bg-teal-500 text-white px-6 py-1 rounded shadow me-2"
        >
          Increase by value
        </button>
    </div>
  )
}

export default IncreaseValue
