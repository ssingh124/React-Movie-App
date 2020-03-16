import React from 'react'
import MovieCards from './MovieCards'

const MoviesContainer = props => {
  return (
    <div className='container'>
        {/* Calling Movie Card with map function 
        (Each time calling for each movie) */}

         {(props.movies).map(movie => {
          return (
           <MovieCards
                title={movie.title}
                popularity={movie.popularity}
                release_date={movie.release_date}
                overview={movie.overview}
                uri={movie.poster_path}
              />
          )
        })}
      
    </div>
  )
}

export default MoviesContainer
