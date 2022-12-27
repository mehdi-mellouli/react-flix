import React from 'react'
import MovieCard from './MovieCard'


const MovieList = ({ list }) => {
  
  return (
    
    <div>
      { list.length ? list.map(elm => { return <MovieCard elm={elm}   /> })  : <h2 id='not-found' >your movie is not found </h2> }
    </div>
  )
}

export default MovieList