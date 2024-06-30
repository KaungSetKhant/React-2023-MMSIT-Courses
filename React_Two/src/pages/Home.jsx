// import React from 'react'
// import { Link } from 'react-router-dom'

// const Home = () => {
//   return (
//     <div>
//       <h1>Home</h1>
//       <Link to={'/about'}><button>go to about</button></Link>
//     </div>
//   )
// }

// export default Home



import React, { useRef } from 'react'
import { useNavigate } from 'react-router-dom'

const Home = () => {
    // const navigate = useNavigate();
    // const handler = () => {
    //     navigate('/about')
    // }

    const inputRef = useRef()
    const nav = useNavigate()
    const Click = () => {
        nav('/service', {state:{test:inputRef.current.value}})
        console.log(inputRef.current.value)
    }

  return (
    <div>
        {/* <button onClick={handler}>go to about</button> */}
        <input type="text" ref={inputRef} />
        <button onClick={Click}>Click</button>
    </div>
  )
}

export default Home
