import React from 'react'

const Search = () => {
    return (
        <div className="ui huge fluid icon input">
            <input
                type="text"
                placeholder={ "Search your Dogss" }
            />
            <i className="circular search link icon"></i>
        </div>
    )
}

export default Search
