import React from 'react'
import Dog from './Dog'

const DogsList = (props) => {
    console.log("doglist props", props)

    const matchDescription = (dog) => {
        return dog.description.toLowerCase().includes(props.input.toLowerCase())
    }

    const matchCategory = (dog) => {
        return dog.category.toLowerCase().includes(props.input.toLowerCase())
    }

    const filteredDogsArray = () => {
        let filteredDogs = props.dogs.filter(dog => {
            return matchDescription(dog) || matchCategory(dog)
        })

        let dogsToDisplay = filteredDogs.map(dog => {
            return <Dog key={ dog.id } dog={ dog } />
        })
        console.log("dogs to display", dogsToDisplay)
        return dogsToDisplay
    }

    return (
        <table className="ui celled striped padded table">
            <tbody>
                <tr>
                    <th>
                        <h3 className="ui center aligned header">
                            Posted At
            </h3>
                    </th>
                    <th onClick={ () => console.log("REPLACE WITH A FUNCTION TO SORT BY DESCRIPTION") }>
                        <h3 className="ui center aligned header">
                            Description
            </h3>
                    </th>
                    <th onClick={ () => console.log("REPLACE WITH A FUNCTION TO SORT BY CATEGORY") }>
                        <h3 className="ui center aligned header">
                            Breed
            </h3>
                    </th>
                    <th>
                        <h3 className="ui center aligned header">
                            Amount
            </h3>
                    </th>
                </tr>

                { filteredDogsArray() }

            </tbody>
        </table>
    )
}

export default DogsList
