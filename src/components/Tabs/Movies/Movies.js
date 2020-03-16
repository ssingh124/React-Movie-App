// Reference https://material-ui.com/components/text-fields/

import React from 'react';

import TextField from '@material-ui/core/TextField';
import MenuItem from '@material-ui/core/MenuItem';
import MoviesContainer from './MoviesContainer'
import axios from 'axios';
import Loader from 'react-loader-spinner';
import "./Movies.css";

// Drop down menu Values for categories
const categories = [
  {
    value: 'now_playing',
    label: 'Now Playing',
  },
  {
    value: 'popular',
    label: 'Popular',
  },
  {
    value: 'top_rated',
    label: 'Top Rated',
  },
  {
    value: 'upcoming',
    label: 'Upcoming',
  },
];



class Movies extends React.Component {
  
  state = { 
    show: false,
    category:'',
      movies:[
        {title:'abc',
        popularity:'abc',
        release:'abc'}
        ]
   }


  // Function that handles the change of category and fetch data accordingly from Movies API
  handleChange = event => {
      //Getting Values from API
    axios.get(`https://api.themoviedb.org/3/movie/${event.target.value}?api_key=aae2ed335accddfcfa559f3bff2e4895`)
    .then(res => {
      const data = res.data.results;
      var i;
      for(i=0;i<data.length;i++)
      {
        //  Storing movies coming from api in state
        this.state.movies[i] = data[i]
        }

      //setting this flag true to indicate that values from api are fetched
      this.setState({ 
        show: true 
        });
    })
  };

render() {
  const {show} = this.state;
  const { movies , exp} = this.state

  return ( 
    <div className="movies">
        
      <TextField

          className="category_dropdown"
          select
          label="Category"  
          value={this.category}
          onChange={(e) => this.handleChange(e)}       
          variant="outlined"
        >
          {categories.map(option => (
              <MenuItem key={option.value} value={option.value}>
                {option.label}
              </MenuItem>
          ))}
      </TextField>
       
      {/* Checks if the values for movies are fetched from APi or NOT
      If no values it will call a Spinner
      Otherwise it will call <MovieContainer component to display Movies> */}
      
      {show ? (<MoviesContainer movies={movies}  abc={exp} />) : 
      (<Loader type="Puff" color="#00BFFF" height={100} width={100} timeout={6000} />)}
    
    </div>
   );
}
}
export default Movies


