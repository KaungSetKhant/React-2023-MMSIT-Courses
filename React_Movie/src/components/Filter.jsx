import React, { useEffect } from 'react'

const Filter = ({filtered,setFiltered,activeGenre,setActiveGenre,popular}) => {
 
   
 

  useEffect(()=>{
    if(activeGenre === 0){
        setFiltered(popular)
        return
    }
    const filterMovie = popular.filter(movie => movie.genre_ids.includes(activeGenre))
    setFiltered(filterMovie)
  },[activeGenre])

    return (
    <div className=' flex items-center justify-center mt-20 mx-auto'>
      <button onClick={() => setActiveGenre(0)} className='text-white rounded bg-teal-500 px-4 py-1 shadow-md me-3'>All</button>
      <button onClick={() => setActiveGenre(28)} className='text-white rounded bg-teal-500 px-4 py-1 shadow-md me-3'>Action</button>
      <button onClick={() => setActiveGenre(35)} className='text-white rounded bg-teal-500 px-4 py-1 shadow-md'>Comedy</button>
      
    </div>
  )
}

export default Filter
