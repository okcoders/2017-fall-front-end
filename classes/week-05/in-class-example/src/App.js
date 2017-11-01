import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { Switch, Route } from 'react-router-dom'
import PizzaParty from './pizza-party'

class App extends Component {
  render() {
    return (
      <Switch>
        <Route exact path="/pizza-party" component={PizzaParty}/>
      </Switch>
    );
  }
}

export default App;
