import React, { Component } from 'react';

class PersonThatCanEat extends Component {
  constructor(props) {
    super(props)

    this.state = {
      slices: 0
    }
  }

  onInputChange = (e) => {
    this.setState({ slices: e.target.value })
  }

  onFormSubmit = (e) => {
    console.log(e)
    e.preventDefault()
    this.props.onGrabMorePizza(this.props.person, this.state.slices)
  }

  render() {
    return (
      <div>
        <h1> have {this.props.person} get more pizza </h1>
        <form onSubmit={this.onFormSubmit} >
          # of Slices:<br/>
          <input type="number" onChange={this.onInputChange} value={this.state.slices}/><br/>
          <input type="submit" value="Submit" />
        </form>
      </div>
    )
  }
}

export default PersonThatCanEat
