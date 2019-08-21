import React from 'react'

const Dog = (props) => {
    return (
        <tr>
            <td>{ props.dog.posted_at }</td>
            <td>{ props.dog.description }</td>
            <td>{ props.dog.category }</td>
            <td>{ props.dog.amount }</td>
        </tr>
    )
}

export default Dog
