import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import { DisplayName } from './DisplayName'

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      name: ''
    }
  }

  handleSubmit = (e) => {
    e.preventDefault()
    console.log(this.state)
  }

  handleNameChange = (e) => {
    console.log("handling name change")
    this.setState({ name: e.target.value })
  }

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          First name:<br />
          <input type="text" name="name" value={this.state.name} onChange={this.handleNameChange} /><br />
          <input type="submit" value="Submit" />
        </form>

        <DisplayName name={this.state.name} />
      </div>
    )
  }
}

export default App;
