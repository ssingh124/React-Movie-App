import React from 'react'
import Button from '@material-ui/core/Button'
import TextField from '@material-ui/core/TextField';
import MenuItem from '@material-ui/core/MenuItem';
// Drop down menu Values for categories
const categories = [
  {
    value: 'movie',
    label: 'Movie',
  },
  {
    value: 'multi',
    label: 'Multi',
  },

];



const SearchForm = props => {

  return (
    //   Recieving Two functions as props
// On submit of this form send data to the function passed as onSubmit from Search.js
<form  onSubmit={props.onSubmit}>
    {/* Handling changes in search bar and sending values to search.js throught onInputChange function  */}
    <div style={{ display: 'inline' }}>
    <TextField
        margin="normal"
        id="outlined-required"
        label='Search'
        name='search'
        style ={{width: '32%', marginLeft: '1.2em'}}
        variant="outlined"
        onChange={e => props.onInputChange(e.target.value)}
      />
    <TextField
            className="category_dropdown"
            select
            label="Search Type"  
            onChange={(e) => props.onTypeChange(e.target.value)}       
            variant="outlined"
            margin="normal"
            style ={{width: '12%', marginLeft: '1.2em'}}
      >
            {categories.map(option => (
                <MenuItem key={option.value} value={option.value}>
                  {option.label}
                </MenuItem>
            ))}
    </TextField>
    
      <Button 
      color="primary"
      margin="normal"
      variant='outlined' 
      style ={{marginTop: '1.7em', marginLeft: '1.2em'}}
      type='submit'>
        Search
      </Button>
      </div>
    </form>
  )
}

export default SearchForm



