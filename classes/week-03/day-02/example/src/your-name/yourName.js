import React, { Component } from 'react'

import { ShowYourName } from './showYourName'

class YourName extends Component {
  constructor(props) {
    super(props)
    this.state = {
      name: 'default baby!'
    }
  }

  handleNameChange = (e) => {
    console.log("changing name")
    this.setState({ name: e.target.value })
  }

  submitNameForm = (e) => {
    e.preventDefault()
    console.log("do something with our state, which is: ", this.state)
  }

  render() {
    return (
      <div>
        <form onSubmit={this.submitNameForm}>
          name: <input value={this.state.name} type="text" name="name" onChange={this.handleNameChange} /><br />
          <input type="submit" value="Submit" />
        </form>
        <ShowYourName name={this.state.name} />
      </div>
    )
  }
}

export default YourName
