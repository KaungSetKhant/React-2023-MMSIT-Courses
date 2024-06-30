import React from 'react'
import { useLocation } from 'react-router-dom'
import Searchchild from './Searchchild'


const Search = () => {
   const location =useLocation()
//    console.log(location)

   const item = location?.state?.filterProduct
   console.log(item)

  

    return (
    <div className='flex flex-wrap gap-10 justify-center mt-20 '>
      {item?.map(pd => {
        return(
            <Searchchild key={pd.id} {...pd} />
        )
      })}
    </div>
  )
}

export default Search
