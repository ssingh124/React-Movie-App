import React from 'react'
import Card from '@material-ui/core/Card'
import "./TvShows.css";


const TvCards = props => {
  const { title, popularity,  release_date, overview , uri} = props
  const imgUrl = `https://image.tmdb.org/t/p/w500${uri}`;
  return (
      <div className="TvShowsCard">
    <Card>
    <div className='container_card'>
        <div className="card_img"> 
        <img src={imgUrl} className="img-responsive"/>
        </div >
        <div >
            <div className="card_info">
            <h1>{title}</h1>
            <div className="sub_info">
                <span className="release_date"> Release Date:{release_date}</span>
                <span className="popularity">Popularity: {popularity}</span>
            </div>
            <p>{ overview}</p>
            </div>
        </div> 

    </div>
    </Card>
</div>
  )
}

export default TvCards
