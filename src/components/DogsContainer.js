import React, { Component } from 'react'
import DogsList from './DogsList'
import Search from './Search'
import { transactions } from '../transactionsData'

class DogsContainer extends Component {

    constructor() {
        super()
        this.state = {
            transactions: transactions
        }
        // get a default state working with the data imported from TransactionsData
        // use this to get the functionality working
        // then replace the default transactions with a call to the API

    }


    handleChange(event) {
        // your code here
    }

    render() {
        console.log("state", this.state.transactions)
        return (
            <div>
                <Search />
                <DogsList />
            </div>
        )
    }
}

export default DogsContainer
