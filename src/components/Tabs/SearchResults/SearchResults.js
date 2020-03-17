import React from 'react'
import SearchContainer from './SearchContainer'

const SearchResults = props => {
  return (
    <div className='container'>
        {/* Calling Movie Card with map function 
        (Each time calling for each movie) */}

        
           <SearchContainer
                movies={props.movies}
              />
        
      
    </div>
  )
}

export default SearchResults
