import React, { Component } from 'react';
import { BrowserRouter, Route, Link, Switch } from 'react-router-dom'
import MultiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import logo from './logo.svg';
import Nav from './Nav'
import People from './People'
import WithAjax from './WithAjax'

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <MultiThemeProvider>
          <Nav />
          <Switch>
            <Route exact path="/people" component={People} />
            <Route exact path="/ajax" component={WithAjax} />
            <Route render={() => <h1> no match man! </h1>} />
          </Switch>
        </MultiThemeProvider>
      </BrowserRouter>
    );
  }
}

export default App;
