import React, { Component } from 'react';
import AppBar from 'material-ui/AppBar';
import styled from 'styled-components';
import Avatar from 'material-ui/Avatar';
import Divider from 'material-ui/Divider';
import Paper from 'material-ui/Paper';
import PersonThatCanEat from './person-that-can-eat'

const PizzaAppBar = styled(AppBar)`
  background-color: #d48e25 !important;
`;

class PizzaParty extends Component {
  constructor(props) {
    super(props)

    this.state = {
      totalSlices: 100,
      lastPersonToEatPizza: ''
    }
  }

  onGrabMorePizza = (person, slices) => {
    this.setState((prevState) => {
      return {
        totalSlices: prevState.totalSlices - slices,
        lastPersonToEatPizza: person
      }
    })
  }

  render() {
    return (
      <div>
      <PizzaAppBar title="Pizza Party!" />
      <Paper zDepth={2}>
      <Avatar src="https://okpsa.org/wp-content/uploads/2017/05/Bob-Rockers.jpg" />
      <h1>@ bob's house!</h1>
      </Paper>
      <h2> Slices left {this.state.totalSlices}</h2>
      <h2> last person {this.state.lastPersonToEatPizza}</h2>
      <PersonThatCanEat person="Bob" onGrabMorePizza={this.onGrabMorePizza} />
      <PersonThatCanEat person="Zach" onGrabMorePizza={this.onGrabMorePizza} />
      <PersonThatCanEat person="Susan" onGrabMorePizza={this.onGrabMorePizza} />
      <PersonThatCanEat person="Carson" onGrabMorePizza={this.onGrabMorePizza} />
      </div>

    )
  }
}

export default PizzaParty
