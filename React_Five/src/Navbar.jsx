import React, { useContext } from 'react'
import { StateContext } from './Context/StateContext'

const Navbar = () => {
    const {movieList,setMovieList} = useContext(StateContext)

    return (
    <div className=' flex justify-around items-center text-center align-middle bg-blue-600 p-10 text-white shadow-inner mb-10 mx-10'>
      <h2>
        Develop By......
      </h2>
      <div>
        Movie List : {movieList.length}
      </div>
    </div>
  )
}

export default Navbar
