import React from 'react'
import { useLocation } from 'react-router-dom'

const Service = () => {
    const location = useLocation()
    console.log(location)
  return (
    <div>
      <h1>Service</h1>
      <p>{location.state ?.test}</p>
      {/* <p>{location.state ? location.state.test : null}</p> */}
    </div>
  )
}

export default Service
