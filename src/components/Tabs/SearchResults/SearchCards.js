import React from 'react'
import Card from '@material-ui/core/Card'
import "./Search.css";





const SearchCards = props => {
  

  const { title, popularity,  release_date, overview , uri, show} = props
  const imgUrl = `https://image.tmdb.org/t/p/w500${uri}`;



  if(show){
    if(title == "noResults"){   
        console.log(title+"From vcarfyhkcjhkcgjgh")
        return(
            <div className="NoResults">
               Sorry, There were no Results
            </div>
          )   
    }
    else{
        return (
            <div className="search">
          <Card>
          <div className='container_card'>
      
              <div className="card_img"> 
                 
              <img src={imgUrl} class="img-responsive"/>
              
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
  }
  
else{
    return(
        <div className="NoResults">
          Please, Initiate a Search
        </div>
      )
    }

}

export default SearchCards
