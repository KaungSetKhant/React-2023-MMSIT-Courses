import React, { useContext } from 'react'
import { StateContext } from '../Context/StateContext'

const One = () => {
  const {count} = useContext(StateContext)
  return (
    <div>
      <h2> One Page : {count}</h2>
    </div>
  )
}

export default One
