import React, { Component } from 'react'
import RaisedButton from 'material-ui/RaisedButton';

class People extends Component {
  constructor(props) {
    console.log("constructor")
    super(props)
    this.state = { counter: 0 }

    this.handleClick = this.handleClick.bind(this)
  }

  componentWillMount() {
    console.log("componentWillMount")
  }

  componentDidMount() {
    console.log("componentDidMount")
  }

  shouldComponentUpdate() {
    console.log("componentShouldUpdate")
    return true
  }

  componentDidUpdate() {
    console.log("componentDidUpdate")
  }

  componentWillUnmount() {
    console.log("componentWillUnMount")
  }

  handleClick() {
    this.setState((prevState) => {
      return { counter: prevState.counter + 1}
    })
  }

  render() {
    console.log("render")
    return (
      <div>
        <h1> People! {this.state.counter} </h1>
        <RaisedButton onClick={this.handleClick} label="Update State!" />
      </div>
    )
  }
}

export default People
