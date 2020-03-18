// Reference https://material-ui.com/components/text-fields/

import React from 'react';
import TextField from '@material-ui/core/TextField';
import MenuItem from '@material-ui/core/MenuItem';
import TvShowsContainer from './TvShowsContainer'
import axios from 'axios';
import "./TvShows.css";

// Drop down menu Values for categories
const categories = [
  {
    value: 'airing_today',
    label: 'Airing Today',
  },
  {
    value: 'on_the_air',
    label: 'On The Air',
  },
  {
    value: 'popular',
    label: 'Popular',
  },
  {
    value: 'top_rated',
    label: 'Top Rated',
  },
];



class TvShows extends React.Component {
  state = { 
    show: false,
    category:'',
      tvshows:[
        {title:'abc',
        popularity:'abc',
        release:'abc'}
        ]
   }


  // Function that handles the change of category and fetch data accordingly from Movies API
  handleChange = event => {
      //Getting Values from API
    axios.get(`https://api.themoviedb.org/3/tv/${event.target.value}?api_key=aae2ed335accddfcfa559f3bff2e4895`)
    .then(res => {
      const data = res.data.results;
      var i;
      for(i=0;i<data.length;i++)
      {
        //  Storing movies coming from api in state
        this.state.tvshows[i] = data[i]
        }

      //setting this flag true to indicate that values from api are fetched
      this.setState({ 
        show: true 
        });
    })
  };

render() {
  const {show} = this.state;
  const { tvshows , exp} = this.state

  return ( 
    <div className="TvShows">
        
      <TextField
          className="category_dropdown"
          select
          label="Category"  
          value={this.category}
          onChange={(e) => this.handleChange(e)}   
          style ={{width: '10%'}}    
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
      
      {show ? (<TvShowsContainer tvshows={tvshows}  abc={exp} />) : 
      <h4>Please Select a Category</h4>}
    
    </div>
   );
}
}
export default TvShows


