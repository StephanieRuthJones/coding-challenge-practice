import React, { Component } from 'react'
import DogsList from './DogsList'
import Search from './Search'
import { transactions } from '../transactionsData'

class AccountContainer extends Component {

    constructor() {
        super()

        // get a default state working with the data imported from TransactionsData
        // use this to get the functionality working
        // then replace the default transactions with a call to the API

    }


    handleChange(event) {
        // your code here
    }

    render() {

        return (
            <div>
                <Search />
                <DogsList />
            </div>
        )
    }
}

export default AccountContainer
