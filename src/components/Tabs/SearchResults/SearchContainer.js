import React from 'react'
import SearchCards from './SearchCards'

const SearchContainer = props => {




return (
    <div className='container'>
        {/* Calling Movie Card with map function 
        (Each time calling for each movie) */}

           
         {(props.movies).map(movie => {
          return (
           <SearchCards
                title={movie.title}
                popularity={movie.popularity}
                release_date={movie.release_date}
                overview={movie.overview}
                uri={movie.poster_path}
                show={props.show}
              />
          )
        })}
      
    </div>
  )
    
  
}

export default SearchContainer
