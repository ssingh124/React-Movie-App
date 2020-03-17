import React from 'react'
import TvShowCards from './TvShowCards'

const TvShowsContainer = props => {
  return (
    <div className='container'>
        {/* Calling Movie Card with map function 
        (Each time calling for each movie) */}

         {(props.tvshows).map(tvshow => {
          return (
           <TvShowCards
                title={tvshow.original_name}
                popularity={tvshow.popularity}
                release_date={tvshow.release_date}
                overview={tvshow.overview}
                uri={tvshow.poster_path}
              />
          )
        })}
      
    </div>
  )
}

export default TvShowsContainer
