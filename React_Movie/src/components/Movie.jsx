import React from 'react'
import { motion, transform } from 'framer-motion'

const Movie = ({title,backdrop_path}) => {
  return (
    <motion.div  animate={{scale:1,opacity:1}} initial={{opacity:1,scale:0.1}} exit={{opacity:0,scale:0}} transition={{duration:0.8}} className=''>
      <p className=' text-center mb-2 shadow-md text-teal-500 font-semibold'>{title.substring(0,30)}...</p>
      <img src={"https://image.tmdb.org/t/p/w300" + backdrop_path} className=' rounded shadow-md shadow-teal-300' />
    </motion.div>
  )
}

export default Movie
