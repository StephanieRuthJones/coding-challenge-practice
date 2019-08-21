import React, { Component } from 'react'
import DogsContainer from './components/DogsContainer'

import './App.css'

class App extends Component {
  render() {
    return (
      <div className="ui raised segment">
        <div className="ui segment violet inverted">
          <h2>Dogs List</h2>
        </div>

        <DogsContainer />

      </div>
    )
  }
}

export default App
