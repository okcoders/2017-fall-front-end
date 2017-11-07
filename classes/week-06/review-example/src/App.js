import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { Switch, Route } from 'react-router-dom'
import { WithRouterExapNav } from './ExapNav'
import Xaps from './Xaps'
import ExaptiveComponent from './Component'

class App extends Component {
  constructor(props) {
    super(props)
    console.log("testing", props)
    this.state = {
      user: "Zach",
      xapUrl: "https://exaptive.city/api/v1/xaps/efa507b0-76f3-11e7-a0fe-d7ef23f2c0f6/spec.json",
      componentBase: "https://exaptive.city/api/v1/components/"
    }
  }

  render() {
    return (
      <div>
      <WithRouterExapNav />
      <Switch>
      <Route path="/xaps" render={(props) => (
        <Xaps {...this.state} {...props} />
      )} />
      <Route path="/component/:id" render={(props) => (
        <ExaptiveComponent appState={this.state} {...props} />
      )} />
      </Switch>
      </div>
    );
  }
}

export default App;
