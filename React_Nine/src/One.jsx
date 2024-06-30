import React from 'react'
import { useSelector } from 'react-redux'

const One = () => {
    const {count} = useSelector(state => state.counter)
    return (
    <div className=' mb-10'>
      One Page - {count}
    </div>
  )
}

export default One
