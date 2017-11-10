import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import MyNav from './MyNav'
import Xaps from './Xaps'
import MyComponent from './MyComponent'
import { Switch, Route } from 'react-router-dom'

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      user: "Zach",
      xapUrl: "https://exaptive.city/api/v1/xaps/efa507b0-76f3-11e7-a0fe-d7ef23f2c0f6/spec.json",
      componentBase: "https://exaptive.city/api/v1/components/"
    }
  }

  render() {
    return (
      <div>
      <MyNav />
      <Switch>
        <Route path="/xaps" render={(props) => (
          <Xaps {...this.state} {...props}/>
        )} />
        <Route path="/mycomponent/:id" render={(props) => (
          <MyComponent {...this.state} {...props}/>
        )} />
      </Switch>
      </div>
    );
  }
}

export default App;
