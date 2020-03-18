import React, {Component} from 'react'
import { Tab } from 'semantic-ui-react'
import axios from 'axios';
import Movies from './Movies/Movies';
import SearchContainer from './SearchResults/SearchContainer';
import TvShows from './TvShows/TvShows';
import Title from './Title/Title';
import SearchForm from './SearchForm/SearchForm'
// Importing CSS file
import "./Tabs.css";




class TabExampleSecondaryPointing extends Component {
  state = { 
    activeIndex: 0 ,
    resul:'',
      Sname:'',
      type:'',
      show:'',
      movies:[
        {title:'noResults',
        popularity:'',
        release:''}
        ]
  }

// Function That Checks Which Tab is active
  handleTabChange = (e, { activeIndex }) => this.setState({ activeIndex })


// Search Functions to fetch data from API when user submit a search query

fetchResults = e => {
  const { Sname } = this.state
  const { type } = this.state

// Telling system to open search Tab when User clicks on Search submit query
  this.setState({
    activeIndex:1
  })
  e.preventDefault()

  // Fetching data from API
  axios.get(`https://api.themoviedb.org/3/search/${type}?api_key=aae2ed335accddfcfa559f3bff2e4895&query=${Sname}`)
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
}

//Handling changes in search box and storing all changes in state Sname
  handleInputChange = Sname => {
    
     this.setState({
      Sname
    })
  }
  handleTypeChange = type => {
      this.setState({
       type
     })
   }




  render()
  {
    // TAb Options and Their corresponding components to be rendered on click of a Tab
    const panes = [
      {
        menuItem: 'MOVIES',
        render: () => <Tab.Pane attached={false}>
          <Movies />
          </Tab.Pane>,
      },
      {
        menuItem: 'SEARCH RESULTS',
        render: () => 
        
        // Calling SearchContainer Components if user press search submit button otherwise render No Search page
          <Tab.Pane attached={false} >
           <SearchContainer movies={this.state.movies} show={this.state.show} />
           </Tab.Pane>,
      },
      {
        menuItem: 'TV SHOWS',
        render: () => <Tab.Pane attached={false}><TvShows /></Tab.Pane>,
      },
    ]
    
    
    const { activeIndex } = this.state;

    return(
<div>
  <div>
      <header>
           <Title />
      </header>
          <SearchForm
              onInputChange={this.handleInputChange}
              onSubmit={this.fetchResults}
              onTypeChange={this.handleTypeChange}
            />
      
      </div>
          <Tab
          menu={{ secondary: true, pointing: true }} 
          panes={panes} 
          activeIndex={activeIndex}
          onTabChange={this.handleTabChange}
          />
      </div >
    )
  }
}

export default TabExampleSecondaryPointing

