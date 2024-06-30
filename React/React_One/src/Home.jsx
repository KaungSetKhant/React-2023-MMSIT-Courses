import React from 'react'
import About from './About';

const Home = (props) => {
  return (
   <>
   <h1>Home {props.name} - {props.age} </h1>
   <h1>{props.info.name} - {props.info.age} - {props.info.gender}  </h1>
   <About/>
   </>
  )
}

export default Home;
