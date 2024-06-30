import React, { useContext, useState } from 'react'
import Movie from './Movie';
import { StateContext } from './Context/StateContext';

const MovieList = () => {
        
  const {movieList,setMovieList} = useContext(StateContext)
    return (
    <div>
      {movieList.map(movie => {
        return(
            <Movie key={movie.id} {...movie}/>
        )
      })}
    </div>
  )
}

export default MovieList
