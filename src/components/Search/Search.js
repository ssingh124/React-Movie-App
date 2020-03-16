import React, { Component } from 'react'
// import { getResults} from '../../services/api'
import SearchForm from '../SearchForm/SearchForm'
import SearchResults from '../Tabs/SearchResults/SearchResults'

export default class Search extends Component {
//State for saving name and type for search
    state = {
        Sname:'',
        type:'',
        show:'false'
    }


    fetchResults = e => {

        const { Sname } = this.state
        const { type } = this.state
        
        console.log(Sname)
        console.log(type)
        e.preventDefault()
       
        // getResults(name).then(recipes => {
        //     console.log('calling get recipes')
        //     this.setState({
        //       recipes,
        //       isLoading: false
        //     })
        //   })
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



    render() {
        const {show} = this.state;
        return (
            <div>
        {/*Calling Search component and passing passing two functions as props  */}
                <SearchForm
          onInputChange={this.handleInputChange}
          onSubmit={this.fetchResults}
          onTypeChange={this.handleTypeChange}
        />
      {/* { show && <SearchResults /> } */}
            </div>
        )
    }
}
