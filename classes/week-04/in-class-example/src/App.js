import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { Route, Switch } from 'react-router-dom'
import People from './People'
import Profile from './Profile'
import Header from './Header'
class App extends Component {
  render() {
    return (
      <div>
       <Header />
       <Switch>
         <Route exact path="/people" component={People} />
         <Route exact path="/profile" component={Profile} />
         <Route render={() => <h1> no match! </h1>} />
       </Switch>
      </div>
    )
  }
}

export default App;
