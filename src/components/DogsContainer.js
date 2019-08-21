import React, { Component } from 'react'
import DogsList from './DogsList'
import Search from './Search'
import { dogs } from '../dogsData'

class DogsContainer extends Component {

    state = {
        dogs: dogs,
        input: ""
    }
    // get a default state working with the data imported from TransactionsData
    // use this to get the functionality working
    // then replace the default transactions with a call to the API




    handleChange = (event) => {
        this.setState({
            input: event.target.value
        })
    }

    render() {
        return (
            <div>
                <Search handleChange={ this.handleChange } />
                <DogsList dogs={ this.state.dogs } input={ this.state.input } />
            </div>
        )
    }
}

export default DogsContainer
