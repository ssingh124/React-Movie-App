import React from 'react'
import Button from '@material-ui/core/Button'
import TextField from '@material-ui/core/TextField';



const SearchForm = props => {
  
  return (
    //   Recieving Two functions as props
// On submit of this form send data to the function passed as onSubmit from Search.js
<form  onSubmit={props.onSubmit}>
    {/* Handling changes in search bar and sending values to search.js throught onInputChange function  */}
    <TextField
        margin="normal"
          id="outlined-required"
          label='Search'
        name='search'
          defaultValue="Search"
          variant="outlined"
          onChange={e => props.onInputChange(e.target.value)}
        />
      
      
    
  <select value="type" onChange={e => props.onTypeChange(e.target.value)}>
            <option value="now_playing">now_playing</option>
            <option value="popular">popular</option>
            <option value="top_rated">top_rated</option>
            <option value="upcoming">upcoming</option>
          </select>
      <Button variant='outlined' type='submit'>
        Search
      </Button>
    </form>
  )
}

export default SearchForm
